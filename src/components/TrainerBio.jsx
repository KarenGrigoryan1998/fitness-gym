import { useTranslation } from 'react-i18next';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import { gymConfig } from '../config/gym';

const TrainerBio = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const trainer = gymConfig.trainer;

  return (
    <section id="trainer" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('trainer.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('trainer.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Trainer Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
              <img
                src={trainer.image}
                alt={trainer.name[currentLang] || trainer.name.en}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-dark-900/90 backdrop-blur-sm rounded-lg border border-dark-700">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <span className="text-white font-bold">{trainer.experience}</span>
                    <span className="text-dark-400 text-sm">{t('trainer.experience')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl -z-10 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl -z-10 opacity-30" />
          </div>

          {/* Trainer Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
              {trainer.name[currentLang] || trainer.name.en}
            </h3>
            <p className="text-primary-400 font-semibold text-lg mb-6">Personal Trainer & Coach</p>
            
            <p className="text-dark-300 leading-relaxed mb-8">
              {trainer.bio[currentLang] || trainer.bio.en}
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-400" />
                {t('trainer.certifications')}
              </h4>
              <div className="space-y-3">
                {(trainer.certifications[currentLang] || trainer.certifications.en).map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-dark-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-dark-800/50 rounded-xl border border-dark-700">
                <div className="text-2xl font-black gradient-text">{trainer.experience}</div>
                <div className="text-dark-400 text-xs mt-1">{t('trainer.experience')}</div>
              </div>
              <div className="text-center p-4 bg-dark-800/50 rounded-xl border border-dark-700">
                <div className="text-2xl font-black gradient-text">500+</div>
                <div className="text-dark-400 text-xs mt-1">{t('hero.badges.transformations')}</div>
              </div>
              <div className="text-center p-4 bg-dark-800/50 rounded-xl border border-dark-700">
                <div className="text-2xl font-black gradient-text">98%</div>
                <div className="text-dark-400 text-xs mt-1">{t('hero.badges.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerBio;
