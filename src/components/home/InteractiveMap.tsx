import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Mail } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { SITE } from '@/data/site';

export function InteractiveMap() {
  const [active, setActive] = useState<'campus' | 'recherche' | 'terraint'>('campus');

  const points = {
    campus: { label: 'Campus principal', desc: 'Cours, amphithéâtres, laboratoires et administration.', coords: { top: '45%', left: '50%' } },
    recherche: { label: 'Laboratoire GéoData', desc: 'Recherche en données spatiales et intelligence territoriale.', coords: { top: '60%', left: '35%' } },
    terraint: { label: 'Terrain de topographie', desc: 'Zone de pratique et de levé pour les travaux de terrain.', coords: { top: '35%', left: '65%' } },
  };

  const current = points[active];

  return (
    <Section id="carte">
      <SectionHeader
        eyebrow="Nous trouver"
        title="Carte interactive : localiser l'ESSG"
        description="Explorez le campus et les sites associés de l'école. Cliquez sur un point pour en savoir plus."
        align="center"
      />

      <div className="grid lg:grid-cols-3 gap-6 mt-14">
        {/* Map */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lift border border-slate-200 bg-brand-50 min-h-[440px]">
          {/* Stylized map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200" />
          {/* Roads */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#74bfb9" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#grid)" />
            {/* River */}
            <path d="M 0 280 Q 200 250 400 290 T 800 260" fill="none" stroke="#4ba39d" strokeWidth="8" opacity="0.4" strokeLinecap="round" />
            {/* Roads */}
            <path d="M 0 200 L 800 180" stroke="#a9d9d4" strokeWidth="4" opacity="0.5" />
            <path d="M 400 0 L 380 500" stroke="#a9d9d4" strokeWidth="4" opacity="0.5" />
            <path d="M 100 100 L 700 400" stroke="#a9d9d4" strokeWidth="3" opacity="0.4" />
            {/* Park */}
            <circle cx="600" cy="120" r="50" fill="#74bfb9" opacity="0.25" />
            <circle cx="180" cy="380" r="40" fill="#74bfb9" opacity="0.25" />
          </svg>

          {/* Pins */}
          {(Object.keys(points) as Array<keyof typeof points>).map((key) => {
            const p = points[key];
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="absolute -translate-x-1/2 -translate-y-full group"
                style={{ top: p.coords.top, left: p.coords.left }}
                aria-label={p.label}
              >
                <div className={`relative flex flex-col items-center transition-all ${isActive ? 'scale-110' : 'scale-100 opacity-80 hover:opacity-100'}`}>
                  {isActive && (
                    <div className="absolute -inset-4 rounded-full bg-accent-400/30 animate-ping" />
                  )}
                  <MapPin className={`h-8 w-8 drop-shadow-lg transition-colors ${isActive ? 'text-accent-500 fill-accent-500' : 'text-brand-600 fill-brand-600'}`} />
                  {isActive && (
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white rounded-lg shadow-lift px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-100 animate-scale-in">
                      {p.label}
                    </div>
                  )}
                </div>
              </button>
            );
          })}

          {/* Legend */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-soft border border-slate-100">
            <div className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Sites ESSG</div>
            <div className="space-y-1.5">
              {(Object.keys(points) as Array<keyof typeof points>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-2 text-xs ${active === key ? 'text-accent-600 font-semibold' : 'text-slate-500'}`}
                >
                  <MapPin className={`h-3.5 w-3.5 ${active === key ? 'text-accent-500 fill-accent-500' : 'text-brand-500 fill-brand-500'}`} />
                  {points[key].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft">
            <div className="flex items-center gap-2 text-brand-600 mb-3">
              <Navigation className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Point sélectionné</span>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">{current.label}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{current.desc}</p>
          </div>

          <div className="bg-ink rounded-2xl p-6 text-white">
            <h3 className="font-display font-bold text-lg mb-4">Coordonnées</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Clock className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
            <a
              href="https://www.openstreetmap.org/?mlat=34.0209&mlon=-6.8417#map=15/34.0209/-6.8417"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-brand-500 text-white text-sm font-semibold hover:bg-brand-400 transition-colors"
            >
              <Navigation className="h-4 w-4" />
              Itinéraire
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
