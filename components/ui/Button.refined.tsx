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
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-primary disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-accent-primary text-white hover:bg-accent-primary/90 focus:ring-accent-primary shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-accent-secondary text-white hover:bg-accent-secondary/90 focus:ring-accent-secondary shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-background-tertiary focus:ring-accent-primary/50',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const MotionComponent = motion(href ? Link : 'button');
  
  return (
    <MotionComponent
      {...(href ? { href } : { onClick })}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
