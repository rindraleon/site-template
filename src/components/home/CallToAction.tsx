import { ArrowRight, FileText, MessageCircle } from 'lucide-react';
import { useRouter } from '@/lib/router';

export function CallToAction() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink p-10 lg:p-16">
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display text-balance leading-tight">
              Engagez votre parcours dans la géomatique de demain
            </h2>
            <p className="mt-5 text-lg text-brand-100 text-pretty">
              Que vous soyez futur étudiant, partenaire ou curieux de nos projets :
              l'ESSG vous accompagne à chaque étape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/admission')}
                className="group inline-flex items-center gap-2 h-13 px-8 rounded-full bg-accent-500 text-white font-semibold hover:bg-accent-400 shadow-lift transition-all"
              >
                <FileText className="h-5 w-5" />
                Demande d'admission
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 h-13 px-8 rounded-full bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Demander une information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
