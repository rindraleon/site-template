import { Globe, Mail, Phone, MapPin, Clock, Linkedin, Twitter, Youtube, Facebook, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/data/site';
import { useRouter } from '@/lib/router';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-ink text-slate-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-page py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-display">Prêt à rejoindre l'ESSG ?</h3>
            <p className="mt-2 text-slate-400">Déposez votre candidature ou demandez une information personnalisée.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => navigate('/admission')}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-colors"
            >
              S'inscrire
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-white">ESSG</div>
                <div className="text-[11px] text-slate-500">Sciences Géomatiques</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {SITE.shortDescription}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Linkedin, href: SITE.social.linkedin },
                { Icon: Twitter, href: SITE.social.twitter },
                { Icon: Youtube, href: SITE.social.youtube },
                { Icon: Facebook, href: SITE.social.facebook },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors"
                  aria-label="Réseau social"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Formations</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('/formations')} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">Géomatique & Applications</button></li>
              <li><button onClick={() => navigate('/formations')} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">Géomatique & Management</button></li>
              <li><button onClick={() => navigate('/formations')} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">Informatique & Données</button></li>
              <li><button onClick={() => navigate('/formations')} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">Licence · Master · Doctorat</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.fullName}. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
