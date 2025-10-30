'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/20 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] btn-shimmer relative overflow-hidden',
    secondary: 'bg-accent-cyan text-white hover:bg-accent-cyan/90 shadow-lg shadow-accent-cyan/20 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] relative overflow-hidden',
    outline: 'border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    ghost: 'text-dark-300 hover:text-dark-50 hover:bg-dark-800/50',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <motion.div
          className="flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
