import { CheckCircle2, Compass, Layers, Satellite, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const pillars = [
  {
    icon: Satellite,
    title: 'Observation de la Terre',
    text: 'Télédétection, imagerie satellite et drones pour comprendre le territoire en temps réel.',
  },
  {
    icon: Layers,
    title: 'Données & systèmes d\'information',
    text: 'Bases de données spatiales, SIG et intelligence géographique au service de la décision.',
  },
  {
    icon: Compass,
    title: 'Mesure & précision',
    text: 'Topographie, géodésie et cadastre, l\'exactitude au cœur du métier du géomaticien.',
  },
  {
    icon: Users,
    title: 'Service public & territoire',
    text: 'Aménagement, environnement et gouvernance : une école au service de la société.',
  },
];

export function Presentation() {
  return (
    <Section id="presentation">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-lift">
            <img
              src="https://images.pexels.com/photos/8197558/pexels-photo-8197558.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000"
              alt="Étudiants en cours à l'ESSG"
              className="w-full h-[420px] lg:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-lift p-5 w-56 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 font-display">98%</div>
                <div className="text-xs text-slate-500">Taux d'insertion à 6 mois</div>
              </div>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="absolute -top-8 -left-8 h-40 w-40 bg-brand-100 rounded-full blur-3xl opacity-60 -z-10" />
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="L'ESSG en bref"
            title="Une école publique au service des territoires et de l'innovation géographique"
            description="Depuis plus de trois décennies, l'ESSG forme des cadres et des chercheurs de référence dans les métiers de la géomatique, de l'aménagement et de la donnée spatiale, en conjuguant exigence académique et impact sur le terrain."
          />
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {pillars.map((p) => (
              <div key={p.title} className="group flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/40 transition-all">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-tight">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
