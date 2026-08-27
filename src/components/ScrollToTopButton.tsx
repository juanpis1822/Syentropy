import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Volver arriba"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 9998,
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high/80 backdrop-blur-md border border-surface-tint/30 hover:border-surface-tint/60 hover:shadow-[0_0_20px_rgba(21,198,230,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5 text-surface-tint" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
