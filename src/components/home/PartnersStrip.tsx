import { Building2, Globe2, Landmark, Briefcase } from 'lucide-react';
import { PARTNERS } from '@/data/site';
import { useRouter } from '@/lib/router';

const typeIcons: Record<string, typeof Building2> = {
  'Institutionnel': Landmark,
  'Collectivité': Building2,
  'Académique': Globe2,
  'Entreprise': Briefcase,
  'International': Globe2,
  'Professionnel': Briefcase,
};

export function PartnersStrip() {
  const { navigate } = useRouter();
  // Duplicate for seamless marquee
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand-600">Ils nous font confiance</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-slate-900 font-display">
            Partenaires institutionnels, académiques et entreprises
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-marquee w-max">
          {loop.map((partner, i) => {
            const Icon = typeIcons[partner.type] ?? Building2;
            return (
              <button
                key={`${partner.id}-${i}`}
                onClick={() => navigate('/partenaires')}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white shadow-soft hover:shadow-card hover:border-brand-200 transition-all shrink-0 w-72 text-left"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <Icon className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-slate-900 truncate group-hover:text-brand-700 transition-colors">{partner.name}</div>
                  <div className="text-xs text-slate-400">{partner.type}</div>
                </div>
              </button>
            );
          })}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
