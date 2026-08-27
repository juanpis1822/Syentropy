import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Méndez',
    role: 'CEO, TechFlow Solutions',
    content: 'Syentropy transformó completamente nuestra operación. La automatización que implementaron redujo nuestros tiempos de respuesta en un 80% y la interfaz que diseñaron es simplemente impecable.',
    rating: 5,
    avatarInitials: 'CM',
    color: 'text-primary',
    bgColor: 'bg-primary/15',
  },
  {
    name: 'Ana Rodríguez',
    role: 'Directora de Operaciones, LogiSmart',
    content: 'El equipo de Syentropy entendió perfectamente nuestras necesidades. Desarrollaron un sistema que integra todos nuestros procesos y nos permite escalar sin fricción.',
    rating: 5,
    avatarInitials: 'AR',
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
  },
  {
    name: 'Miguel Torres',
    role: 'Fundador, DataPrime',
    content: 'La calidad del diseño y la robustez del backend superaron nuestras expectativas. Syentropy no solo entrega productos, entrega soluciones que realmente funcionan.',
    rating: 5,
    avatarInitials: 'MT',
    color: 'text-tertiary',
    bgColor: 'bg-tertiary/15',
  },
  {
    name: 'Laura Castillo',
    role: 'CTO, InnovaRetail',
    content: 'Desde la consultoría inicial hasta el despliegue final, el proceso fue impecable. La plataforma que construyeron maneja miles de transacciones diarias sin ningún problema.',
    rating: 5,
    avatarInitials: 'LC',
    color: 'text-primary',
    bgColor: 'bg-primary/15',
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeItems = isDesktop
    ? [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length]
      ]
    : [testimonials[activeIndex]];

  return (
    <section id="testimonios" className="relative py-24 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
      {/* Ambient gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 md:w-12 h-px bg-primary/50" />
          <span className="text-primary text-xs md:text-sm uppercase tracking-widest font-semibold text-center">
            Lo Que Dicen Nuestros Clientes
          </span>
          <span className="w-8 md:w-12 h-px bg-primary/50" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-on-surface mb-6">
          Confianza que se{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            construye
          </span>
        </h2>
        
        <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-16 text-lg">
          Cada proyecto es una oportunidad para superar expectativas y construir relaciones duraderas.
        </p>

        {/* Carousel Container */}
        <div className="min-h-[380px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
            >
              {activeItems.map((testimonial, idx) => (
                <div
                  key={`${activeIndex}-${idx}`}
                  className="glass-premium rounded-[2rem] p-8 md:p-10 relative flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 w-16 h-16 md:w-24 md:h-24 text-surface-tint/10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-on-surface-variant text-lg leading-relaxed italic mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-full h-px bg-outline-variant/20 mb-6" />
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.bgColor} ${testimonial.color}`}>
                        {testimonial.avatarInitials}
                      </div>
                      <div>
                        <h4 className="text-on-surface font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-on-surface-variant/70 text-xs mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeIndex 
                  ? 'bg-primary' 
                  : 'bg-outline-variant/40 hover:bg-outline-variant/60'
              }`}
              aria-label={`Ver testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
