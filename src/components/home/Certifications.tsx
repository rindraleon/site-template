import { Award, ShieldCheck, Trophy, BadgeCheck } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { CERTIFICATIONS } from '@/data/site';

const icons = [Award, ShieldCheck, Trophy, BadgeCheck, Award, Trophy];

export function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Distinctions & certifications"
          title="Une école reconnue pour son exigence et son impact"
          description="L'ESSG est accréditée par les plus hautes instances nationales et récompensée pour son innovation pédagogique et son engagement en faveur du développement durable."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={cert.title}
                className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-soft">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-full px-3 py-1">{cert.year}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">{cert.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{cert.issuer}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-brand-200 to-transparent" />
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-600">
                  <BadgeCheck className="h-4 w-4" />
                  Certifié
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
