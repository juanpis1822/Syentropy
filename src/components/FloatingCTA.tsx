import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactSection = document.getElementById('contacto');
      let isContactVisible = false;

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        isContactVisible = rect.top < window.innerHeight;
      }

      if (scrollY > 600 && !isContactVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/contacto');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-20 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-primary-container to-primary text-white font-sans font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(21,198,230,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Empezar Proyecto
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out pointer-events-none"></span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
