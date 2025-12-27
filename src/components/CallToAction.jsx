import { useTranslation } from 'react-i18next';
import { MessageCircle, Sparkles } from 'lucide-react';
import { gymConfig } from '../config/gym';

const CallToAction = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-dark-900 to-accent-600/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-400">{t('cta.freeConsultation')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            {t('cta.title')}
          </h2>
          
          <p className="text-dark-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-dark-900 bg-gradient-to-r from-accent-400 to-accent-500 rounded-xl hover:from-accent-300 hover:to-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            {t('cta.button')}
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-dark-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span>{t('cta.trust.noCommitment')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span>{t('cta.trust.fastResponse')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span>{t('cta.trust.free')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
