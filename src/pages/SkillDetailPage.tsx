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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <Link
          to="/skills"
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Technical Skills</span>
        </Link>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
          {detail.category}
        </span>
      </div>

      {/* Topic Hero Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          {detail.name}
        </h1>
        <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl font-normal">
          {detail.tagline}
        </p>
      </div>

      {/* Editorial Explanation & Practical Implementation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1017] border border-white/[0.08] space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center space-x-1.5">
            <Brain className="w-3.5 h-3.5" />
            <span>What I Use It For</span>
          </span>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {detail.whatIUseItFor}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1017] border border-white/[0.08] space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Implementation</span>
          </span>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {detail.myPracticalImplementation}
          </p>
        </div>
      </div>

      {/* Step-by-Step Architecture Pipeline */}
      <div className="space-y-6 pt-4 border-t border-white/[0.06]">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Pipeline Architecture</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How I Architect This in Code
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {detail.pipelineSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] space-y-2.5"
            >
              <span className="text-xs font-mono text-emerald-400 font-bold">
                0{idx + 1}
              </span>
              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Where I Used It / Project Link */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-[#0c1017] to-[#0c1017] border border-emerald-500/20 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Real-World Implementation</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {detail.whereIUsedIt}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Inspect the end-to-end case study, problem statement, and live deployment.
            </p>
          </div>
          <Link
            to={`/projects/${detail.relatedProjectSlug}`}
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shrink-0"
          >
            <span>View Project Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Related Technologies */}
      <div className="space-y-3 pt-4 border-t border-white/[0.06]">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Related Technologies & Libraries
        </h3>
        <div className="flex flex-wrap gap-2">
          {detail.relatedTechnologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md bg-white/[0.03] text-xs font-mono text-slate-200 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
