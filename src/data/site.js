export const siteConfig = {
  name: 'Lokesh Sereddy',
  roles: ['Backend Engineer', 'AI Engineer', 'ML Engineer'],
  hero: {
    heading: 'Building Scalable Backend Systems & Intelligent AI Solutions.',
    intro:
      "I'm a Computer Science Engineering student passionate about backend engineering, artificial intelligence, and machine learning. I enjoy developing scalable REST APIs, integrating LLM-powered applications, working with cloud technologies, and solving algorithmic problems.",
  },
  social: {
    github: 'https://github.com/SEREDDYLOKESH',
    linkedin: 'https://www.linkedin.com/in/lokesh-sereddy/',
    leetcode: 'https://leetcode.com/u/Sereddy_Lokesh/',
  },
  contact: {
    email: 'sereddylokesh980@gmail.com',
    phone: '+91 7013924146',
    github: 'https://github.com/SEREDDYLOKESH',
    linkedin: 'https://www.linkedin.com/in/lokesh-sereddy/',
    leetcode: 'https://leetcode.com/u/Sereddy_Lokesh/',
  },
  // Place your uploaded resume PDF at public/resume.pdf (or update this path).
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Lokesh_Sereddy_Resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'B.Tech Computer Science Engineering student at KLEF Deemed to be University.',
  ],
  highlights: [
    'CGPA: 9.27/10',
    'Strong foundation in Data Structures and Algorithms.',
    'Backend development using Python, FastAPI, and Flask.',
    'Database management using PostgreSQL, SQL, and MySQL.',
    'Cloud storage and infrastructure using AWS.',
    'Experience building LLM-powered applications.',
    'Exploring machine learning and deep learning with PyTorch.',
  ],
}

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Backend Development',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS S3', 'Docker'],
  },
  {
    title: 'Artificial Intelligence & LLM',
    skills: ['LLM Application Development', 'LLMs', 'Generative AI'],
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: ['PyTorch'],
  },
  {
    title: 'Computer Science Fundamentals',
    skills: ['Data Structures', 'Algorithms'],
  },
]

export const projects = [
  {
    title: 'AI Multi-Language Code Converter & Explainer',
    description:
      'Developed scalable RESTful APIs using Flask and integrated Ollama LLMs, including DeepSeek Coder, CodeLlama, Mistral, and Qwen Coder, for multi-language code conversion and AI-powered explanations.',
    features: [
      'Multi-language code conversion.',
      'AI-powered code explanations.',
      'JWT authentication.',
      'PostgreSQL user management.',
      'Conversion history and chat records.',
    ],
    techStack: ['Python', 'Flask', 'REST APIs', 'PostgreSQL', 'Ollama', 'JWT'],
    // Replace with the actual repository URL.
    githubUrl: 'https://github.com/your-username/ai-code-converter',
  },
  {
    title: 'Cloud-Based File Sharing System',
    description:
      'Developed RESTful APIs using FastAPI for secure file upload, download, sharing, and file management, with JWT-based authentication and access control.',
    features: [
      'Secure file upload and download.',
      'AWS S3 integration.',
      'JWT-based authentication.',
      'PostgreSQL metadata management.',
      'File-sharing permissions.',
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'AWS S3', 'JWT', 'Docker'],
    // Replace with the actual repository URL.
    githubUrl: 'https://github.com/your-username/cloud-file-sharing-system',
  },
]

export const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institution: 'KLEF Deemed to be University, Andhra Pradesh',
    period: 'July 2023 – Present',
    score: 'CGPA: 9.27/10',
  },
  {
    degree: 'Intermediate – MPC',
    institution: 'Vidwan Junior College, Andhra Pradesh',
    period: 'June 2021 – April 2023',
    score: 'CGPA: 9.41/10',
  },
]

export const certifications = [
  'Linguaskill Cambridge Certification – May 2026.',
  'Certificate of Merit – Naukri Campus Young Turks 2026 (HCLTech) – October 2026.',
]

export const achievements = {
  highlights: [
    {
      title: '150+ Problems Solved',
      description:
        'Solved 150+ Data Structures and Algorithms problems on LeetCode.',
    },
    {
      title: 'Top 30,000 Nationwide',
      description:
        'Ranked in the Top 30,000 nationwide in Naukri Campus & HCLTech Young Turks.',
    },
  ],
  leetcode: {
    username: 'Sereddy_Lokesh',
    profileUrl: 'https://leetcode.com/u/Sereddy_Lokesh/',
    stat: '150+ Problems Solved',
  },
}
