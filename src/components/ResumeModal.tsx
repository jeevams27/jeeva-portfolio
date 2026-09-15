import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, EXPERIENCE_DATA } from '../data/portfolioData';
import {
  X,
  Download,
  Mail,
  FileText,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
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
    return `# JEEVA M S
**AI & GenAI Engineer** | Tamil Nadu, India
Email: ${PERSONAL_INFO.links.email} | GitHub: ${PERSONAL_INFO.links.github} | LinkedIn: ${PERSONAL_INFO.links.linkedin}

---

## PROFESSIONAL SUMMARY
AI & GenAI Engineer building practical applications with Large Language Models (LLMs), Multimodal Retrieval-Augmented Generation (RAG), AI agents, machine learning, and modern AI frameworks. B.Tech graduate in Artificial Intelligence & Data Science (May 2025).

---

## EDUCATION
- **B.Tech in Artificial Intelligence & Data Science** (Graduation: May 2025)

---

## TECHNICAL SKILLS
- **Generative AI & LLMs**: LLMs, Generative AI, Prompt Engineering, RAG, Embeddings, Vector Databases, AI Agents, LangChain, LangGraph
- **NLP / AI**: NLP, Transformers, Sentence Transformers, Cross-Encoders, Semantic Search
- **Machine Learning**: Scikit-learn, Decision Trees, Random Forest, AdaBoost, Ensemble Learning, K-Means, Hierarchical Clustering, EDA
- **Programming & DB**: Python, SQL, MySQL, PostgreSQL
- **Data & Tools**: Pandas, NumPy, Matplotlib, Power BI, Tableau, Streamlit, FastAPI, Docker, Git, GitHub, ChromaDB, RAGAS, Pydantic

---

## EXPERIENCE
### Analyst – AI / LLM Practice | Innodata
- Curated and prepared high-quality training and fine-tuning datasets for LLM and AI model evaluation.
- Conducted multimodal data annotation across image, audio, and video modalities following strict taxonomies.
- Developed and standardized comprehensive annotation guidelines to ensure dataset consistency.
- Executed AI model evaluation workflows and Quality Assurance (QA) validation loops.

---

## FEATURED PROJECTS
### 1. Equity Research Report Intelligence (Multimodal RAG / GenAI)
- Multi-document multimodal RAG assistant for analyzing complex equity research reports.
- Features: PyMuPDF, pdfplumber, Gemini Vision (tables & charts), Sentence Transformers, ChromaDB, Cross-Encoder reranking, Groq (Llama 3.3 70B), Streamlit.
- Live Demo: https://equity-research-report-intelligence-27.streamlit.app/
- GitHub: https://github.com/jeevams27/Equity-Research-Report-Intelligence

### 2. AI Resume Screener (Generative AI / NLP)
- AI-powered resume screening analyzing resumes against job descriptions with ATS scoring.
- Tech: Python, LangChain, Groq, Streamlit, NLP, LLMs.
- GitHub: https://github.com/jeevams27/Langchain-Resume-Screener

### 3. Energy-Usage-Monitoring-and-Management-System (ML / Data Analytics)
- Machine learning pipeline for temporal energy consumption analysis and anomaly detection.
- Tech: Python, Pandas, NumPy, Matplotlib, Scikit-learn.
- GitHub: https://github.com/jeevams27/Energy-Usage-Monitoring-and-Management-System
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const text = generateMarkdownResume();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Jeeva_M_S_AI_GenAI_Engineer_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d121e] border border-surface-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-surface-border pb-5 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae / Resume Preview</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-slate-300 text-sm font-mono">
            {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (.md)</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm border border-slate-700 transition-all font-mono"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.links.email}?subject=Requesting%20PDF%20Resume%20-%20Jeeva%20M%20S`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-surface-card hover:bg-slate-800 text-slate-300 text-xs sm:text-sm border border-surface-border transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Request Official PDF</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{PERSONAL_INFO.education.degree}</p>
                <p className="text-xs text-slate-400">{PERSONAL_INFO.education.focus}</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded">
                Graduation: May 2025
              </span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Experience</span>
            </h4>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{exp.role} — {exp.company}</p>
                  <span className="text-xs font-mono text-slate-400">{exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                  {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Key Projects</span>
            </h4>
            <div className="space-y-2">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>{proj.title}</span>
                    <span className="text-[10px] font-mono text-emerald-400">{proj.category}</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">{proj.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
