import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Check,
  Copy,
  Phone,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Jeeva,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-contact pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Connect & Collaborate
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Interested in discussing AI engineering roles, RAG pipelines, LLM agent development, or collaborative systems? Reach out anytime.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0a101d] border border-blue-500/25 space-y-3 shadow-[0_0_20px_rgba(59,130,246,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors break-all font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#100d1c] border border-purple-500/25 space-y-3 shadow-[0_0_20px_rgba(168,85,247,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">Phone Contact</span>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="block text-base sm:text-lg font-semibold text-white hover:text-purple-400 transition-colors font-mono"
              >
                +91 {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#090e18] border border-blue-500/20 hover:border-blue-500/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center space-x-2.5">
                  <Github className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span className="text-sm font-medium text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#100d1c] border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center space-x-2.5">
                  <Linkedin className="w-4 h-4 text-purple-400 group-hover:text-white" />
                  <span className="text-sm font-medium text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center space-x-2.5 text-xs text-slate-300 font-mono">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{PERSONAL_INFO.location} · Available for Remote & Onsite</span>
            </div>
          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#0d101a] border border-indigo-500/25 space-y-4 shadow-[0_0_30px_rgba(99,102,241,0.08)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-400">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-400">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-mono text-slate-400">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI / GenAI Engineering Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-400">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-xs text-emerald-300 flex items-center space-x-2 shadow-sm">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client opened with formatted details. Looking forward to speaking!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
