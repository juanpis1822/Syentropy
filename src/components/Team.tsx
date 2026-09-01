import { User } from "lucide-react";
import { motion } from "motion/react";
import { TeamMember } from "../types";

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Nicolás Martínez Pineda",
      role: "CEO / Líder Técnico",
      description: "Especialista en transformación de datos y arquitectura de soluciones empresariales. Lidera la visión técnica y estratégica de Syentropy.",
      avatarIcon: "CEO",
      colorClass: "border-primary/30 text-primary hover:border-primary/60",
    },
    {
      name: "Juan Pablo Barbosa Cubillos",
      role: "Co-Fundador / Rol Tecnológico",
      description: "Arquitecto de soluciones escalables y desarrollo de ecosistemas digitales interactivos de alto impacto.",
      avatarIcon: "CTO",
      colorClass: "border-secondary/30 text-secondary hover:border-secondary/60",
    },
    {
      name: "Samuel David Contreras Leiton",
      role: "Co-Fundador / Rol Estratégico",
      description: "Visión analítica de mercado, estructuración de modelo de negocio y operaciones comerciales para herramientas SaaS.",
      avatarIcon: "COO",
      colorClass: "border-tertiary/30 text-tertiary hover:border-tertiary/60",
    },
    {
      name: "Sergio Nicolas Osorio Guevara",
      role: "Co-Fundador / Rol Estratégico",
      description: "Visión analítica de mercado, estructuración de modelo de negocio y operaciones comerciales para herramientas SaaS.",
      avatarIcon: "CSO",
      colorClass: "border-surface-tint/30 text-surface-tint hover:border-surface-tint/60",
    }
  ];

  return (
    <section id="equipo" className="py-24 px-6 md:px-12 bg-background relative z-10 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Nuestro Equipo
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Talento multidisciplinario con visión de vanguardia tecnológica.
          </p>
        </div>

        {/* Members Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              style={{ transformPerspective: 800 }}
              key={idx}
              className={`glass-panel p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 relative group overflow-hidden card-hover-lift ${m.colorClass}`}
            >
              {/* Soft background glow circles inside cards */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-white/[0.01] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              {/* Avatar Photo Frame with user icon */}
              <div className="relative w-24 h-24 rounded-full bg-surface-container-high mb-6 flex items-center justify-center border-2 border-outline-variant group-hover:border-current group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300">
                <User className="w-10 h-10 text-on-surface-variant/80 group-hover:scale-105 transition-transform" />
                
                {/* Floating circular label role indicators */}
                <div className="absolute -bottom-1 -right-1 bg-surface-container-highest border border-outline-variant rounded-lg px-2 py-0.5 text-[9px] font-bold tracking-wider font-mono text-on-surface">
                  {m.avatarIcon}
                </div>
              </div>

              {/* Member detail list */}
              <h3 className="font-sans text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {m.name}
              </h3>
              
              <p className="font-sans text-[11px] font-bold text-surface-tint uppercase tracking-widest mb-4">
                {m.role}
              </p>
              
              <p className="font-sans text-xs md:text-sm text-on-surface-variant font-light leading-relaxed">
                {m.description}
              </p>
              
              {/* Skills badge */}
              <div className="mt-5 pt-3.5 border-t border-outline-variant w-full flex items-center justify-center gap-2">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-surface-container-high border border-outline-variant text-on-surface-variant/70 font-medium font-sans">
                  Syentropy Core
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
