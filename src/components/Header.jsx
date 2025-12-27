import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Dumbbell, Globe } from 'lucide-react';
import { gymConfig } from '../config/gym';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'hy', label: 'ՀԱՅ' },
    { code: 'en', label: 'ENG' },
    { code: 'ru', label: 'РУС' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'programs', href: '#programs' },
    { key: 'trainer', href: '#trainer' },
    { key: 'results', href: '#results' },
    { key: 'contact', href: '#contact' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  const handleWhatsApp = () => {
    const currentLang = i18n.language;
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/95 backdrop-blur-md border-b border-dark-800' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {gymConfig.logo ? (
              <img
                src={gymConfig.logo}
                alt={`${gymConfig.name} logo`}
                className="w-10 h-10 rounded-xl object-contain bg-dark-900/50 border border-dark-700 p-1"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
            )}
            <span className="font-bold text-xl text-white">
              {gymConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-dark-300 font-medium transition-colors hover:text-primary-400"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{i18n.language}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-dark-700 rounded-lg shadow-xl py-2 min-w-[100px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-dark-700 transition-colors ${
                        i18n.language === lang.code ? 'text-primary-400 font-semibold' : 'text-dark-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="btn-primary"
            >
              {t('nav.startTraining')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark-900 border border-dark-700 rounded-2xl mt-2 p-6 animate-fade-in-down">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-dark-200 font-medium py-2 hover:text-primary-400 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            
            <div className="flex gap-2 mt-6 pt-6 border-t border-dark-700">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="btn-primary w-full mt-4"
            >
              {t('nav.startTraining')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
