import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import { gymConfig } from '../config/gym';

const FloatingContactButtons = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${gymConfig.phone}`}
        aria-label={t('contact.phone')}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg ring-1 ring-black/10 transition-all duration-300 motion-safe:animate-scale-in hover:-translate-y-0.5 hover:scale-105 hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        style={{ animationDelay: '0ms' }}
      >
        <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>

      <button
        type="button"
        onClick={handleWhatsApp}
        aria-label={t('contact.whatsapp')}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg ring-1 ring-black/10 transition-all duration-300 motion-safe:animate-scale-in hover:-translate-y-0.5 hover:scale-105 hover:bg-accent-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
        style={{ animationDelay: '120ms' }}
      >
        <span className="absolute inset-0 rounded-full bg-accent-600 opacity-35 blur-md motion-safe:animate-pulse" />
        <MessageCircle className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  );
};

export default FloatingContactButtons;
