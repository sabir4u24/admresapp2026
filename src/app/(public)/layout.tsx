import { Header } from "@/components/public/Header"
import { Footer } from "@/components/public/Footer"
import { AOSInitializer } from "@/components/public/AOSInitializer"
import "@/app/globals.css" // Keep Tailwind loaded, though we use Bootstrap classes here
import Script from "next/script"

export const metadata = {
  title: "Holy Brook School - We Care to Care",
  description: "Established in 2005, we are committed to providing quality education with a focus on moral values and discipline.",
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="public-layout">
      {/* Bootstrap 5 CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      {/* FontAwesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      {/* AOS Animation */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      <style>{`
        :root {
            --primary-sage: #84994F;
            --secondary-cream: #FFE797;
            --accent-gold: #FCB53B;
            --highlight-rust: #B45253;
            --dark-text: #2c3e50;
        }

        body.public-layout-body { 
            font-family: 'Poppins', sans-serif; 
            background-color: #fcfcf5;
            overflow-x: hidden;
        }

        .public-layout h1, .public-layout h2, .public-layout h3, .public-layout h4, .public-layout h5, .public-layout h6, .public-layout .navbar-brand {
            font-family: 'Playfair Display', serif;
        }

        .public-layout .bg-school { background-color: var(--primary-sage); color: white; }
        .public-layout .text-school { color: var(--primary-sage); }
        .public-layout .bg-cream { background-color: var(--secondary-cream); }
        .public-layout .text-gold { color: var(--accent-gold); }
        .public-layout .text-rust { color: var(--highlight-rust); }

        /* Navbar */
        .public-layout .navbar {
            border-bottom: 4px solid var(--accent-gold);
        }
        .public-layout .navbar-brand { font-weight: 700; color: var(--primary-sage) !important; font-size: 1.5rem; }
        .public-layout .nav-link { color: #555 !important; font-weight: 500; transition: color 0.3s; }
        .public-layout .nav-link:hover { color: var(--highlight-rust) !important; }
        .public-layout .dropdown-menu { border-top: 3px solid var(--highlight-rust); }

        /* Top Bar */
        .public-layout .top-bar { 
            background-color: #f8f9fa; 
            font-size: 0.9rem; 
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }

        /* Buttons */
        .public-layout .btn-warning {
            background-color: var(--accent-gold);
            border-color: var(--accent-gold);
            color: #fff;
        }
        .public-layout .btn-warning:hover {
            background-color: #e0a133;
            color: #fff;
        }
        .public-layout .btn-primary {
            background-color: var(--primary-sage);
            border-color: var(--primary-sage);
        }
        .public-layout .btn-primary:hover {
            background-color: #728543;
        }

        /* Footer */
        .public-layout footer { 
            background-color: var(--primary-sage); 
            color: white; 
            padding: 60px 0 30px; 
            position: relative;
        }
        .public-layout footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, var(--secondary-cream) 0%, var(--accent-gold) 50%, var(--highlight-rust) 100%);
        }
        .public-layout footer h5 { color: var(--secondary-cream); margin-bottom: 1.5rem; }
        .public-layout footer a { color: #e9ecef; text-decoration: none; transition: color 0.2s; }
        .public-layout footer a:hover { color: var(--accent-gold); padding-left: 5px; }
        .public-layout footer ul li { margin-bottom: 0.5rem; }

        .public-layout .btn-portal { 
            background-color: var(--highlight-rust); 
            color: white; 
            font-weight: 600; 
            border-radius: 20px;
            padding: 5px 20px;
        }
        .public-layout .btn-portal:hover { background-color: #964243; color: white; }
      `}</style>

      <Header />
      
      <main>
        {children}
      </main>

      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <AOSInitializer />
    </div>
  )
}
