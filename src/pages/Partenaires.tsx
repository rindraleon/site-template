import { useState, useMemo } from 'react';
import { Building2, Globe2, Landmark, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { PARTNERS } from '@/data/site';
import { useRouter } from '@/lib/router';

const typeIcons: Record<string, typeof Building2> = {
  'Institutionnel': Landmark,
  'Collectivité': Building2,
  'Académique': Globe2,
  'Entreprise': Briefcase,
  'International': Globe2,
  'Professionnel': Users,
};

const allTypes = ['Tous', ...Array.from(new Set(PARTNERS.map((p) => p.type)))];

export function Partenaires() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState('Tous');

  const filtered = useMemo(() => {
    return filter === 'Tous' ? PARTNERS : PARTNERS.filter((p) => p.type === filter);
  }, [filter]);

  const typeCounts = allTypes.map((t) => ({
    type: t,
    count: t === 'Tous' ? PARTNERS.length : PARTNERS.filter((p) => p.type === t).length,
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Réunion partenaires"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Partenaires & coopérations</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            Un réseau au service de l'excellence
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Institutions publiques, universités internationales, collectivités et entreprises :
            des partenariats qui irriguent la formation, la recherche et l'insertion professionnelle.
          </p>
        </div>
      </section>

      {/* Stats by type */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {typeCounts.map((tc) => {
              const Icon = tc.type === 'Tous' ? Users : (typeIcons[tc.type] ?? Building2);
              return (
                <button
                  key={tc.type}
                  onClick={() => setFilter(tc.type)}
                  className={`p-5 rounded-2xl border text-center transition-all ${filter === tc.type ? 'border-brand-400 bg-brand-50/50 shadow-card' : 'border-slate-100 hover:border-brand-200'}`}
                >
                  <div className={`h-10 w-10 mx-auto rounded-xl flex items-center justify-center mb-2 ${filter === tc.type ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 font-display">{tc.count}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{tc.type}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <SectionHeader
          eyebrow="Nos partenaires"
          title="Des coopérations multiples et durables"
          description="Chaque partenariat se traduit par des actions concrètes : stages, projets de recherche, mobilité étudiante, double diplomation et service public."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((partner, idx) => {
            const Icon = typeIcons[partner.type] ?? Building2;
            return (
              <div
                key={partner.id}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center group-hover:from-brand-600 group-hover:to-brand-800 transition-all">
                    <Icon className="h-6 w-6 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <Badge variant="brand">{partner.type}</Badge>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 leading-tight group-hover:text-brand-700 transition-colors">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{partner.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Become partner CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-ink p-10 lg:p-14 text-center">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-white font-display text-balance">
                Devenir partenaire de l'ESSG
              </h2>
              <p className="mt-4 text-brand-100">
                Vous êtes une institution, une entreprise ou une université ?
                Co-construisons des projets de formation, de recherche et d'innovation géomatique.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="mt-7 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent-500 text-white font-semibold hover:bg-accent-400 shadow-lift transition-all"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
