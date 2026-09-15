import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import {
  X,
  Download,
  Mail,
  Copy,
  Check,
  GraduationCap,
  Award,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const generateMarkdownResume = () => {
    return `# JEEVA MS
Phone: +91 ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.links.linkedin} | GitHub: ${PERSONAL_INFO.links.github}
Role: AI & GenAI Engineer

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

---

## EDUCATION
B.Tech — Artificial Intelligence & Data Science (2021 – 2025)
Saveetha Engineering College, Chennai | CGPA: 7.6

---

## CERTIFICATIONS
- IBM Data Science Professional Certificate — Coursera / IBM
- Data Analyst Certification — ExcelR

---

## EXPERIENCE
Analyst – AI / LLM Practice | Innodata (Noida, India · Remote) | 29 May 2026 – 17 August 2026
- Annotated image, audio, and video data for multiple AI/LLM models by following detailed annotation guidelines and maintaining consistency and quality across datasets.

---

## FEATURED PROJECTS
1. Equity Research Report Intelligence System - Multimodal RAG
- Production-style multimodal RAG system ingesting equity research PDFs with exact source citations across text, tables, and charts.
- Solved cross-document retrieval bias with a two-stage pipeline: bi-encoder retrieves 50 candidates, neural cross-encoder rescores top 5.
- Multi-document management with metadata filtering in ChromaDB; deployed on Streamlit & Docker.

2. AI Resume Screener
- End-to-end resume screening pipeline using LangChain LCEL and Groq-hosted LLM with Pydantic output validation.

3. Energy-Usage-Monitoring-and-Management-System
- Machine learning pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption patterns.
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/85 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-[#0a0e17] border border-white/[0.08] rounded-3xl shadow-2xl p-6 sm:p-10 space-y-7 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-full border border-white/[0.06] transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-4 border-b border-white/[0.06] pb-6 pr-10">
          <div className="flex items-center space-x-2 text-sm font-mono text-emerald-400 uppercase tracking-wider font-bold">
            <span>Official Curriculum Vitae</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-mono mt-1">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.location} • +91 {PERSONAL_INFO.phone}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-500/20"
            >
              <Download className="w-4 h-4 sm:w-5 h-5" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 text-sm sm:text-base border border-white/[0.08] transition-all font-mono font-medium"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Plaintext'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20AI%20Engineering%20Role%20-%20Jeeva%20MS`}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white text-sm sm:text-base border border-white/[0.06] transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 text-slate-300">
          {/* Summary */}
          <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Professional Summary
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center space-x-2 font-bold">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </h4>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-bold text-white text-base sm:text-lg">{PERSONAL_INFO.education.institution}</p>
                <p className="text-sm sm:text-base text-slate-300">{PERSONAL_INFO.education.degree}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs sm:text-sm font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30 font-bold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
                <span className="text-xs sm:text-sm font-mono text-slate-400">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center space-x-2 font-bold">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <p className="font-bold text-white text-sm sm:text-base">{cert.title}</p>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 font-medium">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
              Featured Projects
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span className="text-base sm:text-lg font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30 font-bold">
                      {proj.category}
                    </span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 text-sm sm:text-base pl-1">
                    {proj.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};