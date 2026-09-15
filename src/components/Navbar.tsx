import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Exploring', path: '/exploring' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center space-x-2.5 focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors text-sm sm:text-base">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              / AI Engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.06]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
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
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.06]'
                      : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

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
