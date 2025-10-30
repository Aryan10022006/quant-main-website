'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Zap, Award } from 'lucide-react';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/quantb1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* HUD Corner Brackets */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-24 left-10 z-20 w-16 h-16 border-l-2 border-t-2 border-primary-400/50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-24 right-10 z-20 w-16 h-16 border-r-2 border-t-2 border-primary-400/50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-24 left-10 z-20 w-16 h-16 border-l-2 border-b-2 border-accent-cyan/50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-24 right-10 z-20 w-16 h-16 border-r-2 border-b-2 border-accent-cyan/50"
      />
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      {/* Floating Grid */}
      <div className="absolute inset-0 opacity-[0.02] z-10" 
        style={{
          backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <div className="group relative px-6 py-3 rounded-2xl glass border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
              <div className="flex items-center space-x-2">
                
                <Zap className="w-4 h-4 text-accent-cyan" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="block mb-2">
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Pioneering the
                </motion.span>
              </span>
              <span className="block mb-2">
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Future of
                </motion.span>
              </span>
              <span className="relative inline-block">
                <motion.span 
                  className="gradient-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Quantitative Finance
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-teal rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-dark-300 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Driving innovation in{' '}
            <span className="text-primary-400 font-bold">algorithmic trading</span>,{' '}
            <span className="text-accent-cyan font-bold">data analytics</span>, and{' '}
            <span className="text-accent-teal font-bold">financial research</span> through{' '}
            cutting-edge technology and collaborative excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button href="/projects" size="lg" className="group text-base sm:text-lg">
              <TrendingUp className="w-5 h-5" />
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/join" variant="outline" size="lg" className="text-base sm:text-lg">
              <Sparkles className="w-5 h-5" />
              Join the Community
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-5xl mx-auto"
          >
            {[
              { icon: Sparkles, value: '100+', label: 'Active Members', color: 'primary' },
              { icon: TrendingUp, value: '15+', label: 'Live Projects', color: 'cyan' },
              { icon: Zap, value: '20+', label: 'Workshops Held', color: 'teal' },
              { icon: Award, value: '5+', label: 'National Awards', color: 'emerald' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"
              >
                <div className="card p-6 h-full bg-dark-900/50 hover:bg-dark-900/70">
                  <stat.icon className={`w-8 h-8 mb-3 mx-auto text-accent-${stat.color}`} />
                  <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-br from-accent-${stat.color} to-primary-500 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
