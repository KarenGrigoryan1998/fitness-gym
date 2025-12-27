import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart, Dumbbell } from 'lucide-react';
import { gymConfig } from '../config/gym';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'programs', href: '#programs' },
    { key: 'trainer', href: '#trainer' },
    { key: 'results', href: '#results' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              {gymConfig.logo ? (
                <img
                  src={gymConfig.logo}
                  alt={`${gymConfig.name} logo`}
                  className="w-10 h-10 rounded-xl object-contain bg-dark-800 border border-dark-700 p-1"
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
            <p className="text-dark-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {gymConfig.social.instagram && (
                <a
                  href={gymConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {gymConfig.social.facebook && (
                <a
                  href={gymConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {gymConfig.social.youtube && (
                <a
                  href={gymConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">{t('contact.title')}</h4>
            <div className="space-y-4">
              <a
                href={`tel:${gymConfig.phone}`}
                className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-400" />
                {gymConfig.phone}
              </a>
              <a
                href={`mailto:${gymConfig.email}`}
                className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-400" />
                {gymConfig.email}
              </a>
              <div className="flex items-start gap-3 text-dark-400">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{gymConfig.address[currentLang] || gymConfig.address.en}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} {gymConfig.name}. {t('footer.rights')}
            </p>
            <p className="text-dark-500 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart className="w-4 h-4 text-primary-500 fill-primary-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
