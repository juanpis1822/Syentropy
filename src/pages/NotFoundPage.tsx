import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const initialLogs = [
    '[SYSTEM] Initializing navigation diagnostics...',
    '[ERROR] Route /unknown not found in routing table',
    '[WARN] Attempting to resolve dimensional rift...',
    '[INFO] Redirecting user to safe harbor...',
    '[INFO] Syentropy navigation system active'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < initialLogs.length) {
        setLogs(prev => [...prev, initialLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Mesh Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] animate-mesh" />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-secondary/10 rounded-full blur-[100px] animate-mesh" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(Math.random() * 300 + 200)],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}


      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-premium p-12 md:p-16 rounded-3xl border-surface-tint/20 shadow-2xl relative overflow-hidden group"
        >
          {/* Internal Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-20">
            {/* Glitch 404 Text */}
            <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-surface-tint to-primary animate-shimmer text-glow relative inline-block">
              <span className="relative z-10">404</span>
              {/* Fake Glitch Layers */}
              <motion.span
                className="absolute top-0 left-0 -ml-2 text-primary opacity-50 z-0"
                animate={{ x: [-2, 2, -1, 0], y: [1, -1, 2, 0] }}
                transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror", repeatDelay: Math.random() * 3 }}
              >
                404
              </motion.span>
              <motion.span
                className="absolute top-0 left-0 ml-2 text-secondary opacity-50 z-0"
                animate={{ x: [2, -2, 1, 0], y: [-1, 1, -2, 0] }}
                transition={{ repeat: Infinity, duration: 0.3, repeatType: "mirror", repeatDelay: Math.random() * 2 }}
              >
                404
              </motion.span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-on-surface mb-4">
              Página no encontrada
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10">
              La ruta que buscas no existe o fue movida. Regresa al inicio para continuar explorando.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-container to-primary text-on-surface rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(21,198,230,0.4)] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -translate-x-full" />
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Link>
              <Link 
                to="/contacto"
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Terminal/Console Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 w-full max-w-2xl bg-surface-container/80 border border-outline-variant rounded-lg p-4 font-mono text-sm text-left shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3 border-b border-outline-variant pb-2">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-on-surface-variant/60 ml-2 text-xs">syentropy_sys_terminal.exe</span>
          </div>
          <div className="space-y-1 h-32 overflow-y-auto">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${log.includes('[ERROR]') ? 'text-error' : log.includes('[WARN]') ? 'text-yellow-400' : 'text-primary/80'}`}
              >
                {log}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-2 h-4 bg-primary/50 mt-1"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
