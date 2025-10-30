'use client';

import { motion } from 'framer-motion';

export default function Hero3DModel() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Central Glowing Sphere */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff, #00BFFF, #0EA5E9)',
          filter: 'blur(2px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Core Glow */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-white/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wireframe Orbit Rings */}
      {[0, 45, 90].map((rotation, index) => (
        <motion.div
          key={index}
          className="absolute w-80 h-80 border-2 rounded-full"
          style={{
            borderColor: 'rgba(14, 165, 233, 0.3)',
            transform: `rotateX(${rotation}deg)`,
          }}
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Data Points */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const radius = 150;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary-400"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: `${x}px`,
              marginTop: `${y}px`,
              boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Connecting Lines Between Points */}
      <svg className="absolute w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => {
          const angle1 = (i * 360) / 8;
          const angle2 = ((i + 1) * 360) / 8;
          const radius = 150;
          const x1 = 300 + Math.cos((angle1 * Math.PI) / 180) * radius;
          const y1 = 300 + Math.sin((angle1 * Math.PI) / 180) * radius;
          const x2 = 300 + Math.cos((angle2 * Math.PI) / 180) * radius;
          const y2 = 300 + Math.sin((angle2 * Math.PI) / 180) * radius;

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          );
        })}
      </svg>

      {/* Outer Glow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.2), transparent)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Shapes - Floating Cubes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`cube-${i}`}
          className="absolute w-16 h-16 border-2 border-accent-cyan/30"
          style={{
            left: `${20 + i * 30}%`,
            top: `${15 + i * 25}%`,
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
