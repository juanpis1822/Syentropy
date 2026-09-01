import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-outline-variant py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-surface-tint/30 group-hover:border-surface-tint/80 transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1TZxp3Q9hNukqobGeUlViy3Ph-JiWsuhdVPdv6YLmRhUtiDkI2jRPsmiBqkL5oDU4GRHXgSNV0GgsAjcAoCBL9j5H2iAlYFgLqZV9dcg3liiBPtHbzyJAkPgdjDgCib2L3qBglelkFLmHl44d0e35P6XaQeDRV-2pExiTT5pjU-cgy845_fgLjsi5YU9pPKWy-v5L4ZWzd9Zeylmc9EE7Ma_PjHsS9jdLYueuOzjDICa8kwHPci7KlLzEzc4urCdWJzkxxUXpiw"
              alt="Syentropy Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay"></div>
          </div>
          <span className="font-sans text-2xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
            Syentropy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12">
          {[
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Planes", path: "/planes" },
            { name: "Contacto", path: "/contacto" }
          ].map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <li key={tab.name} className="relative">
                <Link
                  to={tab.path}
                  className={`font-sans text-[15px] font-medium transition-colors cursor-pointer block py-2 ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full gradient-glow"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contacto")}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary-container to-primary-container text-white font-sans font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 transform active:scale-95 cursor-pointer text-sm"
          >
            Empezar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface-variant hover:text-primary p-2 rounded-lg bg-surface-container/40 border border-outline-variant active:scale-95 transition-all"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-outline-variant py-6 px-6"
          >
            <ul className="flex flex-col space-y-4">
            {[
              { name: "Inicio", path: "/" },
              { name: "Servicios", path: "/servicios" },
              { name: "Planes", path: "/planes" },
              { name: "Contacto", path: "/contacto" }
            ].map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <li key={tab.name}>
                  <Link
                    to={tab.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full text-left font-sans text-base font-semibold transition-colors py-2 block ${
                      isActive ? "text-primary border-l-2 border-primary pl-3 bg-primary/5 rounded-r-lg" : "text-on-surface-variant hover:text-primary pl-3"
                    }`}
                  >
                    {tab.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 border-t border-outline-variant">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contacto");
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-white font-sans font-semibold text-sm"
              >
                Empezar <ArrowRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
