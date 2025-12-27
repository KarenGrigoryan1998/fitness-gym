// ============================================
// FITNESS GYM CONFIGURATION
// Edit these values for each gym instance
// ============================================

export const gymConfig = {
  // Basic Info
  name: 'Your Gym Name',
  logo: '',
  
  // Contact Information
  phone: '+374 00 123 456',
  whatsapp: '+37400123456',
  email: 'info@yourgym.am',
  
  // Address
  address: {
    hy: 'Երևան, Ձեր հասցեն, փող. 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  
  // Working Hours
  workingHours: {
    hy: 'Երկ-Կիր: 07:00 - 22:00',
    en: 'Mon-Sun: 07:00 - 22:00',
    ru: 'Пн-Вс: 07:00 - 22:00'
  },
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com/yourgym',
    facebook: 'https://facebook.com/yourgym',
    youtube: 'https://youtube.com/@yourgym',
  },
  
  // Google Maps Embed URL (replace with your gym's location)
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8830123456789!2d44.5!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzQ4LjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890',
  
  // WhatsApp message template
  whatsappMessage: {
    hy: 'Բարև, ցանկանում եմ ամրագրել անվճար խորհրդատվություն մարզումների վերաբերյալ',
    en: 'Hello, I would like to book a training session',
    ru: 'Здравствуйте, я хотел бы записаться на тренировку'
  },
  
  // Trainer Info
  trainer: {
    name: {
      hy: 'Ձեր մարզիչի անունը',
      en: 'Your Trainer Name',
      ru: 'Имя Тренера'
    },
    experience: '10+',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=600&fit=crop&crop=face',
    certifications: {
      hy: ['Սերտիֆիկացված անձնական մարզիչ', 'Սպորտային սննդաբանության մասնագետ', 'Ուժային պատրաստվածություն'],
      en: ['Certified Personal Trainer', 'Sports Nutrition Specialist', 'Strength & Conditioning'],
      ru: ['Сертифицированный персональный тренер', 'Специалист по спортивному питанию', 'Силовая подготовка']
    },
    bio: {
      hy: 'Ես օգնում եմ մարդկանց նիհարել, ուժեղանալ և ձեռք բերել վստահություն՝ անհատական ծրագրերի և ճիշտ ուղեցույցի միջոցով։',
      en: 'Dedicated fitness professional with over 10 years of experience helping clients achieve their health and fitness goals. My approach combines proven training methods with personalized nutrition guidance.',
      ru: 'Преданный фитнес-профессионал с более чем 10-летним опытом помощи клиентам в достижении их целей в области здоровья и фитнеса.'
    }
  },
  
  // Programs
  programs: [
    {
      id: 'personal',
      icon: 'User',
      title: {
        hy: 'Անհատական մարզում',
        en: 'Personal Training',
        ru: 'Персональные тренировки'
      },
      description: {
        hy: 'Մարզում 1-ը-1՝ հարմարեցված քո նպատակներին, մակարդակին և գրաֆիկին։',
        en: 'One-on-one sessions tailored to your specific goals and fitness level.',
        ru: 'Индивидуальные занятия, адаптированные к вашим целям и уровню подготовки.'
      }
    },
    {
      id: 'weightloss',
      icon: 'Flame',
      title: {
        hy: 'Քաշի նվազեցում',
        en: 'Weight Loss Programs',
        ru: 'Программы похудения'
      },
      description: {
        hy: 'Ճարպայրող մարզումներ + սննդակարգ՝ չափելի և կայուն արդյունքի համար։',
        en: 'Effective fat-burning workouts combined with nutrition plans for lasting results.',
        ru: 'Эффективные жиросжигающие тренировки в сочетании с планами питания.'
      }
    },
    {
      id: 'muscle',
      icon: 'Dumbbell',
      title: {
        hy: 'Մկանային զանգված և ուժ',
        en: 'Muscle Gain & Strength',
        ru: 'Набор мышц и силы'
      },
      description: {
        hy: 'Ուժային ծրագիր՝ մկանների աճի և ֆունկցիոնալ ուժի բարձրացման համար։',
        en: 'Build lean muscle mass and increase your strength with proven techniques.',
        ru: 'Наращивайте мышечную массу и увеличивайте силу с проверенными методами.'
      }
    },
    {
      id: 'online',
      icon: 'Monitor',
      title: {
        hy: 'Օնլայն քոուչինգ',
        en: 'Online Coaching',
        ru: 'Онлайн тренировки'
      },
      description: {
        hy: 'Անհատական ծրագիր, վիդեո ուղեցույցներ և առաջընթացի վերահսկում՝ օնլայն։',
        en: 'Train from anywhere with personalized video coaching and progress tracking.',
        ru: 'Тренируйтесь откуда угодно с персональным видео-коучингом.'
      }
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: {
        hy: 'Արմեն Ա․',
        en: 'Armen A.',
        ru: 'Армен А.'
      },
      text: {
        hy: '4 ամսում նվազեցրի 15 կգ։ Մոտեցումը պրոֆեսիոնալ է, իսկ մոտիվացիան՝ միշտ բարձր։',
        en: 'Lost 15kg in 4 months! The trainer\'s approach is professional and motivating. Best decision I ever made.',
        ru: 'Сбросил 15кг за 4 месяца! Подход тренера профессиональный и мотивирующий. Лучшее решение в моей жизни.'
      },
      rating: 5,
      result: '-15kg'
    },
    {
      id: 2,
      name: {
        hy: 'Նարինե Ն․',
        en: 'Narine N.',
        ru: 'Нарине Н.'
      },
      text: {
        hy: 'Վերջապես գտա մարզիչ, ով հասկանում է իմ նպատակը։ Արդյունքները տեսանելի են արդեն առաջին շաբաթներից։',
        en: 'Finally found a trainer who understands my goals. Gained muscle and confidence. Highly recommend!',
        ru: 'Наконец нашла тренера, который понимает мои цели. Набрала мышцы и уверенность. Очень рекомендую!'
      },
      rating: 5,
      result: '+8kg muscle'
    },
    {
      id: 3,
      name: {
        hy: 'Գևորգ Գ․',
        en: 'Gevorg G.',
        ru: 'Геворг Г.'
      },
      text: {
        hy: 'Օնլայն քոուչինգը շատ հարմար է։ Տանը մարզվելով՝ կարողացա ստանալ իրական արդյունք։',
        en: 'The online coaching program is incredible. Even from home, I achieved results I never thought possible.',
        ru: 'Программа онлайн-коучинга невероятна. Даже из дома я достиг результатов, о которых не мечтал.'
      },
      rating: 5,
      result: 'Complete transformation'
    },
    {
      id: 4,
      name: {
        hy: 'Լիլիթ Լ․',
        en: 'Lilit L.',
        ru: 'Лилит Л.'
      },
      text: {
        hy: 'Տարիներ շարունակ տարբեր դիետաներ փորձեցի, բայց միայն այս ծրագրով ստացա կայուն արդյունք։',
        en: 'After years of failed diets, this program finally worked. The support and accountability made all the difference.',
        ru: 'После многих лет неудачных диет эта программа наконец сработала. Поддержка сделала всё.'
      },
      rating: 5,
      result: '-20kg'
    },
    {
      id: 5,
      name: {
        hy: 'Հայկ Հ․',
        en: 'Hayk H.',
        ru: 'Айк А.'
      },
      text: {
        hy: '3 ամսում ուժս աճեց մոտ 40%-ով։ Անհատական մոտեցումը իրոք աշխատում է։',
        en: 'Strength increased by 40% in just 3 months. The personalized approach really works!',
        ru: 'Сила увеличилась на 40% всего за 3 месяца. Персональный подход действительно работает!'
      },
      rating: 5,
      result: '+40% strength'
    }
  ],
  
  // Results Gallery (Before/After)
  resultsGallery: [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
      name: { hy: 'Հաճախորդ 1', en: 'Client 1', ru: 'Клиент 1' },
      result: { hy: '-20 կգ', en: '-20 kg', ru: '-20 кг' }
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=500&fit=crop',
      name: { hy: 'Հաճախորդ 2', en: 'Client 2', ru: 'Клиент 2' },
      result: { hy: '+10 կգ մկան', en: '+10 kg muscle', ru: '+10 кг мышц' }
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop',
      name: { hy: 'Հաճախորդ 3', en: 'Client 3', ru: 'Клиент 3' },
      result: { hy: 'Ամբողջական փոխակերպում', en: 'Total transformation', ru: 'Полная трансформация' }
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=500&fit=crop',
      name: { hy: 'Հաճախորդ 4', en: 'Client 4', ru: 'Клиент 4' },
      result: { hy: '-15 կգ', en: '-15 kg', ru: '-15 кг' }
    }
  ]
};

export default gymConfig;
