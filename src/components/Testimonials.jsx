import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';
import { gymConfig } from '../config/gym';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % gymConfig.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + gymConfig.testimonials.length) % gymConfig.testimonials.length);
  };

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {gymConfig.testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-dark p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
                  ))}
                </div>
                {testimonial.result && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-accent-500/20 rounded-full">
                    <TrendingUp className="w-3 h-3 text-accent-400" />
                    <span className="text-xs font-bold text-accent-400">{testimonial.result}</span>
                  </div>
                )}
              </div>
              
              <Quote className="w-8 h-8 text-dark-700 mb-4" />
              
              <p className="text-dark-300 mb-6 leading-relaxed text-sm">
                "{testimonial.text[currentLang] || testimonial.text.en}"
              </p>
              
              <div className="border-t border-dark-700 pt-4">
                <p className="font-semibold text-white">
                  {testimonial.name[currentLang] || testimonial.name.en}
                </p>
                <p className="text-sm text-primary-400">
                  {t('testimonials.clientLabel')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="card-dark p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                {[...Array(gymConfig.testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                ))}
              </div>
              {gymConfig.testimonials[currentIndex].result && (
                <div className="flex items-center gap-1 px-3 py-1 bg-accent-500/20 rounded-full">
                  <TrendingUp className="w-4 h-4 text-accent-400" />
                  <span className="text-sm font-bold text-accent-400">{gymConfig.testimonials[currentIndex].result}</span>
                </div>
              )}
            </div>
            
            <Quote className="w-10 h-10 text-dark-700 mb-6" />
            
            <p className="text-dark-300 mb-8 leading-relaxed">
              "{gymConfig.testimonials[currentIndex].text[currentLang] || gymConfig.testimonials[currentIndex].text.en}"
            </p>
            
            <div className="border-t border-dark-700 pt-6">
              <p className="font-semibold text-white text-lg">
                {gymConfig.testimonials[currentIndex].name[currentLang] || gymConfig.testimonials[currentIndex].name.en}
              </p>
              <p className="text-primary-400">
                {t('testimonials.clientLabel')}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-dark-800 border border-dark-700 hover:bg-dark-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex items-center gap-2">
              {gymConfig.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-dark-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-dark-800 border border-dark-700 hover:bg-dark-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
