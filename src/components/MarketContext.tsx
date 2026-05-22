import { AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

export default function MarketContext() {
  return (
    <section id="contexto" className="py-24 px-6 md:px-12 bg-background relative z-10 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Contexto de Mercado
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Entendemos la realidad operativa de los negocios en Colombia y ofrecemos soluciones estratégicas para superar la brecha tecnológica.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: El Desafío Actual */}
          <div className="glass-panel p-8 md:p-10 rounded-[2rem] flex flex-col hover:border-error/30 transition-all duration-300 relative overflow-hidden group">
            {/* Top-right subtle flare */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-error-container/10 rounded-full blur-2xl group-hover:bg-error-container/20 transition-all"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-error-container/20 flex items-center justify-center mb-6 border border-error/20">
              <AlertTriangle className="w-6 h-6 text-error animate-pulse" />
            </div>
            
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-on-surface mb-4">
              El Desafío Actual
            </h3>
            
            <p className="font-sans text-on-surface-variant leading-relaxed text-[15px] font-light">
              Las empresas tradicionales enfrentan procesos manuales ineficientes, dependencia de herramientas informales (como WhatsApp sin estructurar) y una alta necesidad de automatización que a menudo resulta inaccesible por costos o complejidad técnica.
            </p>
          </div>

          {/* Column 2: Nuestra Respuesta Estratégica */}
          <div className="glass-panel p-8 md:p-10 rounded-[2rem] flex flex-col hover:border-surface-tint/30 transition-all duration-300 relative overflow-hidden group">
            {/* Top-right subtle flare */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6 border border-primary/20">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-on-surface mb-4">
              Nuestra Respuesta Estratégica
            </h3>

            <ul className="space-y-5">
              {[
                {
                  title: "Planes Accesibles",
                  desc: "Estructuras de costos claras que democratizan el acceso a tecnología de punta."
                },
                {
                  title: "Soluciones Verticalizadas",
                  desc: "Herramientas diseñadas para resolver problemas específicos de cada industria."
                },
                {
                  title: "Acompañamiento Continuo",
                  desc: "Soporte técnico y evolución constante de la plataforma."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-surface-tint/10 p-1 rounded-full border border-surface-tint/30">
                    <CheckCircle2 className="w-4 h-4 text-surface-tint" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-on-surface text-[15px]">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] text-on-surface-variant mt-0.5 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
