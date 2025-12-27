# Fitness Gym Landing Page

A modern, high-conversion landing page for fitness trainers and gyms built with React.js and Tailwind CSS.

## Features

- **Energetic Dark Design**: Dark background with orange/green gradient accents
- **Multi-language Support**: Armenian (default), English, Russian with language switcher
- **Mobile-First**: Fully responsive design optimized for all devices
- **Sticky Mobile CTA**: "Start Training" button always visible on mobile
- **Smooth Animations**: Lightweight, modern motion
- **SEO-Friendly**: Meta tags and semantic structure
- **Fast Loading**: Vite + optimized assets
- **Lead Generation**: WhatsApp and phone call CTAs throughout

## Sections

1. **Hero** - Powerful headline + CTAs (Start Training, Call Now) + stats
2. **Programs** - Personal Training, Weight Loss, Muscle Gain, Online Coaching
3. **Why Train With Us** - Certified trainer, individual approach, real results, flexible schedule, modern equipment
4. **Trainer Bio** - Photo, experience, certifications, bio
5. **Results Gallery** - Before/After transformation images
6. **Testimonials** - Client reviews with results achieved
7. **Call to Action** - Free consultation offer
8. **Contact** - Phone, WhatsApp, address, working hours, Google Maps

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Customization

Edit the `src/config/clinic.js` file to customize:

- Clinic name and branding
- Phone number, WhatsApp, email
- Address and working hours (per-language)
- Social media links
- Google Maps embed URL
- Doctors
- Testimonials
- Gallery images

### Example Configuration

```javascript
export const clinicConfig = {
  name: 'Your Dental Clinic',
  phone: '+374 77 316 566',
  whatsapp: '+37477316566',
  address: {
    hy: 'Երևան, Ձեր հասցեն, փող. 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  // ... more options
};
```

## Creating a New Clinic Instance

To create a landing page for a new clinic:

1. Duplicate the entire project folder
2. Update `src/config/clinic.js` with the new clinic's information
3. Update translations (optional) in `src/i18n/translations.js`
4. Update meta tags in `index.html`
5. Deploy

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Lucide React** - Icons

## Project Structure

```
dental-clinic/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Doctors.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── clinic.js      # ⭐ Main configuration file
│   ├── i18n/
│   │   ├── index.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

MIT
