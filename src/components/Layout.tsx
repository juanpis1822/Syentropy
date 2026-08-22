import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
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
      <footer className="relative z-10 py-12 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10 text-center select-none mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1TZxp3Q9hNukqobGeUlViy3Ph-JiWsuhdVPdv6YLmRhUtiDkI2jRPsmiBqkL5oDU4GRHXgSNV0GgsAjcAoCBL9j5H2iAlYFgLqZV9dcg3liiBPtHbzyJAkPgdjDgCib2L3qBglelkFLmHl44d0e35P6XaQeDRV-2pExiTT5pjU-cgy845_fgLjsi5YU9pPKWy-v5L4ZWzd9Zeylmc9EE7Ma_PjHsS9jdLYueuOzjDICa8kwHPci7KlLzEzc4urCdWJzkxxUXpiw"
              alt="Syentropy Footer Logo"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover border border-surface-tint/25"
            />
            <span className="font-sans font-bold text-on-surface text-sm tracking-wide">
              Syentropy
            </span>
          </div>
          
          <div className="text-xs text-on-surface-variant font-light">
            © {new Date().getFullYear()} Syentropy. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-6 text-xs text-on-surface-variant/80 font-mono">
            <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <Link to="/planes" className="hover:text-primary transition-colors">Planes</Link>
            <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
            <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
