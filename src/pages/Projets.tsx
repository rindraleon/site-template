import { useState } from 'react';
import { Globe2, Landmark, FlaskConical, Handshake, ArrowRight, Tag } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS, type Project } from '@/data/site';

const categories = ['Tous', 'International', 'Service public', 'Recherche & innovation', 'Partenariat'] as const;

const catConfig: Record<string, { icon: typeof Globe2; color: string; bg: string }> = {
  'International': { icon: Globe2, color: 'text-brand-600', bg: 'bg-brand-50' },
  'Service public': { icon: Landmark, color: 'text-accent-600', bg: 'bg-accent-50' },
  'Recherche & innovation': { icon: FlaskConical, color: 'text-brand-600', bg: 'bg-brand-50' },
  'Partenariat': { icon: Handshake, color: 'text-accent-600', bg: 'bg-accent-50' },
};

export function Projets() {
  const [filter, setFilter] = useState<string>('Tous');

  const filtered = filter === 'Tous' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30596258/pexels-photo-30596258.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Vue satellite de l'Europe"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Projets & rayonnement</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            L'impact de l'ESSG au-delà de la formation
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Projets internationaux, service public, recherche et partenariats :
            l'école agit pour la technologie, le développement durable et la gouvernance des territoires.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(['International', 'Service public', 'Recherche & innovation', 'Partenariat'] as const).map((cat) => {
              const cfg = catConfig[cat];
              const count = PROJECTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`group p-6 rounded-2xl border text-left transition-all ${filter === cat ? 'border-brand-400 bg-brand-50/50 shadow-card' : 'border-slate-100 hover:border-brand-200 hover:bg-slate-50'}`}
                >
                  <div className={`h-12 w-12 rounded-xl ${cfg.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cfg.icon className={`h-6 w-6 ${cfg.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">{cat}</h3>
                  <p className="text-sm text-slate-500 mt-1">{count} projet{count > 1 ? 's' : ''}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            <span className="font-bold text-slate-900">{filtered.length}</span> projet{filtered.length > 1 ? 's' : ''}
          </p>
          <button
            onClick={() => setFilter('Tous')}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Réinitialiser
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Section>
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cfg = catConfig[project.category] ?? catConfig['International'];
  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full ${cfg.bg} ${cfg.color} px-3 py-1.5 text-xs font-semibold`}>
            <cfg.icon className="h-3.5 w-3.5" />
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-slate-900 leading-tight group-hover:text-brand-700 transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1">
              <Tag className="h-3 w-3 text-slate-400" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
