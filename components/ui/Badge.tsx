import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'slate' | 'cyan' | 'teal' | 'emerald';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-dark-800 text-dark-300 border-dark-700',
    blue: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
    slate: 'bg-accent-slate/10 text-accent-slate border-accent-slate/20',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
    teal: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
    emerald: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;