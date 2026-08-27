import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import InquiryForm from "../components/InquiryForm";

export default function ContactoPage() {
  return (
    <>
      {/* Contact Hero Banner */}
      <section className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
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
            
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tighter mb-4 sm:mb-6 leading-[1.1]">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {[
              { icon: <Mail className="w-5 h-5" />, title: "Email", detail: "contacto@syentropy.com", color: "text-primary" },
              { icon: <Phone className="w-5 h-5" />, title: "Teléfono", detail: "+57 300 000 0000", color: "text-secondary" },
              { icon: <MapPin className="w-5 h-5" />, title: "Ubicación", detail: "Bogotá, Colombia", color: "text-tertiary" },
              { icon: <Clock className="w-5 h-5" />, title: "Respuesta", detail: "< 24 horas hábiles", color: "text-primary" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-2xl p-5 flex items-center gap-4 hover:border-surface-tint/30 transition-all duration-300 group hover-glow"
              >
                <div className={`w-11 h-11 shrink-0 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-sans text-xs text-on-surface-variant uppercase tracking-wider font-semibold">{item.title}</p>
                  <p className="font-sans text-sm text-on-surface font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Media Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel border border-outline-variant/20 text-on-surface-variant hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 text-sm font-medium group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escríbenos por WhatsApp
            </a>
            <a
              href="https://instagram.com/syentropy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel border border-outline-variant/20 text-on-surface-variant hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition-all duration-300 text-sm font-medium group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Síguenos en Instagram
            </a>

          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <InquiryForm selectedPlan="" />
    </>
  );
}
