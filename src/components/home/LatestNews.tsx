import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { NEWS } from '@/data/site';
import { useRouter } from '@/lib/router';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function LatestNews() {
  const { navigate } = useRouter();
  const featured = NEWS.find((n) => n.featured) ?? NEWS[0];
  const others = NEWS.filter((n) => n.id !== featured.id).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Vie de l'école"
            title="Les dernières actualités de l'ESSG"
            description="Événements académiques, sorties de promotion, conférences et projets : suivez la vie de notre établissement."
          />
          <button
            onClick={() => navigate('/actualites')}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:gap-3 transition-all shrink-0"
          >
            Toutes les actualités
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          <button
            onClick={() => navigate('/actualites')}
            className="group relative text-left rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300"
          >
            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                <Badge variant="accent" className="mb-3">{featured.category}</Badge>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight text-balance">
                  {featured.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm lg:text-base line-clamp-2 max-w-xl">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featured.date)}
                </div>
              </div>
            </div>
          </button>

          {/* Others */}
          <div className="flex flex-col gap-4">
            {others.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate('/actualites')}
                className="group flex gap-5 bg-white rounded-2xl p-4 border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all text-left"
              >
                <div className="h-24 w-32 shrink-0 rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col py-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Tag className="h-3 w-3 text-brand-500" />
                    <span className="text-xs font-semibold text-brand-600">{item.category}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h4>
                  <span className="mt-auto text-xs text-slate-400 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {formatDate(item.date)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
