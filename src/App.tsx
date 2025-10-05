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

function App() {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#terms') {
      setShowTerms(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#terms') {
        setShowTerms(true);
      } else {
        setShowTerms(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showTerms) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <TermsAndConditions />
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
