import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle2, Sparkles, Terminal, ArrowRight, ShieldCheck, Mail, User, Info, RefreshCw } from "lucide-react";
import { supabase } from "../lib/supabase";

interface InquiryFormProps {
  selectedPlan: string;
}

export default function InquiryForm({ selectedPlan }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("automatizacion");
  const [description, setDescription] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressMsg, setProgressMsg] = useState("");
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [blueprintData, setBlueprintData] = useState<any>(null);

  // Sync with selected plan from parent
  useEffect(() => {
    if (selectedPlan) {
      if (selectedPlan === "Presencia Digital" || selectedPlan === "Infraestructura Inteligente") {
        setInterest("desarrollo");
      } else if (selectedPlan === "Operación Automatizada") {
        setInterest("automatizacion");
      } else if (selectedPlan === "Analítica y BI") {
        setInterest("consultoria");
      }
      
      // Auto-populate description with interest placeholder
      setDescription(`Solicitud de información detallada para el plan: ${selectedPlan}. Deseamos implementar...`);
    }
  }, [selectedPlan]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !description) {
      alert("Por favor diligencie todos los campos requeridos.");
      return;
    }

    setIsSubmitting(true);
    setProgressMsg("Conectando con base de datos segura...");
    
    try {
      // Send data to Supabase PostgreSQL
      const { error } = await supabase
        .from('solicitudes')
        .insert([
          { 
            nombre: name, 
            email: email, 
            interes: interest, 
            descripcion: description 
          }
        ]);

      if (error) {
        console.error("Error inserting data: ", error);
        alert("Hubo un problema al guardar la solicitud. Por favor intenta de nuevo.");
        setIsSubmitting(false);
        return;
      }

      // Simulate high-fidelity AI-powered generation sequence for UI feeling
      const messages = [
        "Solicitud guardada exitosamente...",
        "Iniciando análisis de infraestructura...",
        "Estructurando pipeline de datos óptimo...",
        "Generando Roadmap Arquitectónico..."
      ];

      let msgIndex = 0;
      setProgressMsg(messages[0]);
      
      const interval = setInterval(() => {
        msgIndex++;
        if (msgIndex < messages.length) {
          setProgressMsg(messages[msgIndex]);
        } else {
          clearInterval(interval);
          
          // Build customized high-precision blueprint data
          let suggestedTech = "";
          let steps: string[] = [];
          let priceRange = "";
          let duration = "";

          if (interest === "automatizacion") {
            suggestedTech = "n8n Integration Cloud, WABA (WhatsApp Business API), NestJS API Router, OpenAI Assistant Model";
            steps = [
              "Mapeo de cuellos de botella manuales en su circuito operativo.",
              "Desarrollo e integración de API Webhook en n8n para comunicación bidireccional.",
              "Despliegue de Agente conversacional inteligente con filtros de control.",
              "Testing de redundancias y optimización de flujos de notificaciones."
            ];
            duration = "3-5 Semanas";
            priceRange = "Operación Estándar";
          } else if (interest === "desarrollo") {
            suggestedTech = "React 19, Next.js Full-Stack App Router, Tailwind CSS v4, Postgres Database, AWS Cloud Deployment";
            steps = [
              "Wireframing inicial interactivo y diagramación de experiencia UI/UX.",
              "Construcción modular frontend orientada a rendimiento y optimización SEO.",
              "Estructuración de base de datos transaccional con arquitectura serverless.",
              "Despliegue final con pipeline CI/CD en entornos de alta disponibilidad."
            ];
            duration = "4-7 Semanas";
            priceRange = "Infraestructura Escalable";
          } else if (interest === "diseno") {
            suggestedTech = "Figma Design Tokens, Tailwind Premium UI Kit, Motion Animations, SVG Vector Asset sets";
            steps = [
              "Auditoría estética de marca y definición de la guía de estilos digital.",
              "Construcción del sistema de componentes reactivos unificados.",
              "Refinanciamiento tipográfico y optimización del ritmo visual general.",
              "Entrega de prototipo interactivo de alta fidelidad listo para producción."
            ];
            duration = "2-4 Semanas";
            priceRange = "Diseño de Vanguardia";
          } else {
            suggestedTech = "Consultoría Avanzada por Talentos Certificados IBM, Auditoría Integral de Base de Datos y Procesos";
            steps = [
              "Entrevistas de requerimiento operacional con líderes de área.",
              "Auditoría profunda de la arquitectura web actual y cuellos de botella.",
              "Definición técnica detallada de la propuesta de transformación.",
              "Soporte continuado mensual y ajustes periódicos de seguridad."
            ];
            duration = "A convenir";
            priceRange = "Consultoría Especializada";
          }

          setBlueprintData({
            clientName: name,
            interestArea: interest === "automatizacion" ? "Automatización de Procesos" : interest === "desarrollo" ? "Desarrollo Web / App" : interest === "diseno" ? "Diseño UI/UX" : "Consultoría General",
            suggestedTech,
            steps,
            duration,
            priceRange
          });

          setIsSubmitting(false);
          setShowBlueprint(true);
        }
      }, 800);
    } catch (err) {
      console.error("Unknown error:", err);
      alert("Falla en la red. Intente de nuevo.");
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setDescription("");
    setShowBlueprint(false);
    setBlueprintData(null);
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 bg-surface relative border-t-glow">
      {/* Background soft focus bubble */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {!showBlueprint ? (
          /* Contact Form Input slide */
          <div className="glass-premium gradient-glow rounded-[2.5rem] p-8 md:p-12 border border-outline-variant/20 relative">
            <div className="text-center mb-10">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
                Iniciar Conversación
              </h2>
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed font-light">
                Describa brevemente su desafío tecnológico. Nuestro equipo analizará la viabilidad y propondrá una ruta arquitectónica inmediata.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nombre Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/80 pl-2">
                    <User className="w-3.5 h-3.5 text-surface-tint" />
                    Nombre o Empresa
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Su nombre o compañía"
                    className="w-full bg-surface-container-high border border-outline-variant/40 rounded-2xl text-on-surface font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-surface-tint transition-all placeholder-on-surface-variant/30"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/80 pl-2">
                    <Mail className="w-3.5 h-3.5 text-surface-tint" />
                    Email Corporativo
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@empresa.com"
                    className="w-full bg-surface-container-high border border-outline-variant/40 rounded-2xl text-on-surface font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-surface-tint transition-all placeholder-on-surface-variant/30"
                  />
                </div>

              </div>

              {/* Área de interés Select */}
              <div className="space-y-2">
                <label htmlFor="interest" className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/80 pl-2">
                  <Info className="w-3.5 h-3.5 text-surface-tint" />
                  Área de Interés Principal
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-surface-container-high border border-outline-variant/40 rounded-2xl text-on-surface font-sans text-sm px-4 py-3.5 appearance-none focus:outline-none focus:border-surface-tint transition-all"
                  >
                    <option value="automatizacion" className="bg-surface-container-high text-on-surface">Automatización de Procesos (WABA, Bots, APIS)</option>
                    <option value="desarrollo" className="bg-surface-container-high text-on-surface">Desarrollo Web / App a la medida (Next.js, FastAPI)</option>
                    <option value="diseno" className="bg-surface-container-high text-on-surface">Diseño UI/UX (Prototipos Figma de alta fidelidad)</option>
                    <option value="consultoria" className="bg-surface-container-high text-on-surface">Consultoría General & Analítica (Certificaciones IBM)</option>
                  </select>
                </div>
              </div>

              {/* Descripción del proyecto textbox */}
              <div className="space-y-2">
                <label htmlFor="description" className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/80 pl-2">
                  <Terminal className="w-3.5 h-3.5 text-surface-tint" />
                  Descripción del Proyecto o Problema
                </label>
                <textarea
                  id="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describa brevemente lo que desea lograr o automatizar..."
                  rows={4}
                  className="w-full bg-surface-container-high border border-outline-variant/40 rounded-2xl text-on-surface font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-surface-tint transition-all placeholder-on-surface-variant/30 resize-none"
                />
              </div>

              {/* Action Trigger */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-on-surface text-background font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-surface-tint hover:text-background transition-all w-full sm:w-auto relative active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-background" />
                      <span>{progressMsg}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Blueprint Result Panel slide output */
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-surface-tint/25 shadow-[0_0_40px_rgba(71,214,255,0.1)] bg-surface-container-lowest animate-fadeIn relative overflow-hidden">
            
            {/* Ambient accent light ring */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-surface-tint/10 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center justify-between border-b border-outline-variant/20 pb-6 mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-surface-tint/15 border border-surface-tint/30">
                  <Sparkles className="w-5 h-5 text-surface-tint animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-on-surface">
                    Propuesta Técnica Generada
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant font-light mt-0.5">
                    Preparado con Inteligencia para <strong className="text-on-surface font-semibold">{blueprintData.clientName}</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-xl border border-outline-variant/30 font-mono text-[9px] text-on-surface-variant">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                Ruta Segura Indexada
              </div>
            </div>

            {/* Content blueprint detail boxes */}
            <div className="space-y-6">
              
              {/* Tech stack suggestion details */}
              <div className="glass-panel p-5 rounded-2xl border-white/5 bg-background/25">
                <span className="text-[10px] uppercase font-bold text-surface-tint tracking-widest block mb-2 font-mono">
                  Stack Tecnológico Recomendado
                </span>
                <p className="font-sans text-sm md:text-base text-on-surface font-light leading-relaxed">
                  {blueprintData.suggestedTech}
                </p>
              </div>

              {/* Step checklist details */}
              <div>
                <span className="text-[10px] uppercase font-bold text-surface-tint tracking-widest block mb-3 font-mono">
                  Ruta de Implementación Estructurada
                </span>
                <ul className="space-y-3">
                  {blueprintData.steps.map((step: string, sIdx: number) => (
                    <li key={sIdx} className="flex gap-3 text-sm text-on-surface-variant/90 leading-relaxed">
                      <div className="mt-0.5 w-5 h-5 rounded-md bg-secondary/15 flex items-center justify-center font-mono text-[10px] text-secondary font-bold shrink-0 border border-secondary/20">
                        0{sIdx + 1}
                      </div>
                      <span className="font-light">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Estimate stats widgets */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                <div className="glass-panel p-4 rounded-xl border-white/5 flex flex-col justify-center">
                  <span className="text-[9px] uppercase font-bold text-on-surface-variant tracking-wider block mb-1">
                    Estimación del Proyecto
                  </span>
                  <span className="font-sans text-lg font-bold text-on-surface">
                    {blueprintData.duration}
                  </span>
                </div>
                <div className="glass-panel p-4 rounded-xl border-white/5 flex flex-col justify-center">
                  <span className="text-[9px] uppercase font-bold text-on-surface-variant tracking-wider block mb-1">
                    Costos de Infraestructura
                  </span>
                  <span className="font-sans text-lg font-bold text-on-surface">
                    {blueprintData.priceRange}
                  </span>
                </div>
              </div>

              {/* Disclaimer note box */}
              <div className="glass-panel p-4 rounded-xl border border-outline-variant/5 bg-surface-container-low/50 flex gap-2">
                <Info className="w-5 h-5 text-surface-tint shrink-0 mt-0.5" />
                <span className="text-[11px] text-on-surface-variant/80 font-light leading-relaxed">
                  Esta es una propuesta automatizada. Un consultor experto de Syentropy se comunicará con usted a <strong className="text-on-surface font-medium">{email}</strong> en un lapso de 24 horas hábiles para coordinar la llamada técnica final.
                </span>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-outline-variant/15">
              <button
                onClick={handleReset}
                className="font-sans text-sm font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer select-none inline-flex items-center gap-1"
              >
                Modificar Solicitud
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans font-semibold text-sm hover:shadow-[0_0_15px_rgba(0,180,255,0.4)] transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Finalizar Conversación <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
