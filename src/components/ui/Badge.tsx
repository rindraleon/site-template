interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'accent' | 'neutral' | 'outline';
  className?: string;
}

const variants = {
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
  accent: 'bg-accent-50 text-accent-700 border-accent-200',
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  outline: 'bg-white/10 text-white border-white/25 backdrop-blur-sm',
};

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
