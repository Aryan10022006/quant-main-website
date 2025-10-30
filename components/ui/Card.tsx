import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseStyles = 'bg-dark-900/50 border border-dark-800 rounded-2xl p-6 backdrop-blur-sm';
  const hoverStyles = hover 
    ? 'hover:border-primary-500/30 hover:shadow-glow-sm transition-all duration-300' 
    : '';
  
  if (hover) {
    return (
      <motion.div 
        className={`${baseStyles} ${hoverStyles} ${className}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
