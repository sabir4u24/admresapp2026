const fs = require('fs');
const path = require('path');

const srcDir = '/home/sabir/HolyBrook/B/AdmResApp/templates/website';
const destDir = '/home/sabir/HolyBrook/B/AdmResApp2026/src/app/(public)';

const pages = {
  'about.html': 'about',
  'academics.html': 'academics',
  'admissions.html': 'admissions',
  'apply_admission.html': 'apply-admission',
  'faculty.html': 'faculty',
  'gallery.html': 'gallery',
  'news_list.html': 'news',
  'downloads.html': 'downloads',
  'apply_tc.html': 'apply-tc',
  'contact.html': 'contact',
  'mandatory_disclosure.html': 'mandatory-disclosure'
};

for (const [filename, route] of Object.entries(pages)) {
  const filePath = path.join(srcDir, filename);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove Django template tags
  content = content.replace(/{% extends 'website\/base.html' %}/g, '');
  content = content.replace(/{% load static %}/g, '');
  content = content.replace(/{% block content %}/g, '');
  content = content.replace(/{% endblock %}/g, '');
  content = content.replace(/{% block extra_css %}/g, '');
  content = content.replace(/{% block extra_js %}/g, '');

  // Convert HTML to JSX
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/readonly/g, 'readOnly');
  content = content.replace(/required/g, 'required'); // ensure it's not required=""
  content = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (!p1.endsWith('/')) {
      return `<img${p1} />`;
    }
    return match;
  });
  content = content.replace(/<input([^>]+)>/g, (match, p1) => {
    if (!p1.endsWith('/')) {
      return `<input${p1} />`;
    }
    return match;
  });
  content = content.replace(/<hr([^>]+)>/g, (match, p1) => {
    if (!p1.endsWith('/')) {
      return `<hr${p1} />`;
    }
    return match;
  });
  content = content.replace(/<br>/g, '<br />');
  content = content.replace(/rows="([^"]+)"/g, 'rows={$1}');
  content = content.replace(/allowfullscreen=""/g, 'allowFullScreen');
  content = content.replace(/colspan="([^"]+)"/g, 'colSpan={$1}');
  content = content.replace(/onclick="([^"]+)"/g, '');
  content = content.replace(/tabindex="([^"]+)"/g, 'tabIndex={$1}');
  content = content.replace(/width="([^"]+)"/g, '');
  
  content = content.replace(/<script[\s\S]*?<\/script>/g, '');
  content = content.replace(/<style[\s\S]*?<\/style>/g, '');
  
  // Replace style strings with objects - basic heuristic
  content = content.replace(/style="([^"]+)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const objStr = rules.map(rule => {
      const parts = rule.split(':');
      if (parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      return `${key}: '${value}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${objStr} }}`;
  });

  // Handle some specific django tags
  content = content.replace(/{% url '([^']+)' %}/g, '/$1');
  content = content.replace(/{% url '([^']+)' [^%]+ %}/g, '/$1');
  // cleanup typical missing routes
  content = content.replace(/\/website_home/g, '/');
  content = content.replace(/\/apply_admission/g, '/apply-admission');
  content = content.replace(/\/news_list/g, '/news');
  content = content.replace(/\/apply_tc/g, '/apply-tc');
  content = content.replace(/\/mandatory_disclosure/g, '/mandatory-disclosure');

  // Strip remaining django logic blocks that will break JSX
  content = content.replace(/{% if [^%]+ %}/g, '');
  content = content.replace(/{% elif [^%]+ %}/g, '');
  content = content.replace(/{% else %}/g, '');
  content = content.replace(/{% endif %}/g, '');
  content = content.replace(/{% for [^%]+ %}/g, '');
  content = content.replace(/{% empty %}/g, '');
  content = content.replace(/{% endfor %}/g, '');
  content = content.replace(/{{ [^}]+ }}/g, ''); // strip variables
  content = content.replace(/{% csrf_token %}/g, ''); 

  // Fix HTML comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Fix empty styles resulting from regex
  content = content.replace(/style=/g, '');
  content = content.replace(/alt=""/g, 'alt="image"');

  const dirPath = path.join(destDir, route);
  fs.mkdirSync(dirPath, { recursive: true });

  const tsxContent = `
export default function ${route.replace(/-/g, '')}Page() {
  return (
    <>
      ${content}
    </>
  )
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), tsxContent);
  console.log(`Translated ${filename} -> ${route}/page.tsx`);
}
