'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HolographicCube: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full" />
      
      {/* Animated Wireframe Geometric Shape using CSS */}
      <div className="relative w-80 h-80">
        {/* Main Icosahedron-like shape using rotating divs */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: 360, rotateX: 15 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Outer wireframe */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-8 border-2 border-primary-400/30"
              style={{
                transform: `rotateY(${i * 45}deg) rotateX(${i * 22.5}deg) translateZ(80px)`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                borderColor: [
                  "rgba(14, 165, 233, 0.3)",
                  "rgba(0, 191, 255, 0.5)",
                  "rgba(8, 145, 178, 0.3)",
                  "rgba(14, 165, 233, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Inner glowing core */}
          <motion.div
            className="absolute inset-20 border-2 border-accent-cyan/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              rotate: 360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbital rings */}
          {[0, 60, 120].map((angle, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute inset-12 border border-primary-400/20 rounded-full"
              style={{
                transform: `rotateX(${angle}deg)`,
              }}
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Floating geometric nodes */}
        {[
          { x: 20, y: 20, delay: 0 },
          { x: 280, y: 40, delay: 0.5 },
          { x: 40, y: 280, delay: 1 },
          { x: 260, y: 260, delay: 1.5 },
        ].map((pos, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-4 h-4 border-2 border-accent-cyan/50 rounded-full bg-accent-cyan/20"
            style={{ left: pos.x, top: pos.y }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}

        {/* Connecting lines between nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.line
            x1="24"
            y1="24"
            x2="284"
            y2="44"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="284"
            y1="44"
            x2="264"
            y2="264"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="264"
            y1="264"
            x2="44"
            y2="284"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="44"
            y1="284"
            x2="24"
            y2="24"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* HUD Corner brackets */}
      <motion.div
        className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent-cyan/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent-cyan/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      />

      {/* Data stream effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"
            style={{ width: '100%', left: 0 }}
            initial={{ top: '-2px', opacity: 0 }}
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicCube;
