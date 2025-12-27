import { useTranslation } from 'react-i18next';
import { Phone, Dumbbell, ChevronRight, Play } from 'lucide-react';
import { gymConfig } from '../config/gym';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50" />
      </div>

      {/* Gradient Accent Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-500/15 rounded-full filter blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-8 animate-fade-in-up">
            <Dumbbell className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">{t('hero.topBadge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 animate-fade-in-up leading-tight">
            {t('hero.headline').split(' ').map((word, i) => (
              <span key={i} className={i === 1 || i === 2 ? 'gradient-text' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleWhatsApp}
              className="btn-primary text-base px-8 py-4 group"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.startTraining')}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href={`tel:${gymConfig.phone}`}
              className="btn-secondary text-base px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.callNow')}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black gradient-text">10+</div>
            <div className="text-dark-400 text-sm mt-1">{t('hero.badges.yearsExperience')}</div>
          </div>
          <div className="text-center border-x border-dark-700">
            <div className="text-3xl md:text-5xl font-black gradient-text">500+</div>
            <div className="text-dark-400 text-sm mt-1">{t('hero.badges.transformations')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black gradient-text">98%</div>
            <div className="text-dark-400 text-sm mt-1">{t('hero.badges.satisfaction')}</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
};

export default Hero;
