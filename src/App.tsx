import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { SkillDetailPage } from './pages/SkillDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ExploringPage } from './pages/ExploringPage';
import { ExploringDetailPage } from './pages/ExploringDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#07090e] text-slate-200 relative selection:bg-emerald-500/20 selection:text-emerald-300 flex flex-col justify-between font-sans">
        {/* Interactive Subtle Background Canvas */}
        <BackgroundCanvas />

        {/* Main Foreground Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Sticky Global Navigation Bar */}
          <Navbar onResumeClick={handleOpenResume} />

          {/* Dynamic Page Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onResumeClick={handleOpenResume} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/skills/:topicId" element={<SkillDetailPage />} />
              <Route path="/experience" element={<ExperiencePage onResumeClick={handleOpenResume} />} />
              <Route path="/exploring" element={<ExploringPage />} />
              <Route path="/exploring/:topicId" element={<ExploringDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>

        {/* Global Resume Dialog Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
