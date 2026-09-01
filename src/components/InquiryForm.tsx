import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle2, Terminal, ArrowRight, Mail, User, Info, RefreshCw, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";
import { motion, AnimatePresence } from "motion/react";

interface InquiryFormProps {
  selectedPlan: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
}

export default function InquiryForm({ selectedPlan }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("automatizacion");
  const [description, setDescription] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressMsg, setProgressMsg] = useState("");
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  // Real-time validation
  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "El nombre es obligatorio";
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres";
        return undefined;
      case "email":
        if (!value.trim()) return "El email es obligatorio";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Ingresa un email válido (ej: correo@empresa.com)";
        return undefined;
      case "description":
        if (!value.trim()) return "La descripción es obligatoria";
        if (value.trim().length < 10) return "Describe tu proyecto con al menos 10 caracteres";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const value = field === "name" ? name : field === "email" ? email : description;
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleFieldChange = (field: string, value: string) => {
    if (field === "name") setName(value);
    else if (field === "email") setEmail(value);
    else if (field === "description") setDescription(value);

    // Clear error on change if touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      description: validateField("description", description),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, description: true });
    return !newErrors.name && !newErrors.email && !newErrors.description;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateAll()) return;

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
        setSubmitError("Hubo un problema al guardar la solicitud. Por favor intenta de nuevo.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setShowBlueprint(true);
    } catch (err) {
      console.error("Unknown error:", err);
      setSubmitError("Falla en la conexión de red. Verifica tu conexión e intenta de nuevo.");
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setDescription("");
    setShowBlueprint(false);
    setErrors({});
    setTouched({});
    setSubmitError(null);
  };

  const getInputClass = (field: string) => {
    const base = "w-full bg-surface-container-high border rounded-2xl text-on-surface font-sans text-sm px-4 py-3.5 focus:outline-none transition-all duration-300 placeholder-on-surface-variant/30";
    if (touched[field] && errors[field as keyof FormErrors]) {
      return `${base} input-error`;
    }
    if (touched[field] && !errors[field as keyof FormErrors]) {
      return `${base} input-success`;
    }
    return `${base} border-outline-variant/40 focus:border-surface-tint`;
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-6 md:px-12 bg-surface relative border-t-glow">
      {/* Background soft focus bubble */}

      <div className="max-w-4xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!showBlueprint ? (
            /* Contact Form Input slide */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-premium md:gradient-glow rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-outline-variant/20 relative"
            >
              <div className="text-center mb-8">
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-3 tracking-tight">
                  Iniciar Conversación
                </h2>
                <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed font-light">
                  Describa brevemente su desafío tecnológico. Nuestro equipo analizará la viabilidad y propondrá una ruta arquitectónica inmediata.
                </p>
              </div>

              {/* Submit Error Toast */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="mb-6 p-4 rounded-2xl bg-error-container/20 border border-error/30 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm text-error font-medium">{submitError}</p>
                      <button
                        onClick={() => setSubmitError(null)}
                        className="font-sans text-xs text-error/70 hover:text-error underline mt-1 cursor-pointer"
                      >
                        Cerrar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
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
                      value={name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Su nombre o compañía"
                      className={getInputClass("name")}
                    />
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -5, height: 0 }}
                          className="flex items-center gap-1.5 text-error text-xs font-medium pl-2"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
                      value={email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="correo@empresa.com"
                      className={getInputClass("email")}
                    />
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -5, height: 0 }}
                          className="flex items-center gap-1.5 text-error text-xs font-medium pl-2"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
                      <option value="consultoria" className="bg-surface-container-high text-on-surface">Consultoría General &amp; Analítica Avanzada</option>
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
                    value={description}
                    onChange={(e) => handleFieldChange("description", e.target.value)}
                    onBlur={() => handleBlur("description")}
                    placeholder="Describa brevemente lo que desea lograr o automatizar..."
                    rows={4}
                    className={`${getInputClass("description")} resize-none`}
                  />
                  <AnimatePresence>
                    {touched.description && errors.description && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="flex items-center gap-1.5 text-error text-xs font-medium pl-2"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Trigger */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 bg-on-surface text-background font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-surface-tint hover:text-background transition-all w-full sm:w-auto relative active:scale-95 disabled:opacity-50 cursor-pointer overflow-hidden btn-ripple"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
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
            </motion.div>
          ) : (
            /* Simple Success Panel */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-surface-tint/25 shadow-[0_0_40px_rgba(71,214,255,0.1)] bg-surface-container-lowest text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-surface-tint/10 rounded-full blur-[50px] pointer-events-none"></div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto bg-surface-tint/15 border border-surface-tint/30 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-surface-tint" />
              </motion.div>
              
              <h3 className="font-sans text-3xl font-bold text-on-surface mb-4">
                ¡Solicitud Recibida!
              </h3>
              
              <p className="font-sans text-base text-on-surface-variant max-w-md mx-auto mb-10 font-light leading-relaxed">
                Hemos registrado su solicitud en nuestra base de datos. Un consultor experto de Syentropy se comunicará con usted a <strong className="text-on-surface font-medium">{email}</strong> en un lapso máximo de 24 horas hábiles.
              </p>
              
              <button
                onClick={handleReset}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                Enviar nueva solicitud <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
