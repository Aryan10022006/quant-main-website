'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Award, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import dynamic from 'next/dynamic';

// Dynamically import heavy 3D and particle components
const ParticlesBackground = dynamic(() => import('@/components/effects/ParticlesBackground'), { ssr: false });
const MeshGlobeWithQC = dynamic(() => import('@/components/effects/MeshGlobeWithQC'), { ssr: false });

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after loading screen
    const timer = setTimeout(() => setIsLoaded(true), 3600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Layer 1: Particle Network Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <ParticlesBackground />
        </Suspense>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-950 to-black/95 z-0" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#00BFFF 1px, transparent 1px), linear-gradient(90deg, #00BFFF 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full h-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Layer 3: Left Side - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="space-y-8 text-left"
            >
              {/* Premium Badge */}
              <motion.div variants={itemVariants} className="inline-flex">
                <div className="group relative px-6 py-3 rounded-2xl glass border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 backdrop-blur-xl">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Sparkles className="w-5 h-5 text-primary-400 animate-pulse" />
                      <div className="absolute inset-0 blur-md bg-primary-400/50 animate-pulse" />
                    </div>
                    
                    <Zap className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Main Headline with Animated Gradient */}
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
                  <span className="block text-white mb-2">Pioneering the</span>
                  <span className="block relative">
                    <span 
                      className="bg-gradient-to-r from-primary-400 via-[#00BFFF] to-accent-cyan bg-clip-text text-transparent animate-gradient-shift"
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      Future of Quant
                    </span>
                    <motion.div
                      className="absolute -inset-2 bg-primary-500/20 blur-3xl -z-10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </span>
                  <span className="block text-white mt-2">Finance</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-dark-300 leading-relaxed max-w-2xl"
              >
                Where{' '}
                <span className="text-primary-400 font-semibold">algorithmic trading</span>,{' '}
                <span className="text-accent-cyan font-semibold">quantitative research</span>, and{' '}
                <span className="text-accent-teal font-semibold">financial innovation</span>{' '}
                converge.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button href="/projects" size="lg" className="group text-lg relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Explore Our Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button href="/join" variant="outline" size="lg" className="text-lg border-2 border-primary-500/30 hover:border-primary-500 hover:bg-primary-500/10">
                  <Sparkles className="w-5 h-5" />
                  Join the Community
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              >
                {[
                  { icon: Sparkles, value: '100+', label: 'Members', color: 'from-primary-400 to-primary-600' },
                  { icon: TrendingUp, value: '15+', label: 'Projects', color: 'from-accent-cyan to-accent-teal' },
                  { icon: Zap, value: '20+', label: 'Workshops', color: 'from-accent-teal to-accent-emerald' },
                  { icon: Award, value: '5+', label: 'Awards', color: 'from-accent-emerald to-primary-500' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-dark-900/50 backdrop-blur-sm border border-dark-800 p-4 hover:border-primary-500/30 transition-all duration-300">
                      <stat.icon className="w-6 h-6 mb-2 text-primary-400" />
                      <div className={`text-3xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-dark-400 font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Layer 2: Right Side - Mesh Globe with QC Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative h-[600px] flex items-center justify-center"
              style={{
                transform: `rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-primary-400/20 rounded-full animate-pulse" />
                </div>
              }>
                <MeshGlobeWithQC />
              </Suspense>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary-500/40 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
