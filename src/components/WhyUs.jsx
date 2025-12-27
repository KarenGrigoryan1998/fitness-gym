import { useTranslation } from 'react-i18next';
import { Award, User, TrendingUp, Calendar, Dumbbell } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      key: 'certified',
      icon: Award,
      gradient: 'from-primary-500/20 to-primary-600/20',
      iconColor: 'text-primary-400'
    },
    {
      key: 'individual',
      icon: User,
      gradient: 'from-accent-500/20 to-accent-600/20',
      iconColor: 'text-accent-400'
    },
    {
      key: 'results',
      icon: TrendingUp,
      gradient: 'from-primary-500/20 to-accent-500/20',
      iconColor: 'text-primary-400'
    },
    {
      key: 'flexible',
      icon: Calendar,
      gradient: 'from-accent-500/20 to-primary-500/20',
      iconColor: 'text-accent-400'
    },
    {
      key: 'equipment',
      icon: Dumbbell,
      gradient: 'from-primary-500/20 to-primary-600/20',
      iconColor: 'text-primary-400'
    }
  ];

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className={`card-dark p-6 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${reason.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(`whyUs.${reason.key}.title`)}
                </h3>
                <p className="text-dark-400 leading-relaxed text-sm">
                  {t(`whyUs.${reason.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
