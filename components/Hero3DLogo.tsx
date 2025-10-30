'use client';

import { motion } from 'framer-motion';

export default function Hero3DLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Glowing background effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG "QC" Logo with writing effect */}
      <svg
        viewBox="0 0 300 200"
        className="w-full max-w-lg h-auto relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Letter "Q" */}
        <g>
          {/* Q - Circle part */}
          <motion.circle
            cx="80"
            cy="100"
            r="50"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Q - Tail */}
          <motion.line
            x1="105"
            y1="125"
            x2="125"
            y2="145"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Q - Inner glow dot (appears after drawing) */}
          <motion.circle
            cx="80"
            cy="100"
            r="25"
            fill="url(#logoGradient)"
            opacity="0.15"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          />
        </g>

        {/* Letter "C" */}
        <g>
          {/* C - Main arc */}
          <motion.path
            d="M 270 50 Q 210 50 190 100 Q 210 150 270 150"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.3, ease: "easeInOut" }}
          />

          {/* C - Inner glow fill (appears after drawing) */}
          <motion.path
            d="M 260 60 Q 220 60 205 100 Q 220 140 260 140"
            fill="url(#logoGradient)"
            opacity="0.12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          />
        </g>

        {/* Animated particles around letters */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const qRadius = 70;
          const qX = 80 + Math.cos((angle * Math.PI) / 180) * qRadius;
          const qY = 100 + Math.sin((angle * Math.PI) / 180) * qRadius;

          return (
            <motion.circle
              key={`q-particle-${i}`}
              cx={qX}
              cy={qY}
              r="2"
              fill="#00BFFF"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                delay: 2.5 + (i * 0.15),
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}

        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const cRadius = 70;
          const cX = 230 + Math.cos((angle * Math.PI) / 180) * cRadius;
          const cY = 100 + Math.sin((angle * Math.PI) / 180) * cRadius;

          return (
            <motion.circle
              key={`c-particle-${i}`}
              cx={cX}
              cy={cY}
              r="2"
              fill="#00BFFF"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                delay: 4.0 + (i * 0.15),
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}

        {/* Connection line between Q and C (draws after both letters) */}
        <motion.line
          x1="130"
          y1="100"
          x2="190"
          y2="100"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1, delay: 4.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Orbiting rings */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-primary-500/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] border border-accent-cyan/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner accents */}
      {[
        { top: '10%', left: '10%', delay: 0 },
        { top: '10%', right: '10%', delay: 0.2 },
        { bottom: '10%', left: '10%', delay: 0.4 },
        { bottom: '10%', right: '10%', delay: 0.6 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12"
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 5 + pos.delay, duration: 0.5 }}
        >
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <motion.path
              d="M 0 10 L 0 0 L 10 0"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5 + pos.delay, duration: 0.3 }}
            />
            <motion.path
              d="M 40 0 L 50 0 L 50 10"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5.1 + pos.delay, duration: 0.3 }}
            />
            <motion.path
              d="M 50 40 L 50 50 L 40 50"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5.2 + pos.delay, duration: 0.3 }}
            />
            <motion.path
              d="M 10 50 L 0 50 L 0 40"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 5.3 + pos.delay, duration: 0.3 }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
