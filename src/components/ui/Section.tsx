import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment} mb-14`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand-600 mb-4">
          <span className="h-px w-8 bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-600 text-pretty leading-relaxed">{description}</p>
      )}
    </div>
  );
}
