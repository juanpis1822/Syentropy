import { OperationalPhase } from "../types";

export default function StrategyTimeline() {
  const phases: OperationalPhase[] = [
    {
      phase: "Fase 1",
      title: "Validación de Mercado",
      description: "Despliegue rápido de MVP (Minimum Viable Product) para validar la necesidad del cliente y ajustar la propuesta de valor con usuarios reales de manera medible.",
      colorClass: "bg-primary border-primary/30 text-primary animate-pulse shadow-[0_0_12px_rgba(165,231,255,0.8)]",
    },
    {
      phase: "Fase 2",
      title: "Modularización",
      description: "Desarrollo de arquitecturas modulares y microservicios que permiten escalar componentes específicos de manera independiente, optimizando costos de infraestructura y rendimiento general.",
      colorClass: "bg-secondary border-secondary/30 text-secondary shadow-[0_0_12px_rgba(182,196,255,0.8)]",
    },
    {
      phase: "Fase 3",
      title: "Consolidación SaaS",
      description: "Estabilización de la plataforma para un modelo de suscripción, integrando analítica de uso avanzada, soporte en tiempo real automatizado y esquemas de alta disponibilidad frente a picos de tráfico.",
      colorClass: "bg-surface-tint border-surface-tint/30 text-surface-tint shadow-[0_0_12px_rgba(71,214,255,0.8)]",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-surface-container-lowest relative z-10 border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Estrategia Operativa
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Nuestra hoja de ruta para la construcción de soluciones SaaS escalables.
          </p>
        </div>

        {/* Timeline Vector Layout */}
        <div className="relative border-l border-outline-variant/30 pl-6 md:pl-10 ml-4 md:ml-12 space-y-12">
          
          {phases.map((p, idx) => (
            <div key={idx} className="relative group">
              {/* Inner Circle Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-outline-variant/60 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-surface-tint'}`}></div>
              </div>

              {/* Glowing Outer Light Indicator */}
              <div className="absolute -left-[51px] md:-left-[67px] top-[-5px] w-14 h-14 rounded-full bg-white/[0.01] pointer-events-none group-hover:bg-white/[0.03] transition-colors duration-500"></div>

              {/* Content Card container */}
              <div className="glass-panel p-6 rounded-2xl md:rounded-[2rem] border border-outline-variant/10 hover:border-surface-tint/20 transition-all duration-300">
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-surface-tint block mb-2">
                  {p.phase}
                </span>
                
                <h3 className="font-sans text-xl font-bold text-on-surface mb-3 tracking-tight">
                  {p.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
