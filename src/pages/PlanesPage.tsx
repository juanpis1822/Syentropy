import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Plans from "../components/Plans";
import ScrollReveal from "../components/ScrollReveal";

export default function PlanesPage() {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate("/contacto");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[20%] w-[600px] h-[600px] bg-secondary-container/15 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter mb-6 leading-[1.1]">
            Planes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-surface-tint text-glow">
              a tu medida
            </span>
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Selecciona el plan que mejor se adapte a las necesidades de tu empresa. Todos incluyen soporte dedicado.
          </p>
        </motion.div>
      </section>

      <ScrollReveal>
        <Plans onSelectPlan={handleSelectPlan} />
      </ScrollReveal>
    </>
  );
}
