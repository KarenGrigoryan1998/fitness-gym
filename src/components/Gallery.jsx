import { useTranslation } from 'react-i18next';
import { gymConfig } from '../config/gym';

const ResultsGallery = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="results" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-500/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t('results.title')}
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymConfig.resultsGallery.map((item) => (
            <div
              key={item.id}
              className="card-dark overflow-hidden group"
            >
              {/* Before/After Images */}
              <div className="relative aspect-[3/4]">
                {/* Before Image */}
                <div className="absolute inset-0 w-1/2">
                  <img
                    src={item.before}
                    alt={`${t('results.before')} - ${item.name[currentLang] || item.name.en}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-dark-900/80 rounded text-xs font-bold text-dark-300">
                    {t('results.before')}
                  </div>
                </div>
                
                {/* After Image */}
                <div className="absolute inset-0 left-1/2 w-1/2">
                  <img
                    src={item.after}
                    alt={`${t('results.after')} - ${item.name[currentLang] || item.name.en}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-accent-500/80 rounded text-xs font-bold text-white">
                    {t('results.after')}
                  </div>
                </div>

                {/* Center Divider */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2 z-10" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              </div>

              {/* Result Info */}
              <div className="p-4 text-center">
                <p className="text-white font-semibold mb-1">
                  {item.name[currentLang] || item.name.en}
                </p>
                <p className="text-primary-400 font-bold text-lg">
                  {item.result[currentLang] || item.result.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
