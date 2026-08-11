import { useState, useMemo } from 'react';
import {
  Map, Briefcase, Database, Ruler, Building2, Leaf, MapPin, Code2, Satellite,
  ShieldCheck, TrendingUp, BarChart3, Target, CheckCircle2, Clock, GraduationCap,
  ArrowRight, X, Layers,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DOMAINS, ALL_FILIERES, type Filiere, type FormationLevel } from '@/data/site';
import { useRouter } from '@/lib/router';

const iconMap: Record<string, typeof Map> = {
  Map, Briefcase, Database, Ruler, Building2, Leaf, MapPin, Code2, Satellite, ShieldCheck, TrendingUp, BarChart3,
};

const LEVELS: FormationLevel[] = ['Licence', 'Master', 'Doctorat', 'Cycle Ingénieur'];

const domainColors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  brand: { bg: 'bg-brand-50', text: 'text-brand-700', border: 'border-brand-200', hover: 'hover:border-brand-400' },
  accent: { bg: 'bg-accent-50', text: 'text-accent-700', border: 'border-accent-200', hover: 'hover:border-accent-400' },
};

export function Formations() {
  const { navigate } = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedFiliere, setSelectedFiliere] = useState<Filiere | null>(null);

  const filtered = useMemo(() => {
    return ALL_FILIERES.filter((f) => {
      const matchDomain = selectedDomain === 'all' || f.domain === selectedDomain;
      const matchLevel = selectedLevel === 'all' || f.level === selectedLevel;
      return matchDomain && matchLevel;
    });
  }, [selectedDomain, selectedLevel]);

  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/108942/pexels-photo-108942.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Carte topographique"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Offre de formation</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            Formations par niveau et filière
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Du Licence au Doctorat, découvrez des cursus qui allient expertise technique,
            projets de terrain et ouverture internationale.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[57px] z-30 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <div className="container-page py-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-500 mr-1">Domaine :</span>
              <button
                onClick={() => setSelectedDomain('all')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedDomain === 'all' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Tous
              </button>
              {DOMAINS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDomain(d.name)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedDomain === d.name ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {d.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-500 mr-1">Niveau :</span>
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedLevel === 'all' ? 'bg-accent-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Tous
              </button>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedLevel === lvl ? 'bg-accent-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <Section className="!pt-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            <span className="font-bold text-slate-900">{filtered.length}</span> formation{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((filiere, idx) => {
            const Icon = iconMap[filiere.icon] ?? Map;
            const domain = DOMAINS.find((d) => d.name === filiere.domain);
            const colors = domainColors[domain?.color ?? 'brand'];
            return (
              <button
                key={filiere.id}
                onClick={() => setSelectedFiliere(filiere)}
                className={`group text-left bg-white rounded-2xl p-6 border ${colors.border} shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className={`h-12 w-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="brand">{filiere.level}</Badge>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" />{filiere.duration}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-brand-700 transition-colors">
                  {filiere.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">{filiere.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                  Voir la fiche
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">Aucune formation ne correspond à ces critères.</p>
          </div>
        )}
      </Section>

      {/* LMD overview */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Architecture LMD"
            title="Une offre complète du Licence au Doctorat"
            description="L'ESSG s'inscrit dans le schéma européen LMD (Licence – Master – Doctorat) avec des parcours progressifs et spécialisants."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { level: 'Licence', duration: '3 ans', icon: GraduationCap, desc: 'Acquisition des fondamentaux de la géomatique : mesure, cartographie, SIG et environnement.' },
              { level: 'Master', duration: '2 ans', icon: Layers, desc: 'Spécialisation approfondie en recherche ou professionnel, avec projet de terrain et mémoire.' },
              { level: 'Doctorat', duration: '3–4 ans', icon: Target, desc: 'Recherche originale au sein des laboratoires de l\'ESSG, en cotutelle internationale possible.' },
            ].map((item) => (
              <div key={item.level} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft text-center">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-soft mb-5">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">{item.level}</h3>
                <p className="text-sm text-brand-600 font-semibold mt-1">{item.duration}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filiere detail modal */}
      {selectedFiliere && (
        <FiliereModal filiere={selectedFiliere} onClose={() => setSelectedFiliere(null)} onApply={() => navigate('/admission')} />
      )}
    </>
  );
}

function FiliereModal({ filiere, onClose, onApply }: { filiere: Filiere; onClose: () => void; onApply: () => void }) {
  const Icon = iconMap[filiere.icon] ?? Map;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lift animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 p-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-brand-50 flex items-center justify-center">
              <Icon className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="brand">{filiere.level}</Badge>
                <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" />{filiere.duration}</span>
              </div>
              <h2 className="font-display font-bold text-xl text-slate-900 leading-tight">{filiere.name}</h2>
              <p className="text-sm text-slate-500 mt-0.5">{filiere.domain}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors shrink-0">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div>
            <p className="text-slate-600 leading-relaxed">{filiere.description}</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display font-bold text-base text-slate-900 mb-3">
              <Target className="h-5 w-5 text-brand-600" />
              Objectifs pédagogiques
            </h3>
            <ul className="space-y-2.5">
              {filiere.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display font-bold text-base text-slate-900 mb-3">
              <TrendingUp className="h-5 w-5 text-accent-600" />
              Débouchés professionnels
            </h3>
            <div className="flex flex-wrap gap-2">
              {filiere.outcomes.map((outcome, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-accent-50 border border-accent-200 rounded-full px-3.5 py-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-600" />
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-slate-100 p-6 flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>Fermer</Button>
          <Button variant="primary" onClick={onApply}>
            Candidater
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
