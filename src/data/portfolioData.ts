import {
  Project,
  SkillCategory,
  SkillTopicDetail,
  ExploringTopicDetail,
  ExperienceItem,
  Certification,
  PipelineStage,
  ExploringItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'JEEVA MS',
  role: 'AI & GenAI Engineer',
  tagline: 'Building Intelligent Systems with LLMs, RAG & AI',
  phone: '9360754240',
  email: 'jevams2711@gmail.com',
  location: 'Chennai, TN',
  status: 'Open to AI / GenAI Engineering Opportunities',
  resumeUrl: '/Jeeva_MS_Resume.pdf',
  bio: 'Artificial Intelligence and Data Science graduate with hands-on experience in Python, Machine Learning, Generative AI, LLMs, and RAG. Experienced in developing AI applications using LangChain, LangGraph, ChromaDB and Streamlit, with exposure to prompt engineering, document processing, retrieval, and model evaluation.',
  aboutDetails: `I am an Artificial Intelligence and Data Science graduate (2021 – 2025) from Saveetha Engineering College, Chennai (CGPA: 7.6) with hands-on engineering experience in Python, Machine Learning, Generative AI, LLMs, and RAG pipelines. I specialize in building practical AI applications using modern frameworks like LangChain, LangGraph, ChromaDB, and Streamlit. My focus is on robust document processing, two-stage vector retrieval with cross-encoder reranking, agentic orchestration, and model evaluation (RAGAS, LLM-as-Judge) with type-safe schema validation.`,
  education: {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Saveetha Engineering College, Chennai',
    period: '2021 – 2025',
    cgpa: '7.6',
  },
  certifications: [
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'Coursera / IBM',
    },
    {
      title: 'Data Analyst Certification',
      issuer: 'ExcelR',
    },
  ] as Certification[],
  links: {
    github: 'https://github.com/jeevams27',
    linkedin: 'https://www.linkedin.com/in/jeeva-ms-0a22812ba/',
    email: 'jevams2711@gmail.com',
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'genai',
    name: 'Generative AI & LLMs',
    icon: 'Sparkles',
    description: 'Large language models, prompt engineering, RAG, and agentic frameworks',
    skills: [
      { name: 'LLMs', highlight: true, slug: 'llms' },
      { name: 'Prompt Engineering', highlight: false },
      { name: 'RAG', highlight: true, slug: 'rag' },
      { name: 'Multimodal RAG', highlight: true, slug: 'rag' },
      { name: 'Agentic AI', highlight: true, slug: 'langgraph' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Vector DB',
    icon: 'Brain',
    description: 'LLM orchestration, vector databases, and high-performance inference APIs',
    skills: [
      { name: 'LangChain', highlight: true, slug: 'llms' },
      { name: 'LCEL', highlight: true, slug: 'llms' },
      { name: 'LangGraph', highlight: true, slug: 'langgraph' },
      { name: 'ChromaDB', highlight: true, slug: 'rag' },
      { name: 'Groq API', highlight: true, slug: 'llms' },
    ],
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: 'Cpu',
    description: 'Statistical modeling, regression, tree ensembles, and validation',
    skills: [
      { name: 'Machine Learning', highlight: true, slug: 'machine-learning' },
      { name: 'Linear Regression', highlight: false },
      { name: 'Logistic Regression', highlight: false },
      { name: 'Decision Tree', highlight: false },
      { name: 'Random Forest', highlight: true, slug: 'machine-learning' },
      { name: 'Model Evaluation', highlight: true },
    ],
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    icon: 'Database',
    description: 'Data transformation, EDA, feature engineering, and computing',
    skills: [
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Scikit-learn', highlight: true, slug: 'machine-learning' },
      { name: 'EDA', highlight: true, slug: 'machine-learning' },
      { name: 'Data Preprocessing', highlight: false },
      { name: 'Feature Engineering', highlight: true, slug: 'machine-learning' },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code2',
    description: 'Core languages for AI pipelines and relational queries',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'SQL', highlight: true },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Evaluation',
    icon: 'Wrench',
    description: 'Application deployment, evaluation, containerization, and validation',
    skills: [
      { name: 'RAGAS', highlight: true, slug: 'rag' },
      { name: 'LLM-as-Judge', highlight: true, slug: 'llms' },
      { name: 'Pydantic', highlight: true, slug: 'llms' },
      { name: 'Streamlit', highlight: true },
      { name: 'Docker', highlight: false },
      { name: 'FastAPI', highlight: true },
      { name: 'Git', highlight: false },
      { name: 'GitHub', highlight: false },
    ],
  },
];

export const SKILL_TOPIC_DETAILS: Record<string, SkillTopicDetail> = {
  rag: {
    id: 'rag',
    name: 'Retrieval-Augmented Generation (RAG & Multimodal RAG)',
    category: 'Generative AI & LLMs',
    tagline: 'Engineering high-precision document extraction, vector indexing, and two-stage cross-encoder reranking pipelines for factual synthesis.',
    whatIUseItFor:
      'I use RAG to eliminate LLM hallucinations, ground responses in authoritative private documents (PDFs, multi-column financial tables, charts), and enable verifiable cross-document question answering with exact source citations.',
    myPracticalImplementation:
      'In my flagship Equity Research Intelligence System, standard vector retrieval caused bias across long documents. I designed a 5-layer multimodal architecture using PyMuPDF and pdfplumber for document ingestion, Gemini Vision for financial chart understanding, Sentence Transformers with ChromaDB for dense embeddings, and a Neural Cross-Encoder to jointly rescore the top 50 candidates down to 5 high-precision chunks before prompt injection.',
    pipelineSteps: [
      { title: '1. Ingestion & Chunking', desc: 'Hierarchical chunking preserving headers, paragraphs, and multi-column tabular structure.' },
      { title: '2. Multimodal Extraction', desc: 'Gemini Vision processes trend charts, bar graphs, and visual figures into structured textual descriptions.' },
      { title: '3. Vector Indexing', desc: 'Dense vector embeddings generated via Sentence Transformers and persisted in ChromaDB with rich metadata filtering.' },
      { title: '4. Bi-Encoder Retrieval', desc: 'Fast initial retrieval fetches the top 50 candidate chunks across collections.' },
      { title: '5. Cross-Encoder Reranking', desc: 'Neural Cross-Encoder rescores query and chunk pairs jointly to pick the top 5 precision matches.' },
      { title: '6. LLM Synthesis', desc: 'Groq-hosted Llama 3.3 70B synthesizes citation-backed answers in sub-second inference time.' },
    ],
    whereIUsedIt: 'Equity Research Report Intelligence System - Multimodal RAG',
    relatedProjectSlug: 'equity-research-report-intelligence',
    relatedProjectTitle: 'Equity Research Report Intelligence System',
    relatedTechnologies: ['Python', 'LangChain', 'ChromaDB', 'Sentence Transformers', 'Cross-Encoder', 'Gemini Vision', 'Groq API', 'Streamlit', 'Docker'],
  },
  langgraph: {
    id: 'langgraph',
    name: 'LangGraph & Agentic State Machines',
    category: 'Frameworks & Orchestration',
    tagline: 'Designing resilient cyclic agent workflows, tool routing state graphs, and human-in-the-loop validation checkpoints.',
    whatIUseItFor:
      'I use LangGraph to build deterministic stateful agent systems that move beyond linear chains. It enables multi-turn reasoning loops, conditional edge routing, error-handling retries, and persistence checkpoints.',
    myPracticalImplementation:
      'I apply LangGraph for structured agent workflows such as the Automated Quotation Maker. The state graph manages transitions between requirement extraction from customer prompts, product catalogue matching, tax and discount computation, Pydantic schema validation, and structured output formatting with fallback branches.',
    pipelineSteps: [
      { title: '1. State Definition', desc: 'Typed state schemas tracking user intent, parsed requirements, catalog matches, and pricing calculations.' },
      { title: '2. Intent & Tool Routing Node', desc: 'LLM agent analyzes context and dynamically routes to tool nodes (database lookup, tax calculator).' },
      { title: '3. Tool Execution Node', desc: 'Executes deterministic tools and updates the state dictionary.' },
      { title: '4. Validation & Retry Loop', desc: 'Validates intermediate state against Pydantic models; reroutes on schema violations.' },
      { title: '5. Final Synthesis Node', desc: 'Formats verified data into structured quotation documents ready for client export.' },
    ],
    whereIUsedIt: 'Automated Quotation Maker & Agentic AI Workflows',
    relatedProjectSlug: 'automated-quotation-maker',
    relatedProjectTitle: 'Automated Quotation Maker',
    relatedTechnologies: ['Python', 'LangGraph', 'LangChain', 'LCEL', 'Pydantic', 'FastAPI', 'State Machines'],
  },
  llms: {
    id: 'llms',
    name: 'LLM Orchestration & Prompt Engineering',
    category: 'Generative AI & LLMs',
    tagline: 'Orchestrating foundational LLMs (Llama 3.3, Gemini) with LCEL, structured Pydantic schemas, and low-latency inference.',
    whatIUseItFor:
      'I use Large Language Models for natural language understanding, entity extraction, role-fit scoring, structured data generation, and synthesis. I emphasize deterministic prompt engineering (few-shot exemplars, system constraints) and sub-second inference via Groq LPU.',
    myPracticalImplementation:
      'In the AI Resume Screener, I built an LCEL prompt chain using Groq-hosted LLMs that parses candidate resumes, compares them against job descriptions, and enforces strict Pydantic output validation to generate structured role-fit scores and feedback without hallucinations.',
    pipelineSteps: [
      { title: '1. Structured System Prompting', desc: 'Crafting bounded instructions with explicit role constraints and few-shot exemplars.' },
      { title: '2. LCEL Chain Assembly', desc: 'Composing prompt templates, inference APIs, and output parsers via LangChain Expression Language.' },
      { title: '3. Low-Latency Inference', desc: 'Serving models on Groq LPUs for sub-second responses and high token throughput.' },
      { title: '4. Strict Schema Enforcement', desc: 'Validating output JSON directly into Pydantic models with automated repair prompts on error.' },
    ],
    whereIUsedIt: 'AI Resume Screener & Equity Research Report Intelligence',
    relatedProjectSlug: 'ai-resume-screener',
    relatedProjectTitle: 'AI Resume Screener',
    relatedTechnologies: ['Python', 'LangChain', 'LCEL', 'Groq API', 'Llama 3.3 70B', 'Pydantic', 'pdfplumber', 'Streamlit'],
  },
  'machine-learning': {
    id: 'machine-learning',
    name: 'Applied Machine Learning & Time-Series Analytics',
    category: 'Machine Learning',
    tagline: 'Preprocessing sensor data, engineering statistical features, training predictive ensembles, and detecting anomalies.',
    whatIUseItFor:
      'I use Machine Learning algorithms to analyze complex tabular and time-series data, uncover usage patterns, build predictive forecasts, and detect operational anomalies in real-time telemetry.',
    myPracticalImplementation:
      'In the Energy-Usage-Monitoring-and-Management-System, I preprocessed industrial time-series electricity records with Pandas and NumPy, constructed lag features and rolling consumption metrics, and trained Scikit-learn models with anomaly detection algorithms to flag abnormal demand spikes in a Streamlit dashboard.',
    pipelineSteps: [
      { title: '1. Data Cleaning & Imputation', desc: 'Handling missing records, sequence indexing, and outlier cleaning in time-series telemetry.' },
      { title: '2. Exploratory Data Analysis (EDA)', desc: 'Visualizing distributions, cyclical seasonal trends, and consumption correlations.' },
      { title: '3. Feature Engineering', desc: 'Creating lag variables, rolling window averages, variance statistics, and cyclical timestamps.' },
      { title: '4. Model Training & Evaluation', desc: 'Training regression and ensemble algorithms with cross-validation and error metrics.' },
      { title: '5. Anomaly Detection & Dashboarding', desc: 'Setting statistical thresholds to flag load spikes and visualizing via Streamlit.' },
    ],
    whereIUsedIt: 'Energy-Usage-Monitoring-and-Management-System',
    relatedProjectSlug: 'energy-management',
    relatedProjectTitle: 'Energy-Usage-Monitoring-and-Management-System',
    relatedTechnologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit', 'EDA'],
  },
};

export const EXPLORING_TOPIC_DETAILS: Record<string, ExploringTopicDetail> = {
  'agentic-ai': {
    id: 'agentic-ai',
    title: 'Agentic AI Workflows',
    tag: 'Autonomous Systems',
    status: 'Active Exploration',
    description: 'Building multi-agent collaborative systems with dynamic state machines, goal planning, and tool orchestration.',
    whatItIs:
      'Agentic AI moves from static prompt-response chains to autonomous multi-step reasoning systems capable of breaking down complex goals, invoking external tools, validating intermediate outputs, and correcting errors dynamically.',
    whyItMatters:
      'Real-world business processes cannot be solved by a single LLM call. Agentic patterns enable modular specialists (research agent, pricing agent, QA validator) to coordinate over a shared state graph.',
    architectureFlow: [
      { step: '1. Goal Decomposition', desc: 'Planner agent analyzes top-level objective and generates an execution plan.' },
      { step: '2. Specialized Sub-Agents', desc: 'Individual agents execute domain tools (database queries, calculators, web search).' },
      { step: '3. State Reflection', desc: 'Supervisor reviews outputs against goal constraints and decides whether to continue or terminate.' },
      { step: '4. Final Grounded Output', desc: 'Produces validated, end-to-end structured results.' },
    ],
    keyCapabilities: [
      'Cyclic graph architectures with LangGraph',
      'Dynamic tool use and schema validation with Pydantic',
      'Human-in-the-loop checkpointing and intervention',
      'Multi-agent role specialization and state sharing',
    ],
    practicalApplication:
      'Currently applying agentic workflow principles to the Automated Quotation Maker, where distinct nodes handle parsing requirements, matching catalogue items, and computing tiered pricing rules.',
    relatedProjectLink: '/projects/automated-quotation-maker',
    relatedProjectTitle: 'Automated Quotation Maker',
  },
  langgraph: {
    id: 'langgraph',
    title: 'LangGraph & State Graphs',
    tag: 'Orchestration',
    status: 'In Progress',
    description: 'Designing resilient cyclic agent architectures with human-in-the-loop checkpoints and state persistence.',
    whatItIs:
      'LangGraph is an orchestration framework that extends LangChain by allowing developers to represent LLM agent interactions as cyclic computational graphs with explicit state management, branching edges, and persistence.',
    whyItMatters:
      'Traditional DAG chains cannot easily loop back, retry on failed validation, or pause for human approval. LangGraph provides first-class primitives for cyclical execution and state checkpointing.',
    architectureFlow: [
      { step: '1. State Schema', desc: 'Defines the centralized state dictionary shared across graph nodes.' },
      { step: '2. Nodes as Functions', desc: 'Each node performs a discrete action (LLM call, API request, calculation).' },
      { step: '3. Conditional Edges', desc: 'Evaluates node output to dynamically choose the next branch or retry loop.' },
      { step: '4. Checkpoint Store', desc: 'Saves conversation state after each step for time-travel and resilience.' },
    ],
    keyCapabilities: [
      'Explicit cyclic execution loops with max recursion guards',
      'State persistence across multi-turn sessions',
      'Time-travel debugging and state rollbacks',
      'Seamless integration with LangChain LCEL primitives',
    ],
    practicalApplication:
      'Applied in state-driven workflow architectures to ensure zero-hallucination processing and robust error recovery when validating structured output schemas.',
    relatedProjectLink: '/projects/automated-quotation-maker',
    relatedProjectTitle: 'Automated Quotation Maker',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'equity-research-report-intelligence',
    slug: 'equity-research-report-intelligence',
    title: 'Equity Research Report Intelligence System - Multimodal RAG',
    category: 'Multimodal RAG / Generative AI',
    featured: true,
    tagline: 'Production-style multimodal RAG system ingesting equity research PDFs with exact source citations across text, tables, and charts.',
    description: 'A production-style multimodal RAG system that ingests equity research PDFs and answers natural language questions across text, tables, and charts with exact source citations, using a 5-layer extraction and retrieval architecture.',
    problem: 'Equity research reports contain dense textual analyses, intricate multi-column financial tables, and visual performance charts. Traditional RAG systems fail to capture tabular structure and visual charts, leading to retrieval bias and inaccurate cross-document comparisons.',
    solution: 'Built a 5-layer extraction and retrieval architecture. Solved cross-document retrieval bias with a two-stage pipeline: a bi-encoder retrieves 50 candidates, and a neural cross-encoder rescores by jointly reading query and chunk together to keep the top 5 for precision retrieval. Multi-document management with metadata filtering is persisted in ChromaDB and deployed via Streamlit & Docker.',
    features: [
      'Built a production-style multimodal RAG system ingesting equity research PDFs with 5-layer extraction',
      'Answers natural language questions across text, tables, and charts with exact source citations',
      'Solved cross-document retrieval bias via two-stage retrieval: bi-encoder (50 candidates) + cross-encoder (top 5)',
      'Persistent, filterable multi-document management in ChromaDB with metadata filtering',
      'Deployed on Streamlit Community Cloud with Docker containerization',
      'Sub-second LLM synthesis powered by Groq API (Llama 3.3 70B) & Gemini Vision',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'LangChain',
      'ChromaDB',
      'Sentence Transformers',
      'Cross-Encoder',
      'Groq API',
      'Llama 3.3 70B',
      'Gemini Vision',
      'PyMuPDF',
      'pdfplumber',
      'Docker',
    ],
    github: 'https://github.com/jeevams27/Equity-Research-Report-Intelligence',
    liveDemo: 'https://equity-research-report-intelligence-27.streamlit.app/',
    architectureNodes: [
      {
        title: '1. Multi-PDF Document Ingestion',
        description: 'Ingests multiple equity research PDFs and separates text, tabular data, and visual assets.',
        tools: 'PyMuPDF, pdfplumber',
      },
      {
        title: '2. Multimodal Vision Understanding',
        description: 'Understands financial charts and trend visuals via vision model analysis.',
        tools: 'Gemini Vision',
      },
      {
        title: '3. ChromaDB Vector Store',
        description: 'Indexes chunks into ChromaDB with rich document metadata tags.',
        tools: 'ChromaDB, Sentence Transformers',
      },
      {
        title: '4. Two-Stage Cross-Encoder Reranking',
        description: 'Bi-encoder retrieves 50 candidates; Cross-Encoder rescores query and chunk together to select top 5.',
        tools: 'Neural Cross-Encoder',
      },
      {
        title: '5. LLM Synthesis & Citations',
        description: 'Synthesizes multi-document grounded answers with verifiable source attribution.',
        tools: 'Groq API (Llama 3.3 70B)',
      },
      {
        title: '6. Streamlit & Docker App',
        description: 'Delivers interactive conversational UI with document filtering and inspection.',
        tools: 'Streamlit, Docker',
      },
    ],
  },
  {
    id: 'ai-resume-screener',
    slug: 'ai-resume-screener',
    title: 'AI Resume Screener',
    category: 'Generative AI / NLP',
    featured: false,
    tagline: 'End-to-end resume screening pipeline using LangChain LCEL and Groq-hosted LLM with Pydantic validation.',
    description: 'An intelligent candidate evaluation pipeline that parses PDF resumes using pdfplumber, validates structured output with Pydantic, and generates real-time match scores and role-fit feedback via Streamlit.',
    problem: 'Manual candidate screening is slow, inconsistent, and error-prone when evaluating complex technical qualifications against demanding job descriptions.',
    solution: 'Built an automated end-to-end screening pipeline with LangChain LCEL and a Groq-hosted LLM. Extracted and parsed candidate data from PDF resumes using pdfplumber, enforced strict Pydantic schemas, and delivered real-time role-fit evaluations.',
    features: [
      'Built an end-to-end resume screening pipeline using LangChain LCEL and a Groq-hosted LLM',
      'Extracted and parsed candidate data from PDF resumes using pdfplumber',
      'Validated structured output schemas strictly with Pydantic for zero hallucination',
      'Generated real-time match scores and role-fit feedback via an interactive Streamlit interface',
      'Automated qualification breakdown and skill gap detection',
    ],
    technologies: [
      'Python',
      'LangChain',
      'LCEL',
      'Groq API',
      'Pydantic',
      'pdfplumber',
      'Streamlit',
    ],
    github: 'https://github.com/jeevams27/Langchain-Resume-Screener',
    architectureNodes: [
      {
        title: '1. Resume PDF Parsing',
        description: 'Extracts structured text from candidate resumes using pdfplumber.',
        tools: 'pdfplumber',
      },
      {
        title: '2. LCEL Chain Orchestration',
        description: 'Orchestrates prompt pipelines and context mapping with LangChain Expression Language.',
        tools: 'LangChain LCEL',
      },
      {
        title: '3. Groq LLM Evaluation',
        description: 'Analyzes technical alignment, role prerequisites, and experience match.',
        tools: 'Groq API',
      },
      {
        title: '4. Pydantic Output Validation',
        description: 'Enforces type-safe schema validation on evaluation metrics and feedback.',
        tools: 'Pydantic',
      },
      {
        title: '5. Interactive Streamlit UI',
        description: 'Presents role-fit scores, qualification match cards, and feedback reports.',
        tools: 'Streamlit',
      },
    ],
  },
  {
    id: 'automated-quotation-maker',
    slug: 'automated-quotation-maker',
    title: 'Automated Quotation Maker',
    category: 'AI Application / Agentic Workflow',
    featured: false,
    status: 'Currently Building',
    tagline: 'AI-powered quotation generation system extracting requirements, applying pricing rules, and generating structured quotes.',
    description: 'An AI-powered quotation generation system that extracts customer requirements from natural language inquiries, selects relevant products, applies pricing and tax rules, and generates structured quotations.',
    problem: 'Sales teams spend excessive time manually drafting price quotations from unstructured client emails, leading to miscalculations, slow turnaround, and inconsistent discounting.',
    solution: 'Designing an agentic state-machine system that parses requirements, retrieves matching product catalog specs, enforces deterministic pricing and tax business logic, validates data models via Pydantic, and generates finalized structured quotes.',
    features: [
      'Extracts structured customer requirements from natural language text and emails',
      'Matches products and services dynamically against catalogue specifications',
      'Enforces deterministic pricing, volume discounts, and regional tax calculation rules',
      'Validates all line-item schemas with strict Pydantic models for zero arithmetic error',
      'Generates formatted, export-ready structured quotations',
    ],
    technologies: [
      'Python',
      'LangChain',
      'LangGraph',
      'Pydantic',
      'FastAPI',
      'Streamlit',
      'PostgreSQL',
    ],
    architectureNodes: [
      {
        title: '1. Ingestion & Intent Parsing',
        description: 'Parses raw client requests into itemized product requirements and quantities.',
        tools: 'LangChain, Pydantic',
      },
      {
        title: '2. Catalogue & Inventory Match',
        description: 'Queries product catalog to find relevant item IDs, base prices, and specs.',
        tools: 'SQL / Vector Search',
      },
      {
        title: '3. Pricing & Tax Engine',
        description: 'Applies deterministic discount rules, tiered pricing, and regional tax calculations.',
        tools: 'Python Engine',
      },
      {
        title: '4. Schema Validation',
        description: 'Enforces complete type safety on line items, totals, and quote metadata.',
        tools: 'Pydantic v2',
      },
      {
        title: '5. Structured Quote Output',
        description: 'Renders verified quotation ready for review, export, and client dispatch.',
        tools: 'FastAPI / Streamlit',
      },
    ],
  },
  {
    id: 'energy-management',
    slug: 'energy-management',
    title: 'Energy-Usage-Monitoring-and-Management-System',
    category: 'Machine Learning / Data Analytics',
    featured: false,
    tagline: 'Machine learning pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption.',
    description: 'An applied machine learning system that preprocesses time-series energy consumption data, detects anomalies, models future consumption patterns, and visualizes trends via an interactive Streamlit dashboard.',
    problem: 'Industrial and commercial operations experience unpredictable peak electricity demands and undetected load anomalies that drive up operating costs.',
    solution: 'Built an end-to-end ML pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption patterns from time-series data via an interactive Streamlit dashboard.',
    features: [
      'Built an ML pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption patterns',
      'Time-series data preprocessing, missing value imputation, and feature engineering',
      'Predictive modeling and anomaly flagging using Scikit-learn algorithms',
      'Interactive Streamlit dashboard for real-time monitoring and consumption insights',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Streamlit',
    ],
    github: 'https://github.com/jeevams27/Energy-Usage-Monitoring-and-Management-System',
    architectureNodes: [
      {
        title: '1. Time-Series Data Preprocessing',
        description: 'Cleans granular electricity telemetry and handles timestamp sequences.',
        tools: 'Pandas, NumPy',
      },
      {
        title: '2. Feature Engineering & EDA',
        description: 'Constructs lag features, rolling consumption statistics, and cyclical indicators.',
        tools: 'Scikit-learn, EDA',
      },
      {
        title: '3. ML Anomaly Detection',
        description: 'Detects unusual demand spikes and anomalous load deviations.',
        tools: 'Scikit-learn',
      },
      {
        title: '4. Streamlit Dashboard',
        description: 'Displays interactive energy analytics, predictive load forecasts, and alert flags.',
        tools: 'Streamlit, Matplotlib',
      },
    ],
  },
];

export const AI_PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    name: 'User Input',
    shortName: 'Input',
    role: 'Query Ingestion & Intent Parsing',
    description: 'Receives unstructured prompts, documents, or multi-turn dialogues from the client layer.',
    technologies: ['React UI', 'FastAPI', 'Streamlit', 'WebSockets'],
    keyPractices: [
      'Input sanitization & token budget assessment',
      'Intent classification & routing',
      'Session memory & conversation state persistence',
    ],
  },
  {
    id: 2,
    name: 'Application Layer',
    shortName: 'App',
    role: 'Context Orchestration & Preprocessing',
    description: 'Handles document parsing, multimodal asset extraction, and metadata tagging before retrieval.',
    technologies: ['Python', 'pdfplumber', 'PyMuPDF', 'Pydantic'],
    keyPractices: [
      'Hierarchical document chunking (text + tables + images)',
      'Metadata enrichment (source, page, section)',
      'Context window optimization',
    ],
  },
  {
    id: 3,
    name: 'Prompt / Agent',
    shortName: 'Agent',
    role: 'Agentic State Machines & Prompt Engineering',
    description: 'Directs workflow state, determines tool needs, and constructs system prompts with few-shot guidance.',
    technologies: ['LangChain', 'LCEL', 'LangGraph', 'ReAct Pattern'],
    keyPractices: [
      'Deterministic state graph transitions (LangGraph)',
      'Few-shot dynamic exemplars',
      'Explicit reasoning bounds & role constraints',
    ],
  },
  {
    id: 4,
    name: 'Retrieval / Tools',
    shortName: 'Retrieval',
    role: 'Vector Search, Reranking & External APIs',
    description: 'Retrieves authoritative context via dense embeddings, BM25, and neural Cross-Encoder reranking.',
    technologies: ['ChromaDB', 'Sentence Transformers', 'Cross-Encoders'],
    keyPractices: [
      'Dense + Sparse hybrid search',
      'Two-stage Cross-Encoder reranking for precision',
      'Relational and vector metadata filtering',
    ],
  },
  {
    id: 5,
    name: 'LLM Reasoning',
    shortName: 'LLM',
    role: 'Context Synthesis & Generation',
    description: 'Applies leading foundational and specialized models for reasoning, extraction, and synthesis.',
    technologies: ['Groq API (Llama 3.3 70B)', 'Gemini Vision', 'Transformers'],
    keyPractices: [
      'Temperature tuning for deterministic extraction',
      'Sub-second inference optimization via Groq LPU',
      'Multimodal image/chart visual reasoning',
    ],
  },
  {
    id: 6,
    name: 'Validation & Eval',
    shortName: 'Validation',
    role: 'Schema Enforcement & Quality Metrics',
    description: 'Validates outputs against strict data models and measures answer faithfulness.',
    technologies: ['Pydantic v2', 'RAGAS', 'LLM-as-Judge'],
    keyPractices: [
      'Strict Pydantic parsing with automated retry logic',
      'RAGAS evaluation (Faithfulness, Answer Relevance)',
      'Hallucination prevention & citation verification',
    ],
  },
  {
    id: 7,
    name: 'Grounded Response',
    shortName: 'Response',
    role: 'Client Streaming & Observability',
    description: 'Streams verified, citation-backed answers to the user interface with full audit logs.',
    technologies: ['Streamlit', 'FastAPI Streaming', 'Docker'],
    keyPractices: [
      'Token streaming for responsive UX',
      'Inline source document attribution',
      'Latency & token telemetry logging',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Analyst – AI / LLM Practice',
    company: 'Innodata',
    department: '',
    location: 'Noida, India · Remote',
    period: '29 May 2026 – 17 August 2026',
    responsibilities: [
      'Annotated image, audio, and video data for multiple AI/LLM models by following detailed annotation guidelines and maintaining consistency and quality across datasets.',
    ],
    tags: [],
  },
];

export const CURRENTLY_EXPLORING: ExploringItem[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Workflows',
    tag: 'Autonomous Systems',
    description: 'Building multi-agent collaborative systems with dynamic state machines, goal planning, and tool orchestration.',
    status: 'Active Exploration',
    link: '/exploring/agentic-ai',
  },
  {
    id: 'langgraph',
    title: 'LangGraph & State Graphs',
    tag: 'Orchestration',
    description: 'Designing resilient cyclic agent architectures with human-in-the-loop checkpoints and state persistence.',
    status: 'In Progress',
    link: '/exploring/langgraph',
  },
  {
    id: 'automated-quotation-maker',
    title: 'Automated Quotation Maker',
    tag: 'AI Application',
    description: 'Building an AI-powered quotation generation system that extracts customer requirements, selects relevant products, applies pricing and tax rules, and generates structured quotations.',
    status: 'Currently Building',
    link: '/projects/automated-quotation-maker',
  },
];