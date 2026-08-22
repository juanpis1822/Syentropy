import { motion } from "motion/react";
import ServicesBento from "../components/ServicesBento";
import Team from "../components/Team";
import ScrollReveal from "../components/ScrollReveal";

export default function ServiciosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-primary-container/15 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-30%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tighter mb-4 sm:mb-6 leading-[1.1]">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-surface-tint to-primary text-glow">
              Servicios
            </span>
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Soluciones integrales diseñadas para operar con precisión milimétrica y escalar sin fricción.
          </p>
        </motion.div>
      </section>

      <ScrollReveal>
        <ServicesBento />
      </ScrollReveal>

      {/* Visual separator with glow */}
      <div className="relative h-px mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      </div>

      <ScrollReveal delay={0.1}>
        <Team />
      </ScrollReveal>
    </>
  );
}
