import { useTranslation } from 'react-i18next';
import { User, Flame, Dumbbell, Monitor, ChevronRight } from 'lucide-react';
import { gymConfig } from '../config/gym';

const iconMap = {
  User: User,
  Flame: Flame,
  Dumbbell: Dumbbell,
  Monitor: Monitor,
};

const Programs = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="programs" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymConfig.programs.map((program, index) => {
            const IconComponent = iconMap[program.icon] || Dumbbell;
            return (
              <div
                key={program.id}
                className="card-dark p-6 card-hover group cursor-pointer"
                onClick={handleWhatsApp}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                  <IconComponent className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {program.title[currentLang] || program.title.en}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4">
                  {program.description[currentLang] || program.description.en}
                </p>

                {/* CTA Link */}
                <div className="flex items-center text-primary-400 text-sm font-semibold group-hover:text-primary-300 transition-colors">
                  <span>{t('nav.startTraining')}</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
