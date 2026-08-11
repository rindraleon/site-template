import { useState } from 'react';
import {
  FileText, Upload, CheckCircle2, ChevronDown, GraduationCap, Calendar,
  DollarSign, HelpCircle, ArrowRight, ClipboardList, BookOpen, Award,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ADMISSION_FAQ, type FaqItem } from '@/data/site';
import { useRouter } from '@/lib/router';

const steps = [
  {
    icon: ClipboardList,
    title: '1. Créer votre compte',
    desc: 'Inscrivez-vous sur la plateforme d\'admission en ligne de l\'ESSG.',
  },
  {
    icon: FileText,
    title: '2. Remplir le formulaire',
    desc: 'Complétez le formulaire de candidature avec vos informations et votre parcours.',
  },
  {
    icon: Upload,
    title: '3. Téléverser les pièces',
    desc: 'Ajoutez vos relevés de notes, CV, lettre de motivation et pièce d\'identité.',
  },
  {
    icon: CheckCircle2,
    title: '4. Concours & entretien',
    desc: 'Épreuves d\'admission puis entretien de motivation devant un jury.',
  },
];

const timeline = [
  { date: 'Janvier – Mars', label: 'Ouverture des candidatures', active: true },
  { date: 'Avril', label: 'Épreuves écrites', active: true },
  { date: 'Mai – Juin', label: 'Entretiens de motivation', active: false },
  { date: 'Juillet', label: 'Résultats d\'admission', active: false },
  { date: 'Septembre', label: 'Rentrée académique', active: false },
];

const infoCards = [
  { icon: GraduationCap, title: 'Niveau requis', value: 'Bac scientifique ou bac+2', desc: 'Selon le niveau d\'entrée visé.' },
  { icon: Calendar, title: 'Calendrier', value: 'Candidatures : Janv. – Mars', desc: 'Campagne annuelle unique.' },
  { icon: DollarSign, title: 'Frais de dossier', value: 'Voir la campagne en cours', desc: 'Non remboursables.' },
  { icon: BookOpen, title: 'Langue d\'enseignement', value: 'Français (anglais au master)', desc: 'Modules bilingues en recherche.' },
];

export function Admission() {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', level: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nom requis.';
    if (!form.email.trim()) e.email = 'Email requis.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide.';
    if (!form.level) e.level = 'Sélectionnez un niveau.';
    if (!form.consent) e.consent = 'Acceptation requise.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const toggleFaq = (key: string) => setOpenFaq(openFaq === key ? null : key);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7942514/pexels-photo-7942514.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Cérémonie de remise des diplômes"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Admission & inscription</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            Rejoignez l'ESSG en 4 étapes
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Toutes les informations pour candidater : procédure, calendrier, pièces requises
            et réponses aux questions fréquentes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <Section className="!pt-16">
        <SectionHeader
          eyebrow="Procédure d'admission"
          title="Comment candidater à l'ESSG"
          description="Un parcours clair et transparent, de la création du compte à l'entretien final."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-soft mb-4">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 h-5 w-5 text-slate-300" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Info cards + timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div>
            <SectionHeader eyebrow="Informations clés" title="Ce qu'il faut savoir" />
            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                    <card.icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{card.title}</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">{card.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <SectionHeader eyebrow="Calendrier" title="Les étapes de l'année" />
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pb-8 last:pb-0">
                  <div className={`absolute -left-[22px] h-5 w-5 rounded-full border-4 border-white ${item.active ? 'bg-brand-600' : 'bg-slate-300'} shadow-sm`} />
                  <div className={`text-sm font-bold ${item.active ? 'text-brand-700' : 'text-slate-700'}`}>{item.date}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration form */}
      <Section id="inscription">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Demande d'admission"
              title="Démarrez votre candidature"
              description="Laissez vos coordonnées : nous vous enverrons le lien d'accès à la plateforme d'inscription et le guide du candidat."
            />
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-50 border border-brand-100">
              <Award className="h-6 w-6 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Excellence et accessibilité</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  L'ESSG est une école publique : les bourses de l'enseignement supérieur
                  et les aides à la mobilité internationale sont accessibles à tous les étudiants.
                </p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-soft p-10 text-center animate-scale-in">
                <div className="h-16 w-16 mx-auto rounded-full bg-brand-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">Demande enregistrée !</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  Merci {form.name.split(' ')[0]}. Vous recevrez sous peu un email à <span className="font-semibold text-slate-800">{form.email}</span> avec votre accès à la plateforme d'inscription.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', level: '', consent: false }); }}
                  className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-soft p-7 lg:p-8 space-y-5" noValidate>
                <h3 className="font-display font-bold text-lg text-slate-900">Formulaire de pré-inscription</h3>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom complet *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: '' }); }}
                    placeholder="Prénom Nom"
                    className={`w-full h-11 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.name ? 'border-red-300 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500'}`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: '' }); }}
                    placeholder="vous@exemple.com"
                    className={`w-full h-11 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.email ? 'border-red-300 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500'}`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Niveau visé *</label>
                  <select
                    value={form.level}
                    onChange={(e) => { setForm({ ...form, level: e.target.value }); if (errors.level) setErrors({ ...errors, level: '' }); }}
                    className={`w-full h-11 px-4 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white ${errors.level ? 'border-red-300 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500'}`}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="licence">Licence</option>
                    <option value="cycle">Cycle Ingénieur</option>
                    <option value="master">Master</option>
                    <option value="doctorat">Doctorat</option>
                  </select>
                  {errors.level && <p className="mt-1.5 text-xs text-red-500">{errors.level}</p>}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => { setForm({ ...form, consent: e.target.checked }); if (errors.consent) setErrors({ ...errors, consent: '' }); }}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="text-sm text-slate-600">
                    J'accepte de recevoir les informations relatives à l'admission et que mes données soient traitées à cette fin. *
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-500 -mt-3">{errors.consent}</p>}

                <Button type="submit" variant="primary" size="md" className="w-full">
                  <FileText className="h-4 w-4" />
                  Recevoir mon accès
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Questions fréquentes"
            title="Tout savoir sur l'admission et la vie étudiante"
            description="Les réponses aux questions les plus posées par les candidats et leurs familles."
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {ADMISSION_FAQ.map((group) => (
              <div key={group.section}>
                <h3 className="flex items-center gap-2 font-display font-bold text-lg text-slate-900 mb-4">
                  <HelpCircle className="h-5 w-5 text-brand-600" />
                  {group.section}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item, idx) => {
                    const key = `${group.section}-${idx}`;
                    const isOpen = openFaq === key;
                    return (
                      <FaqRow key={key} item={item} isOpen={isOpen} onToggle={() => toggleFaq(key)} />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-8 rounded-3xl bg-white border border-slate-100 shadow-soft">
              <p className="text-slate-600">Vous n'avez pas trouvé votre réponse ?</p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`bg-white rounded-2xl border transition-all ${isOpen ? 'border-brand-200 shadow-card' : 'border-slate-100 shadow-soft'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-sm text-slate-900">{item.question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-brand-600' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
