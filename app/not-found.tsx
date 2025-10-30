'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, AlertTriangle, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  // Floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-l from-accent-cyan/20 to-primary-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* 404 Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="mb-12 inline-block"
        >
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-500/10 via-accent-cyan/10 to-accent-teal/10 flex items-center justify-center backdrop-blur-sm border border-primary-500/20">
              <AlertTriangle className="w-20 h-20 text-primary-400" strokeWidth={1.5} />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-accent-cyan/30 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl -z-10"
            />
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[180px] font-black leading-none mb-4">
            <span className="inline-block bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-teal bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Path Not Found</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-300 mb-2 font-medium">
            The page you're looking for has drifted into the quantum void.
          </p>
          <p className="text-md text-dark-400">
            It might have been moved, deleted, or never existed in this timeline.
          </p>
        </motion.div>

        {/* Terminal-style Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-12 inline-block"
        >
          <div className="glass px-8 py-4 rounded-2xl border border-primary-500/20">
            <div className="flex items-center gap-4 font-mono text-sm">
              <Terminal className="w-5 h-5 text-primary-400" />
              <span className="text-dark-400">STATUS:</span>
              <motion.span
                className="text-primary-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404_NOT_FOUND
              </motion.span>
              <motion.div
                className="w-2 h-2 bg-accent-cyan rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button href="/" size="lg" className="group">
            <Home className="w-5 h-5" />
            Return Home
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button href="/projects" variant="outline" size="lg">
            <Search className="w-5 h-5" />
            Explore Projects
          </Button>
        </motion.div>

        {/* Additional Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-sm text-dark-500"
        >
          <p>
            Lost in the matrix? Start from the{' '}
            <Link href="/" className="text-primary-400 hover:text-primary-300 transition-colors underline font-medium">
              homepage
            </Link>
            {' '}or{' '}
            <Link href="/team" className="text-accent-cyan hover:text-accent-cyan/80 transition-colors underline font-medium">
              contact us
            </Link>
            {' '}if you need assistance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
