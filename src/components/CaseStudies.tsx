import { useState, useEffect } from "react";
import { ArrowUpRight, Activity, Smartphone, Laptop, CheckCircle2, X } from "lucide-react";
import { ProjectCase } from "../types";
import { createPortal } from "react-dom";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<ProjectCase | null>(null);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCase]);

  const cases: ProjectCase[] = [
    {
      title: "Los Tronquitos",
      meta: "Gestión para 6 sedes, Flask, PostgreSQL, WABA.",
      description: "Ecosistema integral desarrollado para coordinar inventarios físicos, despachos sincronizados de mercancía y facturación instantánea de 6 sucursales principales.",
      href: "https://tronquitos.co",
      type: "web",
      metrics: [
        { label: "Sincronización Multisede", value: "Realtime" },
        { label: "Optimización de Inventario", value: "+30%" },
        { label: "Mensajes WhatsApp API / Mes", value: "+5,000" }
      ],
      colorClass: "hover:border-primary/35 shadow-[0_0_20px_rgba(34,211,238,0.05)] text-primary",
    },
    {
      title: "Rapitodo FastFood",
      meta: "Integración de Agentes de IA para atención al cliente.",
      description: "Consultor de pedidos e Inteligencia Artificial autónoma capaz de procesar y coordinar órdenes simultáneas de comida rápida por canales de chat, conectando directo a la cocina.",
      href: "https://rapitodofastfood.com",
      type: "app",
      metrics: [
        { label: "Automatización de Órdenes", value: "92%" },
        { label: "Tiempo de Respuesta Promedio", value: "<15s" },
        { label: "Satisfacción del Cliente", value: "4.8/5" }
      ],
      colorClass: "hover:border-secondary/35 shadow-[0_0_20px_rgba(182,196,255,0.05)] text-secondary",
    }
  ];

  return (
    <section id="portafolio" className="py-24 px-6 md:px-12 bg-surface-container-lowest relative z-10 border-t border-outline-variant/10">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
              Casos de Éxito
            </h2>
            <p className="font-sans text-base text-on-surface-variant max-w-xl leading-relaxed font-light">
              Ejecuciones de alta fidelidad que combinan lógica y estética.
            </p>
          </div>
        </div>

        {/* Mocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((project, idx) => (
            <div
              key={idx}
              className={`group flex flex-col cursor-pointer transition-all duration-300 ${project.colorClass}`}
              onClick={() => setSelectedCase(project)}
            >
              {/* Outer visual enclosure wrapper */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden glass-panel border border-outline-variant/15 mb-6 bg-surface-container flex items-end justify-center p-6 md:p-8">
                {/* Visual gradient filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent opacity-60 group-hover:opacity-30 transition-opacity z-10 pointer-events-none"></div>

                {project.type === "web" ? (
                  /* Web Browser Simulator visual Mock */
                  <div className="w-full h-full border border-outline-variant/20 rounded-t-2xl bg-background overflow-hidden shadow-2xl transform translate-y-6 group-hover:translate-y-3 transition-transform duration-500 flex flex-col">
                    {/* Mock Browser header */}
                    <div className="h-7 border-b border-outline-variant/20 flex items-center px-4 gap-1.5 bg-surface-container-high/60">
                      <div className="w-2 h-2 rounded-full bg-outline-variant/65"></div>
                      <div className="w-2 h-2 rounded-full bg-outline-variant/65"></div>
                      <div className="w-2 h-2 rounded-full bg-outline-variant/65"></div>
                      <div className="text-[9px] text-on-surface-variant/40 font-mono ml-3">localhost:3000</div>
                    </div>
                    {/* Mock Inner Content */}
                    <div className="p-6 flex-1 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="w-1/4 h-3 bg-surface-container-highest rounded-full"></div>
                        <div className="flex gap-2">
                          <span className="w-8 h-2 bg-slate-700 rounded-full"></span>
                          <span className="w-8 h-2 bg-slate-700 rounded-full"></span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 flex-1 mt-2">
                        <div className="glass-panel rounded-xl flex flex-col p-3 border-white/5 justify-between">
                          <Laptop className="w-4 h-4 text-primary" />
                          <div className="w-5/6 h-2 bg-surface-container-highest rounded"></div>
                        </div>
                        <div className="col-span-2 glass-panel rounded-xl border-primary/20 border flex flex-col justify-between p-3 bg-primary/5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-bold text-primary font-mono">STATUS: LIVE</span>
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="w-3/4 h-2 bg-surface-container-highest rounded"></div>
                            <div className="w-1/2 h-1.5 bg-surface-container-highest/60 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Smartphone App Mock Visualizer element */
                  <div className="w-3/5 h-[95%] border border-outline-variant/25 rounded-t-[2.5rem] bg-background overflow-hidden shadow-2xl transform translate-y-6 group-hover:translate-y-2 transition-transform duration-500 relative">
                    <img src="/app-mockup.jpg" alt="App Mockup" className="absolute inset-0 w-full h-full object-cover" />
                    {/* Mock speaker overlay */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 flex justify-center z-10">
                      <div className="w-1/2 h-1.5 bg-black/60 rounded-full backdrop-blur-md border border-white/10"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Metadata labels */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-sans text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant mt-1 font-light leading-relaxed">
                    {project.meta}
                  </p>
                </div>
                <div className="p-1 rounded-full border border-outline-variant/2 bg-surface-container-high/40 text-on-surface-variant group-hover:text-primary group-hover:border-primary/20 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Case Detailed Modal - Portaled to escape clipping */}
        {typeof document !== "undefined" && createPortal(
          selectedCase && (
            <div 
              className="fixed top-[80px] left-0 right-0 bottom-0 z-[100] flex justify-center p-4 md:p-8 bg-background/90 backdrop-blur-md overflow-y-auto custom-scroller"
              onClick={() => setSelectedCase(null)}
            >
              <div className="flex items-start justify-center min-h-full w-full max-w-2xl py-4">
                <div
                  className="w-full glass-panel rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-surface-tint/20 bg-surface-container-low p-6 md:p-10 relative animate-fadeIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all active:scale-90"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center text-primary font-bold font-mono">
                      {selectedCase.type === "web" ? "SaaS" : "APP"}
                    </div>
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-on-surface">
                        {selectedCase.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-mono select-none">
                        {selectedCase.meta}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                        Resumen del proyecto:
                      </h4>
                      <p className="font-sans text-base text-on-surface-variant leading-relaxed font-light">
                        {selectedCase.description} El diseño de la interfaz se planificó optimizando la baja latencia de red, la accesibilidad general para todos los usuarios y un dashboard analítico interno robusto.
                      </p>
                    </div>

                    {/* Key Metrics breakdown block */}
                    {selectedCase.metrics && (
                      <div>
                        <h4 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
                          Resultados Clave Obtenidos:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {selectedCase.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="glass-panel p-4 rounded-2xl border-white/5 bg-background/40 flex flex-col justify-center">
                              <span className="font-sans text-2xl font-bold text-primary block mb-0.5">
                                {metric.value}
                              </span>
                              <span className="font-sans text-[11px] text-on-surface-variant/80 font-light leading-snug">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-4 rounded-2xl border border-outline-variant/20 bg-background/30 flex items-start gap-4">
                      <Activity className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed font-light">
                        <strong className="text-on-surface block mb-0.5 font-semibold">Integración de arquitectura lógica profunda</strong>
                        Este proyecto cuenta con sistemas redundantes automatizados, bases de datos PostgreSQL optimizadas por índices eficientes, y flujos de webhook sincronizados.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <a
                      href={selectedCase.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-sm font-semibold text-primary hover:text-surface-tint underline decoration-primary/40 underline-offset-4 cursor-pointer"
                    >
                      Visitar sitio web oficial
                    </a>
                    
                    <button
                      onClick={() => {
                        setSelectedCase(null);
                        const el = document.getElementById("contacto");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans font-semibold text-sm hover:shadow-[0_0_15px_rgba(0,180,255,0.4)] transition-all active:scale-95"
                    >
                      Me interesa algo similar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
          document.body
        )}

      </div>
    </section>
  );
}
