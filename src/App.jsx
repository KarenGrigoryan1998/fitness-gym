import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import TrainerBio from './components/TrainerBio';
import ResultsGallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import FloatingContactButtons from './components/FloatingContactButtons';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <TrainerBio />
        <ResultsGallery />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingContactButtons />
    </div>
  );
}

export default App;
