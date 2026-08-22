import { useState, useEffect } from "react";
import { Globe, Cpu, BarChart3, HeartHandshake, CheckCircle2, ArrowRight, X } from "lucide-react";
import { ServiceItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

export default function ServicesBento() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (selectedService) {
      // Smooth scroll to center the section
      const el = document.getElementById("servicios");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        // Wait for smooth scroll to finish before locking body
        timeoutId = setTimeout(() => {
          document.body.style.overflow = "hidden";
        }, 400); // 400ms is usually enough for smooth scroll
      } else {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const services: ServiceItem[] = [
    {
      id: "infra",
      icon: "globe",
      title: "Infraestructura Digital",
      description: "Arquitecturas web robustas y escalables construidas con tecnologías de vanguardia para asegurar rendimiento, seguridad y mantenibilidad.",
      bullets: [
        "Landing Pages de alto impacto & E-commerce",
        "Desarrollo full-stack Frontend/Backend ágil",
        "Configuración e implementación en la nube",
        "Optimización SEO y Web Vitals avanzada"
      ],
      colorClass: "from-cyan-400 to-sky-500 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] bg-cyan-400/5 hover:border-cyan-400/30",
      spanClass: "lg:col-span-2",
    },
    {
      id: "auto",
      icon: "bot",
      title: "Automatización e IA",
      description: "Desarrollo de flujos de trabajo inteligentes que eliminan tareas repetitivas e integración de Agentes de IA para optimizar procesos corporativos.",
      bullets: [
        "Integración profunda de API y Webhooks",
        "Agentes conversacionales e IA generativa",
        "Automatización de procesos (n8n, Make)",
        "Sistemas OCR y procesamiento de documentos"
      ],
      colorClass: "from-indigo-400 to-purple-500 text-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.15)] bg-indigo-400/5 hover:border-indigo-400/30",
      spanClass: "lg:col-span-1",
    },
    {
      id: "data",
      icon: "chart",
      title: "Analítica de Datos / BI",
      description: "Servicio liderado por talento certificado por IBM. Transformamos datos crudos en insights accionables para respaldar decisiones estratégicas.",
      bullets: [
        "Cuadros de mando (Dashboards) interactivos",
        "Minería, preparación y modelado de datos",
        "Visualizaciones avanzadas de KPI comerciales",
        "Automatización de reportes semanales/mensuales"
      ],
      colorClass: "from-teal-400 to-emerald-500 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.15)] bg-teal-400/5 hover:border-teal-400/30",
      spanClass: "lg:col-span-1",
    },
    {
      id: "support",
      icon: "support",
      title: "Soporte y Consultoría",
      description: "Acompañamiento continuo y asesoramiento estratégico para asegurar la evolución, seguridad y rendimiento óptimo de su ecosistema digital.",
      bullets: [
        "Mantenimiento técnico preventivo mensual",
        "Auditorías completas de arquitectura y código",
        "Optimización de costos Cloud (AWS, GCP)",
        "Consultoría en transformación digital"
      ],
      colorClass: "from-blue-400 to-indigo-500 text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.15)] bg-blue-400/5 hover:border-blue-400/30",
      spanClass: "lg:col-span-2",
    }
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "globe":
        return <Globe className="w-7 h-7" />;
      case "bot":
        return <Cpu className="w-7 h-7" />;
      case "chart":
        return <BarChart3 className="w-7 h-7" />;
      default:
        return <HeartHandshake className="w-7 h-7" />;
    }
  };

  return (
    <section id="servicios" className={`py-16 md:py-24 px-6 md:px-12 bg-surface-container-lowest relative border-t border-outline-variant/10 ${selectedService ? "z-50" : "z-10"}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Portafolio de Servicios
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para operar con precisión milimétrica y escalar sin fricción.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((svc, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              key={svc.id}
              className={`glass-premium p-6 md:p-8 rounded-[2rem] flex flex-col group border border-outline-variant/15 relative overflow-hidden cursor-pointer ${svc.colorClass} ${svc.spanClass || ""}`}
              onClick={() => setSelectedService(svc)}
            >
              {/* Animated corner light effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:shadow-2xl transition-all">
                {renderIcon(svc.icon)}
              </div>

              {/* Title & Desc */}
              <h3 className="font-sans text-xl font-semibold text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed flex-grow font-light">
                {svc.description}
              </p>

              {/* Quick Bullets Preview */}
              <div className="pt-4 border-t border-white/5 space-y-2.5 mt-auto">
                {svc.bullets.slice(0, 2).map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[13px] text-on-surface font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-surface-tint group-hover:translate-x-1 transition-transform self-start">
                <span>Ver detalles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detailed Modal Dialog - Portaled to escape all clipping constraints */}
        {typeof document !== "undefined" && createPortal(
          <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed top-[80px] left-0 right-0 bottom-0 z-[100] flex justify-center p-4 md:p-8 bg-background/90 backdrop-blur-md overflow-y-auto custom-scroller"
              onClick={() => setSelectedService(null)}
            >
              <div className="flex items-start md:items-center justify-center min-h-full w-full max-w-xl py-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="w-full glass-premium rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-surface-tint/20 p-6 md:p-10 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
  
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center text-primary">
                    {renderIcon(selectedService.icon)}
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-bold text-on-surface">
                      {selectedService.title}
                    </h3>
                    <span className="text-xs text-surface-tint tracking-widest uppercase font-semibold">
                      Servicio de Alta Fidelidad
                    </span>
                  </div>
                </div>
  
                <p className="font-sans text-[15px] text-on-surface-variant mb-6 leading-relaxed font-light">
                  {selectedService.description}
                </p>
  
                <div className="space-y-4">
                  <h4 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider">
                    Especificaciones del servicio:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedService.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-on-surface/90 glass-panel p-3.5 rounded-xl border-white/5 bg-background/40">
                        <CheckCircle2 className="w-5 h-5 text-surface-tint shrink-0 mt-0.5" />
                        <span className="font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const el = document.getElementById("contacto");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans font-semibold text-sm hover:shadow-[0_0_15px_rgba(0,180,255,0.4)] transition-all active:scale-95"
                  >
                    Solicitar este Servicio
                  </button>
                </div>
              </motion.div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
