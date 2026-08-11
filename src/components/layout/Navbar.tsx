import { useEffect, useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/data/site';
import { useRouter } from '@/lib/router';

export function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'FR' | 'EN'>('FR');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  const handleNav = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  const isActive = (linkPath: string) =>
    linkPath === '/' ? path === '/' : path.startsWith(linkPath);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-ink text-slate-300 text-xs">
        <div className="container-page flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span>{SITE.address}</span>
            <span className="text-slate-500">|</span>
            <span>{SITE.hours}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang}
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft border-b border-slate-200/70'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <button onClick={() => handleNav('/')} className="flex items-center gap-3 group shrink-0">
              <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                <Globe className="h-6 w-6 text-white" />
                <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-accent-500 border-2 border-white" />
              </div>
              <div className="text-left">
                <div className="font-display font-extrabold text-lg text-slate-900 leading-none tracking-tight">ESSG</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:block">Sciences Géomatiques</div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600" />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav('/admission')}
                className="inline-flex items-center h-10 px-5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 shadow-soft hover:shadow-lift transition-all"
              >
                S'inscrire
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 -mr-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 animate-fade-in">
            <nav className="container-page py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('/admission')}
                className="mt-2 inline-flex items-center justify-center h-12 px-5 rounded-full bg-brand-600 text-white text-sm font-semibold"
              >
                S'inscrire à l'ESSG
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
