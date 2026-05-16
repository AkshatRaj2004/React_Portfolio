/**
 * Portfolio content — distilled from the legacy site and refined for clarity.
 * Update paths in /public (e.g. Akshat_Resume.pdf, akshat.png) when assets are available.
 */

export const site = {
  name: 'Akshat Raj',
  title: 'Akshat Raj — Fullstack & Software Developer',
  description:
    'B.Tech CSE (AI & ML) student at LPU. Fullstack and software developer building fast, accessible products end-to-end with strong DSA foundations.',
  url: 'https://akshatraj2004.github.io',
  keywords: [
    'Akshat Raj',
    'Fullstack Developer',
    'Software Developer',
    'React',
    'Node.js',
    'LPU',
    'DSA',
    'Portfolio',
  ],
  resumePath: '/Akshat_Resume.pdf',
  /**
   * Bump this whenever you replace `public/Akshat_Resume.pdf` so browsers and CDNs
   * fetch the new file instead of a cached copy.
   */
  resumeVersion: '2026-05-15-1',
  profileImagePath: '/akshat.png',
} as const

/** Public URL for the résumé PDF (includes cache-bust query from `site.resumeVersion`). */
export function getResumeUrl(): string {
  return `${site.resumePath}?v=${encodeURIComponent(site.resumeVersion)}`
}

export const hero = {
  greeting: "Hi, I'm",
  headlineRoles: [
    'Fullstack Developer',
    'Software Developer',
    'B.Tech CSE Student',
    'Product-minded Builder',
    'DSA Problem Solver',
  ],
  tagline:
    'I craft polished web experiences with React and modern CSS—pairing strong interfaces with disciplined problem-solving and ML curiosity.',
  chips: ['React & UI engineering', 'DSA & algorithms', 'Exploring AI/ML'],
} as const

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/AkshatRaj2004',
    handle: '@AkshatRaj2004',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akshatraj872/',
    handle: 'akshatraj872',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/akshat____raj/',
    handle: '@akshat____raj',
  },
  {
    label: 'Email',
    href: 'mailto:akshatrajar2004@gmail.com',
    handle: 'akshatrajar2004@gmail.com',
  },
] as const

export const about = {
  summary:
    "I'm a Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Lovely Professional University (2023–2027). I enjoy turning ambiguous requirements into crisp UI and reliable code—whether that's a responsive React surface, a concurrency demo, or an ML-backed prototype.",
  goals:
    'Short term: ship internship-ready full-stack and frontend projects with measurable impact. Long term: grow into a product-minded engineer who blends interface excellence with scalable systems and thoughtful ML where it matters.',
  strengths: [
    'Frontend craft: layout, motion, accessibility, and performance budgets',
    'Consistent DSA practice across major platforms',
    'Collaboration and ownership across coursework and team projects',
    'Learning velocity across web, systems, and ML stacks',
  ],
  personality:
    'Curious, detail-oriented, and calm under deadlines. I prefer clarity—readable components, predictable state, and interfaces that respect users.',
  status: 'Exploring internship opportunities for 2026.',
  languages: [
    { name: 'English', level: 'Proficient' },
    { name: 'Hindi', level: 'Native' },
  ],
} as const

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    school: 'Lovely Professional University, Punjab',
    period: '2023 — 2027',
    detail: 'CGPA: 7.26',
    highlight: 'Core CS, ML coursework, and continuous project building.',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    school: 'City Montessori School, Lucknow',
    period: '2023',
    detail: 'Percentage: 94%',
    highlight: 'Science stream with strong analytical foundation.',
  },
  {
    degree: 'Secondary (Class X)',
    school: 'City Montessori School, Lucknow',
    period: '2021',
    detail: 'Percentage: 95.2%',
    highlight: 'Distinction across STEM subjects.',
  },
] as const

export type SkillCategory = {
  title: string
  description: string
  items: { name: string; level: number }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    description: 'Interfaces, design systems, and interaction polish.',
    items: [
      { name: 'React', level: 88 },
      { name: 'HTML / Semantic markup', level: 92 },
      { name: 'CSS / Tailwind mindset', level: 90 },
      { name: 'JavaScript (ESNext)', level: 85 },
      { name: 'Responsive Web Design', level: 82 },
    ],
  },
  {
    title: 'Languages & Core CS',
    description: 'Languages I reach for daily and in contests.',
    items: [
      { name: 'Java', level: 90 },
      { name: 'C++', level: 88 },
      { name: 'Python', level: 82 },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Enough server-side context to ship end-to-end.',
    items: [
      { name: 'REST APIs', level: 76 },
      { name: 'Node.js', level: 68 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    title: 'DSA & Problem Solving',
    description: 'Structured practice on global platforms.',
    items: [
      { name: 'Data Structures', level: 86 },
      { name: 'Algorithms', level: 84 },
      { name: 'Contest programming', level: 78 },
    ],
  },
  {
    title: 'AI / ML (Exploration)',
    description: 'Coursework and applied mini-projects.',
    items: [
      { name: 'Machine Learning', level: 72 },
      { name: 'Supervised Learning', level: 65 },
      { name: 'Natural Language Processing', level: 62 },
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'How I ship and collaborate.',
    items: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'VS Code', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Linux familiarity', level: 74 },
    ],
  },
]

export type Project = {
  title: string
  summary: string
  stack: string[]
  github?: string
  live?: string
  /** Optional media under /public for previews */
  media?: { type: 'video'; src: string } | { type: 'image'; src: string }
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose'
}

export const projects: Project[] = [
  {
    title: 'AI-Resume Analyzer',
    summary:
      'AI-powered resume analyzer using NLP and the Gemini API—matches resumes against job descriptions with ATS-style scoring and keyword extraction (~85% matching accuracy), plus skill extraction, resume parsing, and personalized improvement suggestions.',
    stack: ['Python', 'NLP', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Scikit-learn'],
    github: 'https://github.com/AkshatRaj2004/AI_Resume_Analyzer_1',
    media: { type: 'image', src: '/ai-resume-analyzer.png' },
    accent: 'emerald',
  },
  {
    title: 'Resume Skill Extraction & Candidate Clustering',
    summary:
      'AI resume-screening app that extracts skills with NLP, vectorizes resumes with TF-IDF, and clusters similar candidates using K-Means—served through an interactive Streamlit dashboard to streamline recruiter workflows.',
    stack: ['Python', 'Streamlit', 'NLP', 'Scikit-learn', 'TF-IDF', 'K-Means', 'Pandas'],
    github: 'https://github.com/AkshatRaj2004/ResumeSkillExtraction-CandidateClustering',
    media: { type: 'image', src: '/resume-skill-clustering.png' },
    accent: 'amber',
  },
  {
    title: 'System Manager & Deadlock Resolver',
    summary:
      'Operating-systems style tool that detects resource contention patterns and demonstrates automated recovery strategies—focused on correctness under concurrency.',
    stack: ['C', 'OS Concepts', 'Concurrency', 'Systems'],
    github: 'https://github.com/AkshatRaj2004/OSproject',
    media: { type: 'image', src: '/deadlock-manager.png' },
    accent: 'violet',
  },
  {
    title: 'Simple Calculator — Web UI',
    summary:
      'A minimal, responsive calculator with deliberate spacing, keyboard-friendly controls, and a clean visual hierarchy—practice in UI clarity.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AkshatRaj2004/Simplecalculator',
    live: 'https://akshatraj2004.github.io/Simplecalculator/',
    media: { type: 'image', src: '/calculator.png' },
    accent: 'cyan',
  },
  {
    title: 'Smart Logistics Services (ML)',
    summary:
      'Regression-oriented logistics modeling with Scikit-learn & Pandas—feature engineering, training, and evaluation using RMSE, MAE, and R².',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/AkshatRaj2004/Smart_logistics_services',
    media: { type: 'video', src: '/Smart.mp4' },
    accent: 'rose',
  },
]

export type Certification = {
  title: string
  issuer: string
  verifyUrl: string
}

export const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure Generative AI',
    issuer: 'Oracle',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D10FCCE181325C329DDB441EFFEF545FC37EF3632DFDBA1A146DACF52A43427B',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=869326F76804850263D7819199665BBB3F24301CCDE51FD0D1EFC4ED25478ADF',
  },
  {
    title: 'Bits and Bytes of Computer Networking',
    issuer: 'Google (Coursera)',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/B0624B1XVQF5',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    verifyUrl:
      'https://www.freecodecamp.org/certification/fcccbe352ad-d53a-443d-8b7e-e9845266dd76/responsive-web-design',
  },
  {
    title: 'Binary Blitz Hackathon',
    issuer: 'Coding Ninjas',
    verifyUrl: 'https://verification.givemycertificate.com/v/f7cd4c23-2dd2-44ca-ba31-9c88c537d830',
  },
]

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'akshatraj2004',
    url: 'https://leetcode.com/akshatraj2004',
    highlights: ['275+ problems solved', 'Contest rating ~1539', '111-day streak'],
  },
  {
    platform: 'CodeChef',
    username: 'real_akshat',
    url: 'https://www.codechef.com/users/real_akshat',
    highlights: ['Active contest participation', 'Building CP fundamentals'],
  },
]

export const achievements = [
  {
    title: 'Consistent DSA practice',
    detail:
      'Structured problem solving across LeetCode and CodeChef with emphasis on patterns transferable to interviews.',
  },
  {
    title: 'Hackathon participation',
    detail: 'Binary Blitz — Coding Ninjas (verified credential).',
  },
  {
    title: 'Cloud & AI literacy',
    detail: 'Oracle Generative AI and OCI Foundations credentials.',
  },
  {
    title: 'Open-source presence',
    detail:
      'Public GitHub portfolio with OS, web, and ML repositories—each project includes runnable artifacts or demos where applicable.',
  },
] as const

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const
