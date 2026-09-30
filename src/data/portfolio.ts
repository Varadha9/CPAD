export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'Backend / APIs' | 'Databases' | 'DevOps / CI-CD' | 'Testing / QA' | 'Mobile & Tools';
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  desc: string;
  tech: string[];
  color: string;
  githubUrl: string;
  highlights: string[];
  featured?: boolean;
}

export interface Cert {
  title: string;
  issuer: string;
  year?: string;
  icon: string;
  skills?: string;
}

export interface Achievement {
  title: string;
  badge: string;
  desc: string;
  year: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'JavaScript / TypeScript', level: 85, category: 'Languages' },
  { name: 'Python', level: 82, category: 'Languages' },
  { name: 'Kotlin', level: 78, category: 'Languages' },
  { name: 'Swift', level: 70, category: 'Languages' },

  // Backend / APIs
  { name: 'Node.js & Express.js', level: 88, category: 'Backend / APIs' },
  { name: 'Spring Boot', level: 80, category: 'Backend / APIs' },
  { name: 'FastAPI / Python APIs', level: 78, category: 'Backend / APIs' },
  { name: 'REST APIs & JWT Auth', level: 92, category: 'Backend / APIs' },
  { name: 'MVC Architecture & EJS', level: 85, category: 'Backend / APIs' },

  // Databases
  { name: 'PostgreSQL / Supabase', level: 85, category: 'Databases' },
  { name: 'MongoDB', level: 82, category: 'Databases' },
  { name: 'MySQL', level: 85, category: 'Databases' },
  { name: 'Room DB / SQLite', level: 80, category: 'Databases' },

  // DevOps / CI-CD
  { name: 'Docker & Containers', level: 82, category: 'DevOps / CI-CD' },
  { name: 'GitHub Actions (CI/CD)', level: 88, category: 'DevOps / CI-CD' },
  { name: 'Jenkins & Maven', level: 75, category: 'DevOps / CI-CD' },
  { name: 'Git & Linux CLI', level: 90, category: 'DevOps / CI-CD' },

  // Testing / QA
  { name: 'Selenium WebDriver', level: 88, category: 'Testing / QA' },
  { name: 'TestNG & Automation', level: 84, category: 'Testing / QA' },
  { name: 'Cucumber BDD', level: 80, category: 'Testing / QA' },
  { name: 'Page Object Model (POM)', level: 85, category: 'Testing / QA' },

  // Mobile & Tools
  { name: 'React Native', level: 85, category: 'Mobile & Tools' },
  { name: 'Android (WorkManager, ZXing)', level: 82, category: 'Mobile & Tools' },
  { name: 'Postman & Jira', level: 88, category: 'Mobile & Tools' },
  { name: 'IntelliJ IDEA & Android Studio', level: 86, category: 'Mobile & Tools' },
];

export const projects: Project[] = [
  {
    title: 'ELEVARE',
    subtitle: 'AI-Driven Career Discovery Platform',
    period: 'Jan 2025 – Present',
    desc: 'Full-stack AI platform with NLP sentiment analysis, psychometric profiling, and LLM-powered chat delivering Ikigai-aligned career recommendations.',
    tech: ['React.js', 'Node.js', 'FastAPI', 'MongoDB', 'NLP', 'LLM', 'JWT', 'Jira'],
    color: '#6c63ff',
    githubUrl: 'https://github.com/Varadha9/ELEVARE',
    featured: true,
    highlights: [
      'Engineered an intelligent career guidance system leveraging NLP sentiment analysis and psychometric profiling.',
      'Built a conversational LLM-powered chat interface delivering personalized, Ikigai-aligned career recommendations.',
      'Architected JWT-secured REST APIs with complete CRUD operations for user profiles, career paths, assessments, and session states.',
      'Managed agile development end-to-end in Jira with sprint planning, backlog grooming, and issue tracking.',
    ],
  },
  {
    title: 'BookSphere',
    subtitle: 'DSA-Powered Online Bookstore',
    period: 'Feb 2025 – May 2025',
    desc: 'React 18 + Supabase e-commerce application where every core feature is powered by a distinct data structure and algorithm.',
    tech: ['React 18', 'Supabase', 'PostgreSQL', 'DSA', 'Selenium 4', 'Cucumber BDD', 'Vercel'],
    color: '#00d2ff',
    githubUrl: 'https://github.com/Varadha9/BookSphere',
    featured: true,
    highlights: [
      'Every core e-commerce module is implemented using specific computer science data structures: HashMaps for cart/wishlist, Graph (Dijkstra) for delivery routing, BFS for related recommendations, and 0/1 Knapsack DP for bundle optimization.',
      'Implemented Supabase Auth supporting Email and Google OAuth with Row Level Security (RLS) policies across 6 PostgreSQL tables.',
      'Automated quality assurance with an end-to-end Selenium 4 and Cucumber BDD test suite.',
      'Deployed on Vercel with automated CI/CD pipeline integration.',
    ],
  },
  {
    title: 'Stockify',
    subtitle: 'Retail Inventory Android App',
    period: 'Aug 2024 – Nov 2024',
    desc: 'Offline-first native Android inventory application with barcode scanning, automated push alerts, and Material Design 3.',
    tech: ['Android (Java)', 'Room DB', 'ZXing Barcode', 'WorkManager', 'Material Design 3', 'GitHub Actions'],
    color: '#ff6584',
    githubUrl: 'https://github.com/Varadha9/Stockify',
    featured: true,
    highlights: [
      'Engineered an offline-first architecture with local persistence via Room DB and SQLite for zero-latency operations.',
      'Integrated ZXing barcode camera scanning for instantaneous item lookup, restocking, and point-of-sale checkout.',
      'Configured background WorkManager jobs to dispatch low-stock push notifications and schedule automatic CSV/JSON database backups.',
      'Built with Material Design 3 UI components and established a continuous build and lint pipeline using GitHub Actions.',
    ],
  },
  {
    title: 'Selenium CI/CD Automation Framework',
    subtitle: 'Enterprise Test Suite',
    period: 'Mar 2024 – May 2024',
    desc: 'Production-grade test automation framework built in Java and Selenium WebDriver, triggered on every commit via GitHub Actions.',
    tech: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'GitHub Actions', 'Page Object Model'],
    color: '#43e97b',
    githubUrl: 'https://github.com/Varadha9/selenium-cicd-pipeline',
    featured: false,
    highlights: [
      'Developed a modular test framework implementing the Page Object Model (POM) for clean maintenance and code reusability.',
      'Configured comprehensive test suites covering smoke testing, full regression, cross-browser compatibility, and REST API layers.',
      'Integrated with Maven and GitHub Actions to execute automated test runs on every pull request and push event.',
      'Generated detailed HTML execution reports with screenshots on test failure.',
    ],
  },
  {
    title: 'CyberScope-AI',
    subtitle: 'Real-Time WiFi Security & Analysis Platform',
    period: '2025',
    desc: '1st Place Hackathon winning network security and real-time WiFi auditing platform integrating 20+ specialized security tools.',
    tech: ['Python', 'Network Security', 'WiFi Auditing', 'FastAPI', 'Linux'],
    color: '#f7b731',
    githubUrl: 'https://github.com/Varadha9/CyberScope-AI',
    featured: true,
    highlights: [
      'Won 1st Place at Cybersecurity Hackathon 2025, MIT ADT University against competing engineering teams.',
      'Built a real-time security auditing and anomaly detection platform consolidating 20+ network analysis tools.',
      'Monitored wireless traffic, detected unauthorized access points, and provided actionable threat intelligence.',
    ],
  },
  {
    title: 'Travel Agency Management System',
    subtitle: 'Full-Stack MVC Booking Application',
    period: 'Jun 2024 – Aug 2024',
    desc: 'Node.js / Express / MySQL backend with RESTful CRUD APIs, EJS server-rendered templates, and middleware logging.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'EJS', 'MVC Architecture'],
    color: '#a55eea',
    githubUrl: 'https://github.com/Varadha9',
    featured: false,
    highlights: [
      'Architected a full-featured travel agency platform based on MVC (Model-View-Controller) design pattern.',
      'Created RESTful endpoints with comprehensive validation for packages, customer bookings, and payment status.',
      'Designed normalized relational MySQL database schemas with foreign key constraints and transactional integrity.',
    ],
  },
];

export const certs: Cert[] = [
  {
    title: 'IBM DevOps & Software Engineering Professional Certificate',
    issuer: 'IBM · Coursera',
    icon: '🐳',
    skills: 'DevOps, CI/CD, Docker, Kubernetes, Microservices, Agile',
  },
  {
    title: 'Node.js, Express.js & MongoDB Backend Development',
    issuer: 'IBM · Coursera',
    icon: '⚡',
    skills: 'Backend Architecture, REST APIs, NoSQL, JWT, Asynchronous JS',
  },
  {
    title: 'Backend Development & API Creation',
    issuer: 'Packt · Coursera',
    icon: '🛠️',
    skills: 'RESTful Web Services, API Design, Microservices, Security',
  },
  {
    title: 'Selenium Automation Testing',
    issuer: 'Coursera',
    icon: '🧪',
    skills: 'Selenium WebDriver, TestNG, Automated Testing, QA Frameworks',
  },
];

export const achievements: Achievement[] = [
  {
    title: '1st Place — Cybersecurity Hackathon 2025',
    badge: '🏆 Winner',
    desc: 'MIT ADT University — Built a real-time WiFi security platform integrating 20+ specialized security tools.',
    year: '2025',
  },
  {
    title: 'Smart India Hackathon (SIH) Internal Finalist',
    badge: '🏅 Finalist',
    desc: 'Selected among top university teams for the national-level government innovation challenge.',
    year: '2024',
  },
  {
    title: 'Class Representative (2 Consecutive Years)',
    badge: '🎓 Leadership',
    desc: 'MIT School of Computing — Serving as liaison between 60+ engineering students and faculty.',
    year: '2023–Present',
  },
  {
    title: 'Authored Research Paper',
    badge: '📄 Research',
    desc: 'Paper on "NLP-Driven Ikigai-Based Career Recommendation Model"; targeting AIED / RecSys conference.',
    year: '2025',
  },
];

export const info = {
  name: 'Varad Vikas Mandhare',
  role: 'Backend Engineer · Mobile Developer · DevOps',
  tagline: 'Building scalable backend APIs, cloud-native services & mobile apps',
  location: 'Pune, Maharashtra, India',
  phone: '+91-8806438164',
  email: 'varadmandhare924@gmail.com',
  github: 'https://github.com/Varadha9',
  githubUsername: 'Varadha9',
  linkedin: 'https://www.linkedin.com/in/varad-mandhare-851893291/',
  linkedinHandle: 'varad-mandhare',

  summary:
    'B.Tech IT student specialising in backend engineering, REST APIs, DevOps, and test automation. Proven track record building JWT-secured APIs, containerised services, and CI/CD pipelines across 5+ production-style projects. Quick learner who takes full ownership from design to deployment.',

  bio:
    "I am a passionate backend and mobile software engineer currently pursuing B.Tech in Information Technology at MIT School of Computing, MIT ADT University, Pune (CGPA 7.59 / 10). I specialize in architecting secure, scalable RESTful APIs, implementing robust CI/CD automation pipelines, and building user-centric native and cross-platform mobile apps. From winning 1st Place in hackathons to authoring research papers in NLP-driven recommender systems, I thrive on taking full ownership of projects from design to production.",

  education: {
    degree: 'B.Tech, Information Technology',
    institute: 'MIT School of Computing, MIT ADT University, Pune',
    period: '2023 – 2027',
    cgpa: '7.59 / 10',
    specialisation: 'Software & Mobile App Development',
  },

  stats: [
    { val: '6+', label: 'Projects' },
    { val: '24+', label: 'Tech Skills' },
    { val: '4', label: 'Certifications' },
    { val: '1st', label: 'Hackathon Win' },
  ],

  quickPills: [
    'Spring Boot & Node.js',
    'FastAPI & Python',
    'Docker & CI/CD',
    'Selenium BDD',
    'Android & React Native',
    'PostgreSQL & MongoDB',
  ],

  contact: [
    {
      icon: '📧',
      title: 'Email',
      label: 'varadmandhare924@gmail.com',
      url: 'mailto:varadmandhare924@gmail.com',
      action: 'Send Email',
    },
    {
      icon: '📞',
      title: 'Phone',
      label: '+91-8806438164',
      url: 'tel:+918806438164',
      action: 'Call Now',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      label: 'linkedin.com/in/varad-mandhare',
      url: 'https://www.linkedin.com/in/varad-mandhare-851893291/',
      action: 'Connect',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      label: 'github.com/Varadha9',
      url: 'https://github.com/Varadha9',
      action: 'Follow / Repos',
    },
    {
      icon: '📍',
      title: 'Location',
      label: 'Pune, Maharashtra, India',
      url: 'https://maps.google.com/?q=Pune,India',
      action: 'View City',
    },
  ],
};
