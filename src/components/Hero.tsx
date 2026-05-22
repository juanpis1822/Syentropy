import { motion } from "motion/react";
import { ArrowRight, Calendar, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 py-24 select-none">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-surface-container-lowest overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 mix-blend-screen"></div>
        
        {/* Animated Radial Orbs */}
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-surface-tint/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Vanguard Tech Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8 border border-surface-tint/20 bg-surface-container-low/40"
        >
          <span className="w-2 h-2 rounded-full bg-surface-tint animate-pulse shadow-[0_0_8px_rgba(71,214,255,1)]"></span>
          <span className="font-sans text-[11px] font-semibold text-surface-tint uppercase tracking-widest">
            Vanguardia Tecnológica
          </span>
        </motion.div>

        {/* Big Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface tracking-tight mb-6 leading-tight"
        >
          Sinergia perfecta entre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-surface-tint to-secondary">
            Automatización y Diseño
          </span>
        </motion.h1>

        {/* Clear Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Transformamos la complejidad operativa en experiencias digitales fluidas e intuitivas. Interfaces de alto rendimiento respaldadas por lógica de automatización avanzada.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 z-10"
        >
          <button
            onClick={() => scrollToSection("servicios")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-white font-sans font-semibold hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 relative group overflow-hidden active:scale-95 cursor-pointer text-[15px]"
          >
            Explorar Servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection("contacto")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-on-surface hover:bg-surface-container-high hover:border-surface-tint/40 transition-all duration-300 font-sans font-semibold group active:scale-95 cursor-pointer text-[15px]"
          >
            Agendar Consultoría
            <Calendar className="w-4 h-4 text-secondary group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bounce Arrow Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => scrollToSection("contexto")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-on-surface-variant hover:text-primary transition-colors group z-10"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant/75 group-hover:text-primary transition-colors">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-surface-tint" />
      </motion.div>
    </section>
  );
}
