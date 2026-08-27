import { motion } from "motion/react";
import { ArrowRight, Calendar, ArrowDown, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 select-none">
      {/* Animated Mesh Background with 3D Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-surface-container-lowest overflow-hidden">
        {/* 3D Hero Concept Image integrated into the background */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[100vw] min-h-[100vh]"
        >
          <img 
            src="/hero-3d.jpg" 
            alt="" 
            className="w-full h-full object-cover mix-blend-lighten blur-[2px] opacity-40 md:opacity-50"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest"></div>
        
        {/* Animated gradient mesh orbs */}
        <div className="hidden md:block absolute top-[-25%] left-[15%] w-[900px] h-[900px] bg-primary-container/25 rounded-full blur-[180px] animate-mesh"></div>
        <div className="hidden md:block absolute bottom-[-15%] right-[-15%] w-[700px] h-[700px] bg-secondary/25 rounded-full blur-[160px] animate-mesh" style={{ animationDelay: '5s' }}></div>
        <div className="hidden md:block absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-tertiary/20 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '10s' }}></div>
        <div className="hidden md:block absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-surface-tint/20 rounded-full blur-[140px] animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-surface-tint/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-premium mb-10 animate-border-glow"
        >
          <Zap className="w-3.5 h-3.5 text-surface-tint" />
          <span className="font-sans text-[11px] font-semibold text-surface-tint uppercase tracking-[0.2em]">
            Vanguardia Tecnológica
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-on-surface tracking-[-0.04em] mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05]"
        >
          Sinergia perfecta entre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-surface-tint to-primary animate-shimmer text-glow">
            Automatización y Diseño
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Transformamos la complejidad operativa en experiencias digitales fluidas e intuitivas. Interfaces de alto rendimiento respaldadas por lógica de automatización avanzada.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-2 sm:px-4 z-10"
        >
          <button
            onClick={() => scrollToSection("servicios")}
            className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-7 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-primary-container to-primary text-white font-sans font-semibold hover:shadow-[0_0_50px_rgba(21,198,230,0.5)] hover:scale-[1.03] transition-all duration-300 relative overflow-hidden active:scale-95 cursor-pointer text-sm sm:text-[15px]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            Explorar Servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection("contacto")}
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-7 sm:px-10 py-4 sm:py-4.5 rounded-full glass-premium text-on-surface hover:border-surface-tint/50 transition-all duration-300 font-sans font-semibold group active:scale-95 cursor-pointer text-sm sm:text-[15px] animate-border-glow"
          >
            Agendar Consultoría
            <Calendar className="w-4 h-4 text-surface-tint group-hover:rotate-12 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-on-surface-variant/50 text-[10px] sm:text-xs font-sans"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Infraestructura 24/7</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-outline-variant/30"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>+5 Proyectos Desplegados</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-outline-variant/30"></div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <span>Bogotá, Colombia</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => scrollToSection("contexto")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-on-surface-variant hover:text-primary transition-colors group z-10"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium text-on-surface-variant/60 group-hover:text-primary transition-colors">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-surface-tint" />
      </motion.div>
    </section>
  );
}
