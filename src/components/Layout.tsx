import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background text-on-surface font-sans min-h-screen relative antialiased selection:bg-surface-tint selection:text-background overflow-x-hidden flex flex-col">
      
      {/* Absolute high-end starry aesthetic dot grid layout overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_1.5px,transparent_1.5px)] bg-[size:32px_32px]"></div>
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
            <Link to="/planes" className="hover:text-primary transition-colors">Contacto</Link>
            <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
