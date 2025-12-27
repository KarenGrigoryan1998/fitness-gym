import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { gymConfig } from '../config/gym';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(gymConfig.whatsappMessage[currentLang] || gymConfig.whatsappMessage.en);
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: gymConfig.phone,
      href: `tel:${gymConfig.phone}`,
      gradient: 'from-primary-500/20 to-primary-600/20',
      iconColor: 'text-primary-400'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: 'WhatsApp',
      onClick: handleWhatsApp,
      gradient: 'from-accent-500/20 to-accent-600/20',
      iconColor: 'text-accent-400'
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: gymConfig.address[currentLang] || gymConfig.address.en,
      gradient: 'from-primary-500/20 to-accent-500/20',
      iconColor: 'text-primary-400'
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: gymConfig.workingHours[currentLang] || gymConfig.workingHours.en,
      gradient: 'from-accent-500/20 to-primary-500/20',
      iconColor: 'text-accent-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Component = item.href ? 'a' : item.onClick ? 'button' : 'div';
              const props = item.href 
                ? { href: item.href } 
                : item.onClick 
                  ? { onClick: item.onClick } 
                  : {};
              
              return (
                <Component
                  key={index}
                  {...props}
                  className={`flex items-start gap-4 p-5 card-dark ${item.href || item.onClick ? 'cursor-pointer' : ''} w-full text-left`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 mb-1">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </Component>
              );
            })}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-dark-700 h-[350px] lg:h-full min-h-[300px]">
            <iframe
              src={gymConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
