import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variantClasses = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-lift focus-visible:ring-brand-500',
  secondary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-soft hover:shadow-lift focus-visible:ring-accent-500',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400',
  outline:
    'bg-white text-slate-800 border border-slate-300 hover:border-brand-500 hover:text-brand-700 focus-visible:ring-brand-500',
};

const sizeClasses = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
