# AdmResApp 2026 - School Management System

## Overview
This project is a modernized rebuild of the legacy Django-based school management system. It has been entirely rewritten using a modern JavaScript/TypeScript stack to ensure high performance, easy maintainability, and seamless serverless hosting on platforms like Vercel (free tier).

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: Neon (Serverless PostgreSQL)
- **ORM**: Prisma
- **Authentication**: NextAuth.js (Auth.js v5) with Credentials Provider
- **UI & Styling**: Tailwind CSS, Shadcn UI, Lucide Icons
- **Image Hosting**: Cloudinary
- **PDF Generation**: `@react-pdf/renderer`
- **CSV Parsing**: `papaparse`

---

## Architecture & Key Features

### 1. Database & Prisma (Neon Serverless)
The database was migrated from a legacy Django local SQL dump directly into Neon Postgres. 
We used `npx prisma db pull` to introspect the existing Django tables (`core_student`, `core_marksentry`, `core_subject`, etc.) so that no data was lost. 
- **NextAuth Integration**: We appended standard NextAuth tables (`User`, `Account`, `Session`) to the `schema.prisma` and ran `npx prisma db push --accept-data-loss` to add them alongside the Django tables.

### 2. Authentication (NextAuth)
- The app uses **NextAuth Credentials Provider**.
- **Migration Script**: Because the old Django passwords used PBKDF2 hashing which is incompatible with standard Bcrypt flows in JS by default, we ran `scripts/migrate_users.js` to copy all teachers from Django's `auth_user` into NextAuth's `User` table, leaving passwords blank.
- **Middleware**: `src/proxy.ts` (formerly `middleware.ts` in Next 15) securely protects all `/dashboard` routes, redirecting unauthenticated users to `/login`.

### 3. File Uploads (Cloudinary)
- Used `next-cloudinary` for uploading student photos.
- The `CldUploadWidget` is integrated into `src/app/dashboard/students/add/page.tsx`. It directly uploads images from the browser to Cloudinary and returns a secure URL that gets saved to the Neon database.

### 4. Client-Side PDF Generation (Bypassing Vercel Limits)
To avoid Vercel's 10-second serverless timeout limits during heavy PDF generation:
- We built `getStudentReportData` in `src/app/dashboard/reports/actions.ts` to fetch the raw JSON data.
- The `GeneratePDFButton` (Client Component) calls this action.
- The data is passed to `PDFReportCard.tsx`, which uses `@react-pdf/renderer` to dynamically generate the PDF **in the user's browser CPU**.
- The component is wrapped in `next/dynamic` with `ssr: false` to ensure it never tries to render PDF binaries on the Node.js server.

### 5. CSV Bulk Operations
- Client-side CSV parsing is handled by `papaparse` in `src/components/dashboard/CSVHandler.tsx`.
- Parsed JSON is sent to a Next.js Server Action (`importStudentsCSV`) which uses `prisma.core_student.createMany` to bulk insert records efficiently.

---

## Directory Structure

```text
AdmResApp2026/
├── prisma/
│   └── schema.prisma        # Database schema combining Django tables and NextAuth
├── scripts/
│   └── migrate_users.js     # Script to move users from auth_user to User
├── src/
│   ├── app/
│   │   ├── api/auth/        # NextAuth API catch-all routes
│   │   ├── dashboard/       # Main protected application routes
│   │   │   ├── marks/       # Marks entry grids
│   │   │   ├── reports/     # PDF generation pages
│   │   │   └── students/    # Student list, add, and CSV logic
│   │   ├── login/           # NextAuth login page and actions
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── auth.ts              # NextAuth configuration and PrismaAdapter setup
│   ├── components/
│   │   ├── dashboard/       # Sidebar, Header, UserButton, PDF templates
│   │   └── ui/              # Shadcn UI reusable components
│   ├── lib/
│   │   ├── prisma.ts        # Prisma client singleton (prevents connection exhaustion)
│   │   └── utils.ts         # Tailwind merge utilities
│   ├── next-auth.d.ts       # TypeScript augmentations for NextAuth roles
│   └── proxy.ts             # Next.js Middleware for route protection
├── .env                     # Environment variables (DB, Cloudinary, NextAuth)
└── package.json
```

---

## Future Modifications

**Adding New Fields to Students:**
1. Update the `model core_student` in `prisma/schema.prisma`.
2. Run `npx prisma db push`.
3. Run `npx prisma generate`.
4. Update the forms in `src/app/dashboard/students/add/page.tsx` and the Server Action mappings.

**Modifying the Report Card:**
- Open `src/components/dashboard/PDFReportCard.tsx`.
- Adjust the `<View>`, `<Text>`, and `StyleSheet` objects. Note that React-PDF uses a subset of CSS (Flexbox heavily) and does not support Tailwind classes directly.

**Testing Locally:**
```bash
npm run dev
```
Make sure `.env` contains `DATABASE_URL`, `AUTH_SECRET`, `CLOUDINARY_URL`, and `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.
