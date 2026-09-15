import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SKILL_TOPIC_DETAILS } from '../data/portfolioData';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Workflow,
  Sparkles,
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-skills pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
          <Link
            to="/skills"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Technical Skills</span>
          </Link>
          <span className="text-xs sm:text-sm font-mono text-purple-300 bg-purple-950/60 px-3.5 py-1 rounded-lg border border-purple-500/30 font-bold shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            {detail.category}
          </span>
        </div>

        {/* Topic Hero Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
            {detail.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {detail.tagline}
          </p>
        </div>

        {/* What I Use It For Section */}
        <section className="space-y-4 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
            <Brain className="w-4 h-4" />
            <span>What I Use It For</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Core Purpose & Practical Application
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {detail.whatIUseItFor}
          </p>
        </section>

        {/* Flowchart Architecture Pipeline */}
        <section className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
              <Workflow className="w-4 h-4" />
              <span>Flowchart Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Step-by-Step Pipeline Flow
            </h2>
          </div>

          {/* Visual Vertical Flowchart */}
          <div className="space-y-3.5">
            {detail.pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#0e101a] border border-purple-500/25 hover:border-purple-500/45 transition-all gap-3.5 shadow-sm"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <span className="w-8 h-8 rounded-lg bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-mono font-bold flex items-center justify-center shrink-0 shadow-sm">
                    0{idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Implementation */}
        <section className="space-y-4 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Engineering Details in My Code
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {detail.myPracticalImplementation}
          </p>
        </section>

        {/* Where I Used It / Project Link */}
        <section className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0c1017] to-indigo-950/40 border border-purple-500/30 space-y-5 shadow-[0_0_40px_rgba(168,85,247,0.12)]">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-wider font-bold">
            <FolderGit2 className="w-4 h-4" />
            <span>Real-World Implementation</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {detail.whereIUsedIt}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-normal">
                Inspect the full production implementation, architecture flow, and live demo.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-purple-500/25 shrink-0 active:scale-[0.99]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Technologies */}
        <section className="space-y-4 pt-10 border-t border-white/[0.08]">
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-400 font-bold">
            Related Technologies & Libraries
          </h2>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {detail.relatedTechnologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] text-xs sm:text-sm font-mono text-slate-200 border border-white/[0.08]"
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
