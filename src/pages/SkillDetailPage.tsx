import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SKILL_TOPIC_DETAILS } from '../data/portfolioData';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Workflow,
  Sparkles,
  Layers,
  FolderGit2,
} from 'lucide-react';

export const SkillDetailPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const normalizedId = topicId?.toLowerCase();

  const detail = normalizedId ? SKILL_TOPIC_DETAILS[normalizedId] : undefined;

  if (!detail) {
    return <Navigate to="/skills" replace />;
  }

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-skills pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <Link
            to="/skills"
            className="inline-flex items-center space-x-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Technical Skills</span>
          </Link>
          <span className="text-xs font-mono text-purple-300 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/30 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.15)]">
            {detail.category}
          </span>
        </div>

        {/* Topic Hero Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {detail.name}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl font-normal">
            {detail.tagline}
          </p>
        </div>

        {/* What I Use It For Section (Clean Typography Layout) */}
        <section className="space-y-4 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>What I Use It For</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Purpose & Practical Application
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {detail.whatIUseItFor}
          </p>
        </section>

        {/* Flowchart Architecture Pipeline */}
        <section className="space-y-8 pt-8 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Flowchart Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Step-by-Step Pipeline Flow
            </h2>
          </div>

          {/* Visual Vertical / Horizontal Flowchart */}
          <div className="space-y-3">
            {detail.pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-[#0e101a] border border-purple-500/20 hover:border-purple-500/40 transition-all gap-4"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <span className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold flex items-center justify-center shrink-0 shadow-sm">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Implementation */}
        <section className="space-y-4 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Details in My Code
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {detail.myPracticalImplementation}
          </p>
        </section>

        {/* Where I Used It / Project Link */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-950/30 via-[#0c1017] to-indigo-950/30 border border-purple-500/30 space-y-4 shadow-[0_0_35px_rgba(168,85,247,0.1)]">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real-World Implementation</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {detail.whereIUsedIt}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Inspect the full production case study, architecture flow, and live demo.
              </p>
            </div>
            <Link
              to={`/projects/${detail.relatedProjectSlug}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-purple-500/25 shrink-0 active:scale-[0.99]"
            >
              <span>View Project Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Related Technologies */}
        <section className="space-y-4 pt-8 border-t border-white/[0.08]">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            Related Technologies & Libraries
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {detail.relatedTechnologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] text-xs font-mono text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
