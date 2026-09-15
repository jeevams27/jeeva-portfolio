import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Download,
  ArrowRight,
  GraduationCap,
  Award,
} from 'lucide-react';

interface ExperiencePageProps {
  onResumeClick: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onResumeClick }) => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-experience pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Work History / 2025 – 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Experience
            </span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Industry background in AI/LLM data preparation, multimodal dataset curation, and quality consistency workflows.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-emerald-500/30 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative space-y-6">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    <span className="text-emerald-300 font-semibold">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>

                {/* Clean Statement */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
                  {exp.responsibilities[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Summary Strip */}
        <div className="pt-10 border-t border-white/[0.08] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Education & Professional Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Saveetha Engineering College (CGPA: {PERSONAL_INFO.education.cgpa}) · IBM & ExcelR Certified
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold shrink-0"
            >
              <span>View Background in About</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99]"
            >
              <span>View Full Resume Dialog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] text-xs sm:text-sm font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
