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

      setIsSubmitting(false);
      setShowBlueprint(true); // Re-using this state flag to show the simple success screen
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
    <section id="contacto" className="py-16 md:py-24 px-6 md:px-12 bg-surface relative border-t-glow">
      {/* Background soft focus bubble */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {!showBlueprint ? (
          /* Contact Form Input slide */
          <div className="glass-premium md:gradient-glow rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-outline-variant/20 relative">
            <div className="text-center mb-8">
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
          /* Simple Success Panel */
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-surface-tint/25 shadow-[0_0_40px_rgba(71,214,255,0.1)] bg-surface-container-lowest text-center animate-fadeIn relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-surface-tint/10 rounded-full blur-[50px] pointer-events-none"></div>
            
            <div className="w-20 h-20 mx-auto bg-surface-tint/15 border border-surface-tint/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-surface-tint" />
            </div>
            
            <h3 className="font-sans text-3xl font-bold text-on-surface mb-4">
              ¡Solicitud Recibida!
            </h3>
            
            <p className="font-sans text-base text-on-surface-variant max-w-md mx-auto mb-10 font-light leading-relaxed">
              Hemos registrado su solicitud en nuestra base de datos. Un consultor experto de Syentropy se comunicará con usted a <strong className="text-on-surface font-medium">{email}</strong> en un lapso máximo de 24 horas hábiles.
            </p>
            
            <button
              onClick={handleReset}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              Enviar nueva solicitud <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
