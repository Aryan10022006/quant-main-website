'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const HeroSectionV2: React.FC = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Quantitative.', 'Algorithmic.', 'Data-Driven.', 'Innovative.'];

  useEffect(() => {
    const currentFullWord = words[typingIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && currentWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => {}, pauseBeforeType);
      } else {
        setCurrentWord(
          isDeleting
            ? currentFullWord.substring(0, currentWord.length - 1)
            : currentFullWord.substring(0, currentWord.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, typingIndex, words]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quantb1.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(20%) brightness(50%)' }}
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/60 to-[#0A0A0A]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-[#0A0A0A]/80" />
      </div>

      {/* Mesh gradient background */}
      <div className="absolute inset-0 z-[1] mesh-bg opacity-30" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-8 lg:px-12 py-24 sm:py-28">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content - Left Side */}
            <motion.div
              className="space-y-8 sm:space-y-10 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            {/* Static Main Title */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05]"
                style={{ letterSpacing: '0.02em' }}
              >
                <span className="block text-white mb-2 sm:mb-4">
                  QUANT
                </span>
                <span className="block text-white">
                  COMMUNITY
                </span>
              </motion.h1>

              {/* Typing Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold min-h-[1.2em]"
              >
                <span 
                  className="bg-gradient-to-r from-[#00BFFF] via-[#0EA5E9] to-[#0891B2] bg-clip-text text-transparent"
                  style={{ 
                    backgroundSize: '200% auto',
                    animation: 'gradient-shift 3s ease infinite'
                  }}
                >
                  {currentWord}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-[0.85em] ml-1 bg-[#00BFFF] align-middle"
                  />
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl pt-2"
              >
                Where algorithmic trading, quantitative research, and financial innovation 
                converge at <span className="text-white font-semibold">IIT Bombay</span>.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 pt-2"
            >
              {/* Primary CTA */}
              <motion.a
                href="/projects"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#00BFFF] text-[#0A0A0A] font-bold rounded-xl overflow-hidden shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="/join"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-border backdrop-blur-xl text-white font-semibold rounded-xl hover:border-[#00BFFF]/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  Join the Community
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 max-w-2xl"
            >
              {[
                { value: '900+', label: 'Members' },
                { value: '1000+', label: 'SoQ Participants' },
                { value: '20+', label: 'Team Members' },
                { value: '20+', label: 'Events' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, type: 'spring' }}
                    className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Rotating QC Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
              {/* Layered Glow Effects - Reduced and Closer */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-[420px] h-[420px] bg-[#00BFFF]/25 rounded-full blur-2xl" 
              />
              <motion.div 
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.1, 0.25, 0.1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute w-[400px] h-[400px] bg-[#0EA5E9]/30 rounded-full blur-xl" 
              />
              
              {/* Rotating QC White Logo - Horizontal Flip - Bigger Size */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-96 h-96"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src="/images/qc_white_logo.png"
                    alt="Quant Community Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    style={{ backfaceVisibility: 'visible' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-[#00BFFF] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionV2;
