import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Sitemap from './components/Sitemap';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy' | 'sitemap'>('home');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#terms') {
      setCurrentPage('terms');
    } else if (hash === '#privacy') {
      setCurrentPage('privacy');
    } else if (hash === '#sitemap') {
      setCurrentPage('sitemap');
    } else {
      setCurrentPage('home');
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#terms') {
        setCurrentPage('terms');
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#sitemap') {
        setCurrentPage('sitemap');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <TermsAndConditions />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'sitemap') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Sitemap />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
