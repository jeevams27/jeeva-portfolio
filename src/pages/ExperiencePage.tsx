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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work History</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Professional Experience
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Industry experience in AI model dataset annotation, multimodal labeling pipelines, and quality consistency assurance.
        </p>
      </div>

      {/* Main Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="relative space-y-6">
            {/* Timeline Indicator Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-emerald-400"></div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1017] border border-white/[0.08] space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="flex items-center space-x-1.5 text-white font-medium">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{exp.company}</span>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center space-x-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Verified Responsibility */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Scope of Responsibility
                </span>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </div>

              {/* Key Competencies & Impact summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] space-y-1">
                  <span className="text-[11px] font-mono text-emerald-400">Domain</span>
                  <p className="text-xs text-slate-300 font-medium">AI / LLM Data Practice</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] space-y-1">
                  <span className="text-[11px] font-mono text-emerald-400">Modality</span>
                  <p className="text-xs text-slate-300 font-medium">Image, Audio & Video</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] space-y-1">
                  <span className="text-[11px] font-mono text-emerald-400">Quality Standard</span>
                  <p className="text-xs text-slate-300 font-medium">Guidelines & Consistency</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Credentials Summary Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Academic Background & Certifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              B.Tech in Artificial Intelligence & Data Science (Saveetha Engineering College, CGPA: {PERSONAL_INFO.education.cgpa})
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300"
          >
            <span>View Full Details in About</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onResumeClick}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
          >
            <span>View Full Resume Dialog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Jeeva_MS_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.08] text-xs sm:text-sm transition-all"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
