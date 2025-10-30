'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MeshGlobeWithQC() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate meridian and parallel lines for globe mesh
  const meridians = 12; // Vertical lines
  const parallels = 8; // Horizontal lines
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Rotating Globe with Mesh Lines */}
      <div className="relative w-96 h-96 perspective-1000">
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `rotateY(${rotation}deg) rotateX(15deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Globe Sphere Base */}
          <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 backdrop-blur-sm" 
               style={{ transform: 'translateZ(0px)' }} />
          
          {/* Meridian Lines (Vertical) */}
          {Array.from({ length: meridians }).map((_, i) => {
            const angle = (360 / meridians) * i;
            return (
              <div
                key={`meridian-${i}`}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${angle}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400/40 to-transparent"
                     style={{ transform: 'translateX(-0.5px)' }} />
              </div>
            );
          })}

          {/* Parallel Lines (Horizontal/Latitude) */}
          {Array.from({ length: parallels }).map((_, i) => {
            const scale = Math.sin((Math.PI / (parallels + 1)) * (i + 1));
            const offsetY = ((i + 1) / (parallels + 1)) * 100;
            return (
              <motion.div
                key={`parallel-${i}`}
                className="absolute left-1/2 border border-accent-cyan/30 rounded-full"
                style={{
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  top: `${offsetY}%`,
                  transform: 'translate(-50%, -50%)',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            );
          })}

          {/* Glowing Nodes at Intersections */}
          {Array.from({ length: 24 }).map((_, i) => {
            const lat = (Math.random() - 0.5) * 180;
            const long = Math.random() * 360;
            const scale = Math.cos((lat * Math.PI) / 180);
            const x = 50 + scale * 48 * Math.cos((long * Math.PI) / 180);
            const y = 50 + 48 * Math.sin((lat * Math.PI) / 180);
            
            return (
              <motion.div
                key={`node-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary-400 shadow-lg shadow-primary-500/50"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}

          {/* Orbiting Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-cyan/40"
            style={{
              transform: 'rotateX(75deg)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Central Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Stylish "QC" Letters Below Globe */}
      <motion.div 
        className="absolute bottom-0 flex items-center justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 200 120"
          className="w-64 h-32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="qcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>

            <filter id="qcGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Letter "Q" */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Q Circle */}
            <circle
              cx="60"
              cy="60"
              r="30"
              stroke="url(#qcGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#qcGlow)"
            />
            {/* Q Tail */}
            <line
              x1="80"
              y1="80"
              x2="95"
              y2="95"
              stroke="url(#qcGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#qcGlow)"
            />
            {/* Inner Glow */}
            <motion.circle
              cx="60"
              cy="60"
              r="20"
              fill="url(#qcGradient)"
              opacity="0.15"
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.g>

          {/* Letter "C" */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* C Arc */}
            <path
              d="M 160 30 A 30 30 0 0 0 160 90"
              stroke="url(#qcGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              filter="url(#qcGlow)"
            />
            {/* Inner Glow */}
            <motion.path
              d="M 155 35 A 25 25 0 0 0 155 85 L 140 85 A 15 15 0 0 1 140 35 Z"
              fill="url(#qcGradient)"
              opacity="0.15"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
          </motion.g>

          {/* Connecting Dots */}
          {[
            { x: 60, y: 30, delay: 1.0 },
            { x: 60, y: 90, delay: 1.1 },
            { x: 90, y: 60, delay: 1.2 },
            { x: 130, y: 60, delay: 1.3 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="2"
              fill="#00BFFF"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot.delay,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Corner Brackets (HUD style) */}
      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, right: 0, rotate: 180 },
        { bottom: 0, left: 0, rotate: 270 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16"
          style={{ ...corner }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
        >
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <path
              d="M 0 5 L 0 0 L 5 0"
              stroke="#00BFFF"
              strokeWidth="0.5"
              fill="none"
              style={{ transform: `rotate(${corner.rotate}deg)`, transformOrigin: 'center' }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
