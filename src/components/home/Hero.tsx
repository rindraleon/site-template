import { ArrowRight, Play, Award, Map as MapIcon } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { STATS } from '@/data/site';

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30596313/pexels-photo-30596313.png?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Vue satellite de la Terre"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-page relative z-10 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-brand-200 animate-fade-up">
            <Award className="h-4 w-4 text-accent-400" />
            Grande école publique · Habilitation MESRSFC
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display leading-[1.05] text-balance animate-fade-up delay-100">
            Mesurer la Terre,
            <span className="block bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">
              façonner l'avenir
            </span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed text-pretty animate-fade-up delay-200">
            L'École Supérieure des Sciences Géomatiques forme les ingénieurs et chercheurs
            qui transforment le territoire par la donnée spatiale, l'aménagement durable
            et l'innovation géographique.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <button
              onClick={() => navigate('/admission')}
              className="group inline-flex items-center gap-2 h-13 px-8 rounded-full bg-brand-500 text-white font-semibold text-base hover:bg-brand-400 shadow-lift transition-all"
            >
              S'inscrire à l'ESSG
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/formations')}
              className="group inline-flex items-center gap-2 h-13 px-8 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-base hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              Découvrir les formations
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 animate-fade-up delay-400">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink/50 backdrop-blur-sm p-6 lg:p-8">
              <div className="text-3xl lg:text-4xl font-extrabold font-display text-white">{stat.value}</div>
              <div className="mt-1.5 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 lg:h-20">
          <path d="M0,80 C480,10 960,10 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* Floating map pin */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-60">
        <MapIcon className="h-8 w-8 text-brand-300 animate-pulse" />
        <div className="h-16 w-px bg-gradient-to-b from-brand-300 to-transparent" />
      </div>
    </section>
  );
}
