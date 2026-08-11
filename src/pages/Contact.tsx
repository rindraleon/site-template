import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, User, Building } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { SITE } from '@/data/site';

const subjects = [
  'Demande d\'information générale',
  'Admission / inscription',
  'Formations',
  'Partenariat',
  'Recherche & projets',
  'Presse & médias',
  'Autre',
];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    subject: subjects[0],
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Veuillez indiquer votre nom.';
    if (!form.email.trim()) e.email = 'Veuillez indiquer votre email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format d\'email invalide.';
    if (!form.message.trim()) e.message = 'Veuillez saisir votre message.';
    else if (form.message.trim().length < 10) e.message = 'Votre message est trop court.';
    if (!form.consent) e.consent = 'Veuillez accepter le traitement de vos données.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }));
  };

  const contactCards = [
    { icon: MapPin, label: 'Adresse', value: SITE.address },
    { icon: Phone, label: 'Téléphone', value: SITE.phone },
    { icon: Mail, label: 'Email', value: SITE.email },
    { icon: Clock, label: 'Horaires', value: SITE.hours },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8199134/pexels-photo-8199134.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt="Étudiants en classe"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 to-ink" />
        </div>
        <div className="container-page relative z-10">
          <Badge variant="outline" className="mb-5">Requête / Contact</Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-balance leading-[1.1]">
            Parlons de votre projet
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl text-pretty">
            Une question sur les formations, l'admission, un partenariat ou un projet ?
            Notre équipe vous répond sous 48 heures ouvrées.
          </p>
        </div>
      </section>

      <Section className="!pt-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-soft p-10 text-center animate-scale-in">
                <div className="h-16 w-16 mx-auto rounded-full bg-brand-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-8 w-8 text-brand-600" />
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900">Message envoyé !</h2>
                <p className="mt-3 text-slate-600 max-w-md mx-auto">
                  Merci {form.name.split(' ')[0]}. Votre demande a bien été enregistrée.
                  Nous vous répondrons à l'adresse <span className="font-semibold text-slate-800">{form.email}</span> dans les meilleurs délais.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', organization: '', subject: subjects[0], message: '', consent: false }); }}
                  className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-soft p-7 lg:p-8 space-y-5" noValidate>
                <div>
                  <h2 className="font-display font-bold text-xl text-slate-900">Formulaire de contact</h2>
                  <p className="text-sm text-slate-500 mt-1">Les champs marqués d'un * sont obligatoires.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Nom complet *"
                    icon={User}
                    error={errors.name}
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    placeholder="Prénom Nom"
                  />
                  <Field
                    label="Email *"
                    icon={Mail}
                    type="email"
                    error={errors.email}
                    value={form.email}
                    onChange={(v) => update('email', v)}
                    placeholder="vous@exemple.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Organisation"
                    icon={Building}
                    value={form.organization}
                    onChange={(v) => update('organization', v)}
                    placeholder="Entreprise, université..."
                    optional
                  />
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Sujet</label>
                    <select
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={5}
                      placeholder="Décrivez votre demande..."
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent resize-none ${errors.message ? 'border-red-300 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500'}`}
                    />
                  </div>
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="text-sm text-slate-600">
                    J'accepte que mes données soient traitées pour répondre à ma demande, conformément à la politique de confidentialité. *
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-500 -mt-3">{errors.consent}</p>}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 shadow-soft hover:shadow-lift transition-all"
                >
                  <Send className="h-4 w-4" />
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-5">Coordonnées</h3>
              <ul className="space-y-5">
                {contactCards.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-50 flex items-center justify-center">
                      <c.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{c.label}</div>
                      <div className="text-sm text-slate-800 font-medium mt-0.5">{c.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ink rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">Réponse rapide</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pour les questions d'admission, consultez d'abord notre
                <button className="text-brand-400 font-semibold hover:underline mx-1">page Admission & FAQ</button>
                qui répond aux questions les plus fréquentes.
              </p>
            </div>

            {/* Mini map */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
              <div className="relative h-48 bg-brand-50">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="200" fill="#eef7f5" />
                  <path d="M 0 100 Q 100 80 200 110 T 400 90" fill="none" stroke="#74bfb9" strokeWidth="6" opacity="0.4" strokeLinecap="round" />
                  <path d="M 200 0 L 190 200" stroke="#a9d9d4" strokeWidth="3" opacity="0.5" />
                  <path d="M 0 120 L 400 120" stroke="#a9d9d4" strokeWidth="3" opacity="0.4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-accent-400/30 animate-ping" />
                    <MapPin className="h-10 w-10 text-accent-500 fill-accent-500 drop-shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-800">{SITE.address}</p>
                <a
                  href="https://www.openstreetmap.org/?mlat=34.0209&mlon=-6.8417#map=15/34.0209/-6.8417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Voir sur la carte
                  <MapPin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

interface FieldProps {
  label: string;
  icon: typeof User;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  optional?: boolean;
}

function Field({ label, icon: Icon, value, onChange, placeholder, type = 'text', error, optional }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}{!optional && ' '}
        {optional && <span className="text-slate-400 font-normal">(optionnel)</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-11 pl-10 pr-4 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent ${error ? 'border-red-300 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500'}`}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
