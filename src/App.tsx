import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { AIEngineeringSection } from './components/AIEngineeringSection';
import { Experience } from './components/Experience';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Skills } from './components/Skills';
import { ResumeCTA } from './components/ResumeCTA';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Interactive Subtle Background Canvas */}
      <BackgroundCanvas />

      {/* Main Foreground Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Navbar onResumeClick={handleOpenResume} />

        {/* Content Sections */}
        <main className="flex-grow">
          <Hero onResumeClick={handleOpenResume} />
          <About />
          <Projects />
          <AIEngineeringSection />
          <Experience />
          <CurrentlyExploring />
          <Skills />
          <ResumeCTA
            onResumeClick={handleOpenResume}
            onContactClick={handleScrollToContact}
          />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Global Resume Dialog */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
