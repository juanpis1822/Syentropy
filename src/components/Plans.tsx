import { Check } from "lucide-react";
import { motion } from "motion/react";
import { PlanItem } from "../types";

interface PlansProps {
  onSelectPlan: (planName: string) => void;
}

export default function Plans({ onSelectPlan }: PlansProps) {
  const plans: PlanItem[] = [
    {
      name: "Presencia Digital",
      tagline: "Perfil objetivo: Negocios estableciendo su huella online.",
      bullets: [
        "Landing Page Optimizada",
        "Formularios de Contacto con validación",
        "Hosting y Dominio Básico incluido por 1 año"
      ],
      colorClass: "hover:border-primary/40 focus:border-primary/60",
    },
    {
      name: "Operación Automatizada",
      tagline: "Perfil objetivo: Empresas buscando eficiencia operativa.",
      bullets: [
        "Integración de CRM / ERP corporativos",
        "Automatización de Tareas Repetitivas",
        "Notificaciones de estado Multicanal (WhatsApp, Mail)"
      ],
      isRecommended: true,
      badge: "Recomendado",
      colorClass: "border-primary/60 shadow-[0_0_30px_rgba(0,210,255,0.15)] md:-translate-y-4 hover:border-primary",
    },
    {
      name: "Infraestructura Inteligente",
      tagline: "Perfil objetivo: Negocios requiriendo plataformas robustas con IA.",
      bullets: [
        "Desarrollo Web / App a la medida (Custom)",
        "Agentes de IA de última generación integrados",
        "Arquitectura Serverless de alta disponibilidad"
      ],
      colorClass: "hover:border-secondary/40 focus:border-secondary/60",
    },
    {
      name: "Analítica y BI",
      tagline: "Perfil objetivo: Empresas orientadas a decisiones basadas en datos.",
      bullets: [
        "Dashboards Gerenciales e Interactivos a la medida",
        "Modelado Numérico y Análisis Predictivo de Datos",
        "Procesos ETL, Auditoría y Limpieza de Bases de Datos"
      ],
      colorClass: "hover:border-tertiary/40 focus:border-tertiary/60",
    }
  ];

  return (
    <section id="planes" className="relative py-16 md:py-24 px-6 md:px-12 bg-background z-10 border-t border-outline-variant/10">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-secondary-container/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Planes Comerciales
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Inversión clara para ecosistemas digitales escalables.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {plans.map((p, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
              key={idx}
              className={`glass-premium p-5 md:p-6 rounded-[2rem] flex flex-col border border-outline-variant/20 transition-colors duration-300 relative cursor-pointer ${p.colorClass} ${p.isRecommended ? 'animate-border-glow' : ''}`}
            >
              {/* Highlight Recommended Badge */}
              {p.isRecommended && p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-container to-secondary-container text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                  {p.badge}
                </div>
              )}

              {/* Title & Tagline */}
              <h3 className="font-sans text-xl font-bold text-on-surface mb-2 mt-2">
                {p.name}
              </h3>
              <p className="font-sans text-xs text-on-surface-variant mb-6 font-light leading-relaxed min-h-[40px]">
                {p.tagline}
              </p>

              {/* Specs Intro */}
              <div className="mb-3">
                <span className="text-xs font-bold text-on-surface uppercase tracking-wide block">
                  Incluye:
                </span>
              </div>

              {/* Bullets List (Staggered Animation) */}
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                  hidden: {}
                }}
                className="space-y-3.5 flex-grow mb-8"
              >
                {p.bullets.map((b, bIdx) => (
                  <motion.li 
                    key={bIdx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-2.5 text-sm text-on-surface/90 group-hover:text-white transition-colors"
                  >
                    <div className="mt-0.5 max-w-[18px] shrink-0">
                      <Check className="w-4 h-4 text-surface-tint" />
                    </div>
                    <span className="font-light leading-snug">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(p.name)}
                className={`relative overflow-hidden group w-full text-center py-3 rounded-xl font-sans font-semibold text-sm transition-all cursor-pointer ${
                  p.isRecommended
                    ? "bg-gradient-to-r from-primary-container to-secondary-container text-white shadow-[0_0_20px_rgba(0,180,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transform active:scale-95"
                    : "bg-surface-container-high text-on-surface hover:bg-surface-tint hover:text-background transform active:scale-95"
                }`}
              >
                <span className="relative z-10">Solicitar Info</span>
                {p.isRecommended && (
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
