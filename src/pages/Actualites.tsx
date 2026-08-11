import { useState, useMemo } from 'react';
import { Calendar, Tag, ArrowRight, Search, X } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { NEWS, type NewsItem } from '@/data/site';
import { useRouter } from '@/lib/router';

const allCategories = ['Tous', ...Array.from(new Set(NEWS.map((n) => n.category)))];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function Actualites() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState('Tous');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const filtered = useMemo(() => {
    return NEWS.filter((n) => {
      const matchCat = filter === 'Tous' || n.category === filter;
      const matchQuery = !query || n.title.toLowerCase().includes(query.toLowerCase()) || n.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Conférence"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Actualités & vie de l'école</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            Toute la vie de l'ESSG
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Événements académiques, sorties de promotion, conférences, voyages d'études
            et lancements de projets : le pouls de l'école au jour le jour.
          </p>
        </div>
      </section>

      {/* Search + filter */}
      <section className="sticky top-[57px] z-30 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <div className="container-page py-4 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === cat ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative lg:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une actualité..."
              className="w-full h-10 pl-10 pr-4 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <Section className="!pt-12">
        {featured && (
          <button
            onClick={() => setSelected(featured)}
            className="group relative block w-full text-left rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all mb-8"
          >
            <div className="relative h-72 lg:h-96 overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Badge variant="accent" className="mb-3">À la une · {featured.category}</Badge>
                <h2 className="font-display font-bold text-2xl lg:text-4xl text-white leading-tight text-balance max-w-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-300 max-w-2xl line-clamp-2">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featured.date)}
                </div>
              </div>
            </div>
          </button>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${idx * 0.06}s` }}
              onClick={() => setSelected(item)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-700">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug line-clamp-2 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(item.date)}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Lire
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">Aucune actualité ne correspond à votre recherche.</p>
          </div>
        )}
      </Section>

      {/* Article modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lift animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-slate-700" />
              </button>
              <div className="absolute bottom-4 left-4">
                <Badge variant="accent">{selected.category}</Badge>
              </div>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <Calendar className="h-4 w-4" />
                {formatDate(selected.date)}
              </div>
              <h2 className="font-display font-bold text-2xl text-slate-900 leading-tight">{selected.title}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{selected.excerpt}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cet événement s'inscrit dans la dynamique de rayonnement de l'ESSG, qui
                conjugue formation d'excellence, recherche appliquée et engagement
                territorial. L'école continue d'investir dans l'innovation pédagogique
                et le rapprochement avec les acteurs professionnels du secteur géospatial.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <button
                  onClick={() => { setSelected(null); navigate('/contact'); }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
