import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onFinish, 500); // Wait for fade out animation
          }, 300); // Slight delay at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Mesh Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] animate-mesh" />
            <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-secondary/20 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-3s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
            {/* Logo with pulsing ring */}
            <div className="relative mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-primary blur-xl"
              />
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-[spin_4s_linear_infinite]" />
              <div className="absolute -inset-8 border border-secondary/20 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
              
              <div className="relative w-24 h-24 rounded-2xl bg-surface-container border border-surface-tint/30 flex items-center justify-center p-2 shadow-2xl glass-panel">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1TZxp3Q9hNukqobGeUlViy3Ph-JiWsuhdVPdv6YLmRhUtiDkI2jRPsmiBqkL5oDU4GRHXgSNV0GgsAjcAoCBL9j5H2iAlYFgLqZV9dcg3liiBPtHbzyJAkPgdjDgCib2L3qBglelkFLmHl44d0e35P6XaQeDRV-2pExiTT5pjU-cgy845_fgLjsi5YU9pPKWy-v5L4ZWzd9Zeylmc9EE7Ma_PjHsS9jdLYueuOzjDICa8kwHPci7KlLzEzc4urCdWJzkxxUXpiw"
                  alt="Syentropy Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(21,198,230,0.8)]"
                />
              </div>
            </div>

            {/* Brand Text */}
            <h1 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-on-surface animate-shimmer text-glow tracking-widest uppercase">
              Syentropy
            </h1>

            {/* Progress Bar Container */}
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-container to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
                {/* Glow effect on the progress head */}
                <motion.div 
                  className="absolute top-0 h-full w-4 bg-white/50 blur-sm rounded-full"
                  initial={{ left: 0 }}
                  animate={{ left: `calc(${progress}% - 8px)` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              
              <div className="flex justify-between w-full text-xs font-mono font-medium tracking-wider text-on-surface-variant/80">
                <span>Cargando experiencia...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
