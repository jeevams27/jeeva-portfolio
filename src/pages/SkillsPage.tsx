import React from 'react';

export const SkillsPage: React.FC = () => {
  const categoriesData = [
    {
      categoryName: 'PROGRAMMING',
      color: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
      borderColor: 'border-emerald-500/25',
      skills: [
        { name: 'Python', slug: null },
        { name: 'SQL', slug: null },
      ],
    },
    {
      categoryName: 'GENERATIVE AI & LLMs',
      color: 'text-purple-400',
      dotColor: 'bg-purple-400',
      borderColor: 'border-purple-500/25',
      skills: [
        { name: 'LLMs', slug: 'llms' },
        { name: 'RAG', slug: 'rag' },
        { name: 'Multimodal RAG', slug: 'rag' },
        { name: 'Prompt Engineering', slug: null },
        { name: 'LangChain', slug: 'llms' },
        { name: 'LCEL', slug: 'llms' },
        { name: 'LangGraph', slug: 'langgraph' },
        { name: 'ChromaDB', slug: 'rag' },
        { name: 'Groq API', slug: 'llms' },
        { name: 'Agentic AI', slug: 'langgraph' },
      ],
    },
    {
      categoryName: 'MACHINE LEARNING',
      color: 'text-blue-400',
      dotColor: 'bg-blue-400',
      borderColor: 'border-blue-500/25',
      skills: [
        { name: 'Machine Learning', slug: 'machine-learning' },
        { name: 'Linear Regression', slug: null },
        { name: 'Logistic Regression', slug: null },
        { name: 'Decision Tree', slug: null },
        { name: 'Random Forest', slug: 'machine-learning' },
        { name: 'Model Evaluation', slug: null },
      ],
    },
    {
      categoryName: 'DATA SCIENCE & ANALYTICS',
      color: 'text-teal-400',
      dotColor: 'bg-teal-400',
      borderColor: 'border-teal-500/25',
      skills: [
        { name: 'Pandas', slug: null },
        { name: 'NumPy', slug: null },
        { name: 'Scikit-learn', slug: 'machine-learning' },
        { name: 'EDA', slug: 'machine-learning' },
        { name: 'Data Preprocessing', slug: null },
        { name: 'Feature Engineering', slug: 'machine-learning' },
      ],
    },
    {
      categoryName: 'TOOLS & EVALUATION',
      color: 'text-amber-400',
      dotColor: 'bg-amber-400',
      borderColor: 'border-amber-500/25',
      skills: [
        { name: 'RAGAS', slug: 'rag' },
        { name: 'LLM-as-Judge', slug: 'llms' },
        { name: 'Pydantic', slug: 'llms' },
        { name: 'Streamlit', slug: null },
        { name: 'Docker', slug: null },
        { name: 'FastAPI', slug: null },
        { name: 'Git', slug: null },
        { name: 'GitHub', slug: null },
      ],
    },
  ];

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-skills pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Page Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
              Skills & Stack
            </span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            Core competencies across Generative AI, RAG pipelines, agentic orchestration, machine learning models, and production evaluation frameworks.
          </p>
        </div>

        {/* Clean Editorial Technical Profile Layout */}
        <div className="space-y-14 sm:space-y-16">
          {categoriesData.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`}></span>
                <h2 className={`text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest uppercase ${cat.color}`}>
                  {cat.categoryName}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-mono bg-white/[0.03] text-slate-200 border border-white/[0.06] font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
