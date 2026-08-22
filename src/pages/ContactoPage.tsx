import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import InquiryForm from "../components/InquiryForm";

export default function ContactoPage() {
  return (
    <>
      {/* Contact Hero Banner */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
        {/* Background ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[700px] h-[700px] bg-primary/10 rounded-full blur-[180px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/15 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6 border border-surface-tint/20 bg-surface-container-low/40">
              <span className="w-2 h-2 rounded-full bg-surface-tint animate-pulse shadow-[0_0_8px_rgba(21,198,230,1)]"></span>
              <span className="font-sans text-[11px] font-semibold text-surface-tint uppercase tracking-widest">
                Estamos Disponibles
              </span>
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter mb-6 leading-[1.1]">
              Hablemos de tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-surface-tint to-primary text-glow">
                próximo proyecto
              </span>
            </h1>
            
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
              ¿Tienes una idea, un reto técnico o una oportunidad de negocio? Nuestro equipo está listo para escucharte y diseñar una solución a tu medida.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {[
              { icon: <Mail className="w-5 h-5" />, title: "Email", detail: "contacto@syentropy.com", color: "text-primary" },
              { icon: <Phone className="w-5 h-5" />, title: "Teléfono", detail: "+57 300 000 0000", color: "text-secondary" },
              { icon: <MapPin className="w-5 h-5" />, title: "Ubicación", detail: "Bogotá, Colombia", color: "text-tertiary" },
              { icon: <Clock className="w-5 h-5" />, title: "Respuesta", detail: "< 24 horas hábiles", color: "text-primary" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-2xl p-5 flex items-center gap-4 hover:border-surface-tint/30 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-sans text-xs text-on-surface-variant uppercase tracking-wider font-semibold">{item.title}</p>
                  <p className="font-sans text-sm text-on-surface font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <InquiryForm selectedPlan="" />
    </>
  );
}
