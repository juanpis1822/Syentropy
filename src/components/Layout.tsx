import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { FloatingCTA } from "./FloatingCTA";
import { Link } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div className="bg-background text-on-surface font-sans min-h-screen relative antialiased selection:bg-surface-tint selection:text-background overflow-x-hidden flex flex-col">
      
      {/* Multi-layer animated background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        
        {/* Ambient gradient orbs that add depth to the dark background */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary-container/[0.08] rounded-full blur-[180px] animate-mesh"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[160px] animate-mesh" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/[0.04] rounded-full blur-[200px] animate-float"></div>
        
        {/* Subtle horizontal light beam */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 flex-grow pt-[80px]">
        <Outlet />
      </main>

      {/* Corporate Modern Footer */}
      <footer className="relative z-10 py-16 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10 select-none mt-auto">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1TZxp3Q9hNukqobGeUlViy3Ph-JiWsuhdVPdv6YLmRhUtiDkI2jRPsmiBqkL5oDU4GRHXgSNV0GgsAjcAoCBL9j5H2iAlYFgLqZV9dcg3liiBPtHbzyJAkPgdjDgCib2L3qBglelkFLmHl44d0e35P6XaQeDRV-2pExiTT5pjU-cgy845_fgLjsi5YU9pPKWy-v5L4ZWzd9Zeylmc9EE7Ma_PjHsS9jdLYueuOzjDICa8kwHPci7KlLzEzc4urCdWJzkxxUXpiw"
                  alt="Syentropy Footer Logo"
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-surface-tint/25"
                />
                <span className="font-sans font-bold text-on-surface text-lg tracking-tight">
                  Syentropy
                </span>
              </div>
              <p className="font-sans text-sm text-on-surface-variant/70 max-w-xs leading-relaxed font-light">
                Sinergia perfecta entre automatización y diseño. Soluciones digitales premium desde Bogotá, Colombia.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              <Link to="/servicios" className="font-sans text-sm text-on-surface-variant/80 hover:text-primary transition-colors">Servicios</Link>
              <Link to="/planes" className="font-sans text-sm text-on-surface-variant/80 hover:text-primary transition-colors">Planes</Link>
              <Link to="/contacto" className="font-sans text-sm text-on-surface-variant/80 hover:text-primary transition-colors">Contacto</Link>
              <Link to="/privacidad" className="font-sans text-sm text-on-surface-variant/80 hover:text-primary transition-colors">Privacidad</Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-on-surface-variant/50">
                Síguenos
              </span>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/syentropy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-surface-container-high/50 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant/60 social-instagram transition-all duration-300 hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:scale-110"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-surface-container-high/50 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant/60 social-whatsapp transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:scale-110"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-on-surface-variant/50 font-light">
              © {new Date().getFullYear()} Syentropy. Todos los derechos reservados.
            </div>
            <div className="text-[10px] text-on-surface-variant/30 font-mono">
              Bogotá, Colombia 🇨🇴
            </div>
          </div>
        </div>
      </footer>

      {/* Floating elements */}
      <ScrollToTopButton />
      <FloatingCTA />
    </div>
  );
}
