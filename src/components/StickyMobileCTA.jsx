import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { gymConfig } from '../config/gym';

const StickyMobileCTA = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-dark-950/95 backdrop-blur-md border-t border-dark-800 p-4">
        <button
          onClick={handleWhatsApp}
          className="w-full btn-primary py-4 text-base"
        >
          <Play className="w-5 h-5 mr-2" />
          {t('sticky.startTraining')}
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
