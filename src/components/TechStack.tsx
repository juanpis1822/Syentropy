import { Server, Monitor, Cpu, Database } from "lucide-react";
import { TechItem } from "../types";

export default function TechStack() {
  const stack: TechItem[] = [
    {
      category: "Backend",
      tools: "Flask, FastAPI, NestJS",
      icon: "backend",
      colorClass: "text-primary border-primary/20 bg-primary/5 shadow-[0_0_15px_rgba(165,231,255,0.1)]",
    },
    {
      category: "Frontend",
      tools: "React, Next.js, Tailwind",
      icon: "frontend",
      colorClass: "text-secondary border-secondary/20 bg-secondary/5 shadow-[0_0_15px_rgba(182,196,255,0.1)]",
    },
    {
      category: "Automatización",
      tools: "n8n, WABA, OpenAI",
      icon: "automation",
      colorClass: "text-tertiary border-tertiary/20 bg-tertiary/5 shadow-[0_0_15px_rgba(213,220,246,0.1)]",
    },
    {
      category: "Datos & Cloud",
      tools: "PostgreSQL, AWS, GCP",
      icon: "cloud",
      colorClass: "text-surface-tint border-surface-tint/20 bg-surface-tint/5 shadow-[0_0_15px_rgba(71,214,255,0.1)]",
    }
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "backend":
        return <Server className="w-8 h-8" />;
      case "frontend":
        return <Monitor className="w-8 h-8" />;
      case "automation":
        return <Cpu className="w-8 h-8 font-light" />;
      default:
        return <Database className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-background relative z-10 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Stack Tecnológico
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Herramientas de clase mundial que impulsan nuestras soluciones.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center border transition-all duration-300 hover:scale-[1.03] hover:border-surface-tint/30 group ${item.colorClass}`}
            >
              <div className="mb-4 text-on-surface-variant group-hover:text-current transition-colors">
                {renderIcon(item.icon)}
              </div>
              <h4 className="font-sans font-semibold text-on-surface text-base md:text-lg mb-2">
                {item.category}
              </h4>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant/80 font-light font-mono select-all">
                {item.tools}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
