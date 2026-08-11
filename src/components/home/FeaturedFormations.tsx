import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { DOMAINS } from '@/data/site';
import { useRouter } from '@/lib/router';

export function FeaturedFormations() {
  const { navigate } = useRouter();

  return (
    <Section id="formations-phares">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <SectionHeader
          eyebrow="Formations phares"
          title="Trois grands domaines, une même exigence d'excellence"
          description="Du terrain à la donnée, de la mesure à la décision : découvrez une offre de formation complète du Licence au Doctorat."
        />
        <button
          onClick={() => navigate('/formations')}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:gap-3 transition-all shrink-0"
        >
          Toutes les formations
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {DOMAINS.map((domain, idx) => (
          <button
            key={domain.id}
            onClick={() => navigate('/formations')}
            className="group text-left relative rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={domain.image}
                alt={domain.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <Badge variant="outline" className="mb-2">
                  {domain.filieres.length} filières
                </Badge>
                <h3 className="font-display font-bold text-xl text-white leading-tight">{domain.name}</h3>
              </div>
            </div>
            {/* Body */}
            <div className="p-6 bg-white">
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{domain.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {domain.filieres.slice(0, 3).map((f) => (
                  <span key={f.id} className="text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1">
                    {f.name}
                  </span>
                ))}
                {domain.filieres.length > 3 && (
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 rounded-full px-3 py-1">
                    +{domain.filieres.length - 3}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-between pt-5 border-t border-slate-100">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-brand-500" />
                    L · M · D
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-500" />
                    3 ans
                  </span>
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2 transition-all">
                  Explorer
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Section>
  );
}
