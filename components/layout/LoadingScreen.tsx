'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0 → 1: Sigma symbol (0.8s)
    const timer1 = setTimeout(() => setPhase(1), 0);
    
    // Phase 1 → 2: Stock ticker graph (0.8s + 0.8s = 1.6s)
    const timer2 = setTimeout(() => setPhase(2), 800);
    
    // Phase 2 → 3: QC Logo (1.6s + 1.2s = 2.8s)
    const timer3 = setTimeout(() => setPhase(3), 1600);
    
    // Fade out and complete (2.8s + 0.8s = 3.6s total)
    const timer4 = setTimeout(() => setIsLoading(false), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Minimalist Grid Background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Central Animation Container */}
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            
            {/* PHASE 1: Large Sigma Symbol */}
            {phase === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="sigmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#00BFFF" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Sigma Path */}
                  <motion.path
                    d="M 150 40 L 60 40 L 100 100 L 60 160 L 150 160"
                    stroke="url(#sigmaGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            )}

            {/* PHASE 2: Stock Ticker Line Graph */}
            {phase === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 300 200"
                  className="w-80 h-52"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#00BFFF" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                  </defs>

                  {/* Stock Line Chart */}
                  <motion.path
                    d="M 20 150 L 50 120 L 80 140 L 110 80 L 140 100 L 170 60 L 200 90 L 230 50 L 260 70 L 280 40"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {/* Data Points */}
                  {[20, 50, 80, 110, 140, 170, 200, 230, 260, 280].map((x, i) => {
                    const yPositions = [150, 120, 140, 80, 100, 60, 90, 50, 70, 40];
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={yPositions[i]}
                        r="4"
                        fill="#00BFFF"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.2 }}
                      />
                    );
                  })}
                </svg>
              </motion.div>
            )}

            {/* PHASE 3: QC Logo with PNG + Wireframe Overlay */}
            {phase === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Glow Background */}
                <motion.div
                  className="absolute w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* QC Logo PNG */}
                <motion.div
                  className="relative w-64 h-64"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/qc_white_logo.png"
                    alt="QC Logo"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(0, 191, 255, 0.5)) brightness(1.2)',
                    }}
                  />
                </motion.div>

                {/* Wireframe Overlay */}
                <motion.svg
                  viewBox="0 0 300 300"
                  className="absolute w-72 h-72"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3, rotate: 360 }}
                  transition={{ opacity: { delay: 0.3, duration: 0.4 }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                >
                  <defs>
                    <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#00BFFF" />
                    </linearGradient>
                  </defs>

                  {/* Geometric Wireframe */}
                  <polygon
                    points="150,30 250,110 220,220 80,220 50,110"
                    stroke="url(#wireGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    stroke="url(#wireGradient)"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />
                </motion.svg>

                {/* Logo Text */}
                <motion.div
                  className="absolute -bottom-16 text-center w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-[#00BFFF] to-accent-cyan bg-clip-text text-transparent tracking-wide">
                    QUANT COMMUNITY
                  </div>
                  <div className="text-xs text-dark-500 mt-2 tracking-[0.3em] font-light">
                    IIT BOMBAY
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
