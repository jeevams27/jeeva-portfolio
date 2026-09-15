import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Systems', href: '#ai-systems' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'ai-systems', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center space-x-2.5 focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors text-sm sm:text-base">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              / AI Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.04]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <div className="h-3.5 w-[1px] bg-slate-800"></div>

            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/[0.08] text-xs font-medium transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onResumeClick}
              className="px-2.5 py-1 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-md font-medium"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-b border-white/[0.08] px-4 pt-3 pb-5 mt-2 shadow-2xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.05]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs"
              >
                <span>View Full Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
