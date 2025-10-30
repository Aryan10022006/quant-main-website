'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticlesBackground from '../effects/ParticlesBackground';

export default function HeroSectionTypography() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after loading screen completes (3 seconds)
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Character-by-character reveal animation
  const text1 = "QUANT";
  const text2 = "COMMUNITY";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Layer 1: Particle Network Background */}
      <ParticlesBackground />

      {/* Layer 2: Small 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Icosahedron - Top Right */}
        <motion.div
          className="absolute top-24 right-32 w-20 h-20"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
            <defs>
              <linearGradient id="icoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#00BFFF" />
              </linearGradient>
            </defs>
            <polygon points="50,10 90,35 75,75 25,75 10,35" stroke="url(#icoGradient)" strokeWidth="1.5" fill="none" />
            <line x1="50" y1="10" x2="50" y2="50" stroke="url(#icoGradient)" strokeWidth="1" />
            <line x1="90" y1="35" x2="50" y2="50" stroke="url(#icoGradient)" strokeWidth="1" />
            <line x1="75" y1="75" x2="50" y2="50" stroke="url(#icoGradient)" strokeWidth="1" />
            <line x1="25" y1="75" x2="50" y2="50" stroke="url(#icoGradient)" strokeWidth="1" />
            <line x1="10" y1="35" x2="50" y2="50" stroke="url(#icoGradient)" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Greek Letter Alpha - Bottom Left */}
        <motion.div
          className="absolute bottom-32 left-24 text-6xl font-serif text-primary-500/30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          α
        </motion.div>

        {/* Greek Letter Sigma - Top Left */}
        <motion.div
          className="absolute top-40 left-40 text-5xl font-serif text-accent-cyan/25"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Σ
        </motion.div>

        {/* Small Geometric Cube - Middle Right */}
        <motion.div
          className="absolute top-1/2 right-48 w-16 h-16"
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
            <defs>
              <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891B2" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="url(#cubeGradient)" strokeWidth="1.5" fill="none" />
            <line x1="50" y1="20" x2="50" y2="50" stroke="url(#cubeGradient)" strokeWidth="1" />
            <line x1="80" y1="35" x2="50" y2="50" stroke="url(#cubeGradient)" strokeWidth="1" />
            <line x1="20" y1="35" x2="50" y2="50" stroke="url(#cubeGradient)" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>

      {/* Layer 3: Main Typographic Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge with Glitch Effect */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary-500"
              animate={{
                boxShadow: [
                  '0 0 5px #0EA5E9',
                  '0 0 20px #00BFFF',
                  '0 0 5px #0EA5E9',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              className="text-sm font-medium text-dark-300 tracking-wider"
              animate={{
                x: [0, -2, 2, -1, 1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              IIT BOMBAY • QUANTITATIVE FINANCE
            </motion.span>
          </motion.div>

          {/* MASSIVE Typographic Brand Name */}
          <div className="relative">
            {/* "QUANT" - Solid White Text */}
            <motion.div
              className="overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <h1 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter">
                {text1.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                    className="inline-block bg-gradient-to-b from-white via-white to-dark-400 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* "COMMUNITY" - Wireframe Outline Text */}
            <motion.div
              className="overflow-hidden -mt-8"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <h1 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none tracking-tighter">
                {text2.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                    className="inline-block"
                    style={{
                      WebkitTextStroke: '2px #00BFFF',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(0, 191, 255, 0.3)',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Gradient Glow Behind Typography */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-primary-500/20 via-[#00BFFF]/20 to-accent-cyan/20 blur-3xl rounded-full" />
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Where <span className="text-primary-400 font-medium">algorithms meet ambition</span> and{' '}
            <span className="text-accent-cyan font-medium">data drives decisions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>

            <motion.a
              href="#join"
              className="px-8 py-4 glass border border-primary-500/50 text-dark-200 font-semibold rounded-lg hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Community
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
