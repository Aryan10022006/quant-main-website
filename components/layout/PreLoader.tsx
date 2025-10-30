'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function PreLoader() {
  const [animationPhase, setAnimationPhase] = useState<'drawing' | 'filling' | 'complete'>('drawing');

  useEffect(() => {
    // Phase 1: Drawing letters randomly (0-2s)
    const drawingTimer = setTimeout(() => {
      setAnimationPhase('filling');
    }, 2000);

    // Phase 2: Filling from random directions (2-4s)
    const fillingTimer = setTimeout(() => {
      setAnimationPhase('complete');
    }, 4000);

    return () => {
      clearTimeout(drawingTimer);
      clearTimeout(fillingTimer);
    };
  }, []);

  const line1 = "QUANT";
  const line2 = "COMMUNITY";
  const letters1 = line1.split('');
  const letters2 = line2.split('');

  // Generate random drawing and filling patterns for each letter
  const generateAnimations = (letters: string[]) => useMemo(() => {
    return letters.map(() => {
      // Random drawing direction from 8 possible vertices/corners
      const drawingDirections = [
        'inset(100% 0 0 0)',      // top
        'inset(0 0 100% 0)',      // bottom
        'inset(0 100% 0 0)',      // left
        'inset(0 0 0 100%)',      // right
        'inset(100% 100% 0 0)',   // top-left
        'inset(100% 0 0 100%)',   // top-right
        'inset(0 100% 100% 0)',   // bottom-left
        'inset(0 0 100% 100%)',   // bottom-right
      ];

      // Random filling direction from 8 possible sides
      const fillingDirections = [
        'inset(100% 0 0% 0)',     // bottom to top
        'inset(0% 0 100% 0)',     // top to bottom
        'inset(0 100% 0% 0)',     // right to left
        'inset(0 0% 0 100%)',     // left to right
        'inset(100% 100% 0% 0%)', // bottom-right to top-left
        'inset(100% 0% 0% 100%)', // bottom-left to top-right
        'inset(0% 100% 100% 0%)', // top-right to bottom-left
        'inset(0% 0% 100% 100%)', // top-left to bottom-right
      ];

      return {
        drawFrom: drawingDirections[Math.floor(Math.random() * drawingDirections.length)],
        fillFrom: fillingDirections[Math.floor(Math.random() * fillingDirections.length)],
        drawDelay: Math.random() * 0.4, // Random start delay between 0-0.4s
        fillDelay: Math.random() * 0.5, // Random fill start delay between 0-0.5s
      };
    });
  }, [letters.length]);

  const letterAnimations1 = generateAnimations(letters1);
  const letterAnimations2 = generateAnimations(letters2);

  const renderLine = (letters: string[], animations: any[]) => (
    <div className="flex items-center justify-center gap-x-1 sm:gap-x-2 md:gap-x-3">
      {letters.map((letter, index) => {
        const animation = animations[index];
        
        return (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <div className="relative inline-block">
              {/* Outline/Stroke - Drawing Animation with BLUE edge */}
              <motion.span
                className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight select-none"
                style={{
                  WebkitTextStroke: '3px #00BFFF',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                }}
                initial={{ 
                  clipPath: animation.drawFrom,
                }}
                animate={{ 
                  clipPath: 'inset(0% 0 0 0)',
                }}
                transition={{ 
                  clipPath: { 
                    delay: animation.drawDelay, 
                    duration: 1.3, 
                    ease: "easeOut" 
                  }
                }}
              >
                {letter}
              </motion.span>

              {/* Fill - Filling from random direction with BLUE color (NO glow) */}
              <motion.span
                className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight select-none"
                style={{
                  color: '#00BFFF',
                  fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                }}
                initial={{ 
                  clipPath: animation.fillFrom
                }}
                animate={{ 
                  clipPath: animationPhase === 'filling' ? 'inset(0% 0 0% 0)' : animation.fillFrom
                }}
                transition={{ 
                  delay: animation.fillDelay,
                  duration: 1.8,
                  ease: "easeInOut"
                }}
              >
                {letter}
              </motion.span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: animationPhase === 'complete' ? 0 : 1 }}
      transition={{ duration: 0.5, delay: animationPhase === 'complete' ? 0.3 : 0 }}
      onAnimationComplete={() => {
        if (animationPhase === 'complete') {
          const element = document.querySelector('[data-preloader]');
          if (element) {
            element.remove();
          }
        }
      }}
    >
      {/* Main Text Animation - Two Lines Center Aligned */}
      <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-3 md:gap-y-4 px-4" data-preloader>
        {renderLine(letters1, letterAnimations1)}
        {renderLine(letters2, letterAnimations2)}
      </div>

      {/* Subtitle */}
      <motion.div
        className="text-center space-y-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animationPhase === 'filling' ? 1 : 0, y: animationPhase === 'filling' ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] text-gray-400 uppercase">
          IIT BOMBAY
        </p>
        <div className="h-px w-24 sm:w-32 md:w-40 mx-auto bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
      </motion.div>
    </motion.div>
  );
}
