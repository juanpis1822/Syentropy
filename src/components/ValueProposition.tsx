import { useState, useEffect } from "react";
import { Database, Play, CheckCircle2, ChevronRight, Activity } from "lucide-react";

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState<"api" | "db" | "ai">("api");
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    "[SYSTEM_OK] Inicializando canal inteligente de datos Syentropy...",
    "[INFO] Esperando gatillo de automatización..."
  ]);

  useEffect(() => {
    const logsPool = {
      api: [
        "[WebHook] Solicitud recibida en /api/v1/lead",
        "[INFO] Validando parámetros con base de datos...",
        "[SUCCESS] Respuesta optimizada enviada en 42ms"
      ],
      db: [
        "[Query] SELECT * FROM users WHERE active_saas = true",
        "[INFO] Re-balanceando índices de particiones...",
        "[STATUS] Estructura transaccional SQL en orden"
      ],
      ai: [
        "[Agent] Analizando descripción con Gemini LLM...",
        "[INFO] Generando blueprint arquitectónico...",
        "[SUCCESS] Propuesta inteligente guardada con éxito"
      ]
    };

    const interval = setInterval(() => {
      // Pick a random log from active tab pool
      const pool = logsPool[activeTab];
      const randomLog = pool[Math.floor(Math.random() * pool.length)];
      const timestamp = new Date().toLocaleTimeString();
      setSimulatedLogs((prev) => [
        `[${timestamp}] ${randomLog}`,
        ...prev.slice(0, 5)
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden border-t border-outline-variant/10">
      
      {/* Background ambient spotlight blurs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Information */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-surface-tint"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-surface-tint">
              Nuestra Filosofía
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[40px] leading-tight font-bold text-on-surface mb-6 tracking-tight">
            Escalabilidad dictada por la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">lógica</span> y el diseño.
          </h2>

          <p className="font-sans text-base text-on-surface-variant mb-6 leading-relaxed font-light">
            En Syentropy, ingeniamos ecosistemas digitales y herramientas operativas SaaS. Entendemos que para que un negocio escale, su infraestructura tecnológica no puede ser un cuello de botella.
          </p>

          <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed font-light">
            Fusionamos el rigor del desarrollo backend, la automatización y el análisis de datos con la sofisticación del diseño frontend. El resultado son productos digitales que operan de manera autónoma en el fondo, mientras ofrecen una experiencia premium al usuario en la superficie.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
            <div>
              <div className="font-sans text-4xl font-bold text-primary mb-1">99%</div>
              <div className="font-sans text-xs sm:text-sm text-on-surface-variant font-light">
                Reducción en fricción operativa
              </div>
            </div>
            <div>
              <div className="font-sans text-4xl font-bold text-secondary mb-1">10x</div>
              <div className="font-sans text-xs sm:text-sm text-on-surface-variant font-light">
                Aceleración en despliegues
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Interactive Abstract Console */}
        <div className="flex-1 w-full relative h-[450px]">
          <div className="absolute inset-0 glass-premium rounded-3xl overflow-hidden p-6 hover:shadow-[0_0_35px_rgba(0,180,255,0.1)] transition-all flex flex-col gap-4">
            
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-sans text-[11px] font-bold text-primary tracking-widest uppercase">
                  Syentropy Core Monitor
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-secondary-container/25 text-secondary border border-secondary/30 px-2.5 py-0.5 rounded-full font-semibold">
                  ACTIVE
                </span>
                <Activity className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            {/* Custom Interactive Module Toggle tabs */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "api", label: "Canal API", icon: <ChevronRight className="w-3.5 h-3.5" /> },
                { id: "db", label: "Base Datos", icon: <Database className="w-3.5 h-3.5" /> },
                { id: "ai", label: "Agentes IA", icon: <Play className="w-3.5 h-3.5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl text-xs font-semibold font-sans transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary-container to-secondary-container text-white shadow-md font-bold"
                      : "bg-surface-container-high/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Simulated Live Output Console box */}
            <div className="flex-1 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 font-mono text-xs text-on-surface-variant/90 space-y-2 overflow-y-auto min-h-[160px] custom-scroller select-none">
              {simulatedLogs.map((log, index) => (
                <div
                  key={index}
                  className={`transition-all ${
                    index === 0
                      ? "text-primary border-l-2 border-primary/60 pl-2 font-semibold"
                      : "opacity-60"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Aesthetic Status Footer */}
            <div className="flex justify-between items-center text-[10px] text-on-surface-variant/60 font-mono pt-2 border-t border-outline-variant/15">
              <span>Host: aws-us-east-2</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-secondary" />
                Seguro SSL-256
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
