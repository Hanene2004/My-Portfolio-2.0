import {
  backend,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  code,
  concepts,
  creator,
  dataflow,
  designs,
  freecodecamp,
  gomycode,
  hp,
  ideas,
  linkedin,
  mobile,
  postpal,
  simplilearn,
  smartup,
  taskquest,
  vitaltrack,
  web,
  ministre,
  soroubat,
  plasteel,
  ministreCert,
  soroubatCert,
  plasteelCert,
  gomycodeCert,
  manara,
  manaraCert,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Database Management",
    icon: backend,
  },
  {
    title: "Mobile App Development",
    icon: creator,
  },
  {
    title: "Data Analytics",
    icon: concepts,
  },
  {
    title: "Graphic Design",
    icon: designs,
  },
  {
    title: "ERP System",
    icon: ideas,
  },
  {
    title: "Automation",
    icon: code,
  },
];

const achievements = [
  {
    title: ["Big Data & Machine Learning"],
    company_name: "Go My Code",
    icon: gomycode,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Explored Big Data ecosystems and processing frameworks",
      "Developed Machine Learning models for predictive analysis",
      "Applied data science techniques to solve complex problems",
    ],
    images: [gomycodeCert],
    credential: ["#"],
  },
  {
    title: ["Data Science & Analytics"],
    company_name: "HP LIFE Foundation",
    icon: hp,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Mastered fundamental data analysis methodologies: collection, cleaning, and interpretation",
      "Utilized analytical tools to identify patterns, trends, and business opportunities",
      "Explored data-driven strategies and ethical considerations in data science",
    ],
    images: [cert2],
    credential: ["#"],
  },
  {
    title: ["Python for Beginners"],
    company_name: "Simplilearn SkillUp",
    icon: simplilearn,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Mastered Python fundamentals: syntax, data types, and control flow",
      "Advanced concepts: OOP principles, scripting, and performance optimization",
      "Hands-on with NumPy, Pandas, Matplotlib, and Scikit-Learn for data analysis",
      "Practical applications including web scraping and real-world problem solving",
    ],
    images: [cert1],
    credential: ["#"],
  },
  {
    title: ["B1 English Intermediate"],
    company_name: "SmartUp Academy Tunisia",
    icon: smartup,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Strengthened communication skills and confidence in English",
      "Improved grammar, vocabulary, listening, and speaking practice",
      "Gained a solid foundation for academic and professional growth",
    ],
    images: [cert5],
    credential: ["#"],
  },
  {
    title: ["Career Skills in Data Analytics"],
    company_name: "LinkedIn Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Structured overview of the data analytics process and career paths",
      "Business Intelligence fundamentals and data-driven decision making",
      "Techniques for sourcing, cleaning, and organizing analytical data",
      "Data visualization and storytelling using charts and dashboards",
    ],
    images: [cert3],
    credential: ["#"],
  },
  {
    title: ["Data Visualization V8"],
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Mastered data visualization concepts using D3.js, TopoJSON, and AJAX.",
      "Built five data-driven projects: Bar Chart, Scatterplot Graph, Heat Map, Choropleth Map, and Treemap Diagram.",
      "Learned to process JSON data and manipulate the DOM through data-driven transitions.",
      "Overcame challenges in handling geographic data and color scales for Choropleth maps.",
    ],
    images: [cert6],
    credential: ["https://lnkd.in/dA6HYbNg"],
  },
  {
    title: ["Azure: AI Fundamentals"],
    company_name: "Manara",
    icon: manara,
    iconBg: "#E6DEDD",
    date: "Feb 2026",
    points: [
      "Use AI responsibly to solve real-world problems.",
      "Knowledge of AI & Azure AI Services, Generative AI with Azure OpenAI.",
      "Deep understanding of NLP, Computer Vision, and Machine Learning Fundamentals.",
      "Cognitive AI Workloads & Responsible AI Principles.",
    ],
    images: [manaraCert],
    credential: ["#"],
  },
];


const projects = [
  {
    name: "VitalTrack Pro",
    description:
      "AI-Powered Nutrition & Performance Intelligence Platform. Autonomous nutritional intelligence with real-time metabolic insights and ML-driven behavioral analysis for high-performance longevity. Built with React, TypeScript, and FastAPI.",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Google Gemini AI",
        color: "violet-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: vitaltrack,
    images: [vitaltrack],
    source_code_link: "https://github.com/Hanene2004/VitalTrack-Pro",
    live_demo_link: "https://vital-track-pro.vercel.app/",
    metrics: {
      stars: 42,
      forks: 12,
      views: "1.5K",
    },
    features: [
      "Gemini-Powered Analysis - Automatic meal breakdown from text, voice, or images",
      "Coherence Score - ML-based habit regularity measurement",
      "Risk Day Detection - Behavioral anomaly identification",
      "Real-time Metabolic Tracking - BMR and TDEE calculation",
      "Glassmorphism design with 60fps animations",
    ],
  },
  {
    name: "Post Advisor AI",
    description:
      "Advanced AI-Powered Social Media Content Optimizer & Analytics Platform. Create high-engagement social media posts with platform-specific guidance, AI-driven content analysis, and performance prediction.",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "violet-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "orange-text-gradient",
      },
    ],
    image: postpal,
    images: [postpal],
    source_code_link: "https://github.com/Hanene2004/post-pal-ai",
    live_demo_link: "https://post-pal-ai.vercel.app/",
    metrics: {
      stars: 38,
      forks: 8,
      views: "1.2K",
    },
    features: [
      "AI Creation Suite - Hook generator, tone transformer, and post rewriter",
      "Engagement Explainer - Predicted performance with actionable 'Quick Wins'",
      "Platform Rules Engine - Specific best practices for Instagram, LinkedIn, and TikTok",
      "Smart Analytics - Performance trends and platform-specific insights",
      "Security-First - Supabase Auth and Row Level Security for data privacy",
    ],
  },
  {
    name: "MultiHub Analytics",
    description:
      "Full-stack data analysis platform combining an interactive web interface and a scientific calculation engine in Python. MultiHub Analytics allows importing datasets, analyzing them, cleaning them, creating predictive models and sharing results.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "violet-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "orange-text-gradient",
      },
    ],
    image: dataflow,
    images: [dataflow],
    source_code_link: "https://github.com/Hanene2004/DataFlow",
    live_demo_link: "https://multi-hub-analytics.vercel.app/",
    metrics: {
      stars: 25,
      forks: 5,
      views: "800",
    },
    features: [
      "Smart Import - Support for CSV and Excel with intelligent column detection",
      "Scientific Engine - Automated statistical analysis and multivariate regressions",
      "Data Cleaning - Deduplication, imputation, and automated data processing",
      "Predictive Modeling - Built-in Scikit-Learn integration for quick insights",
      "Interactive Dashboards - Modern visualizations with Recharts and Plotly",
    ],
  },
  {
    name: "TaskQuest AI",
    description:
      "Gamified productivity platform that turns task management into an engaging RPG experience. Track tasks, habits, and finances while earning XP, unlocking levels, and competing with friends.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "violet-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
    ],
    image: taskquest,
    images: [taskquest],
    source_code_link: "https://github.com/Hanene2004/TaskQuest-AI",
    live_demo_link: "https://task-quest-ai.vercel.app/",
    metrics: {
      stars: 45,
      forks: 15,
      views: "1.1K",
    },
    features: [
      "Gamified Workflow - Earn XP, unlock levels, badges, and rewards for completing tasks",
      "All-in-One Tracking - Manage tasks, habits, and finances in a unified dashboard",
      "AI Intelligence - Automated task tagging and performance insights using Python",
      "Social Motivation - Leaderboards and progress comparison with friends",
      "Secure Infrastructure - Supabase integration for reliable data storage and auth",
    ],
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Ministry of Development, Investment and International Cooperation _ TUNISIA",
    icon: ministre,
    iconBg: "#383E56",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Developed Muatamad.tn, a comprehensive platform designed to promote and support Tunisian merchants.",
      "Built an administrative dashboard for content management and implemented a merchant directory system.",
      "Created statistical reporting modules using React, TypeScript, and MySQL.",
    ],
    image: ministreCert,
  },
  {
    title: "Full-Stack Development Intern",
    company_name: "SOROUBAT",
    icon: soroubat,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed a secure file sharing platform for company employees.",
      "Created a system enabling document upload, download, and efficient organization.",
      "Built an admin dashboard for managing users, files, and access permissions.",
      "Implemented role-based access control to ensure data security using Angular and MySQL.",
    ],
    image: soroubatCert,
  },
  {
    title: "Web Development Intern",
    company_name: "Plasteel Tunisie",
    icon: plasteel,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developed a stock management system using Microsoft Excel to track entries/exits and calculate stock levels.",
      "Utilized advanced formulas, pivot tables, and conditional formatting for intuitive monitoring.",
      "Completed a mini data visualization project using Power BI to analyze Excel data.",
      "Created interactive dashboards with dynamic charts and KPIs to visualize trends and performance.",
    ],
    image: plasteelCert,
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

const education = [
  {
    institution: "Iset Tataouine",
    degree: "Bachelor's Degree in IT, Computer Science",
    duration: "2023 - 2026",
    description: "Focused on software development, data science, and AI.",
    iconBg: "#383E56",
  },
  {
    institution: "Mourouj 1 High School",
    degree: "High School Diploma, Experimental science",
    duration: "2023",
    description: "Solid foundation in scientific principles and experimental methodologies.",
    iconBg: "#E6DEDD",
  },
];

const softSkills = [
  {
    name: "Problem Solving",
    category: "Critical Thinking",
    description: "Breaking down complex challenges into elegant, efficient, and scalable technical solutions.",
    span: "md:col-span-2 md:row-span-2",
    iconColor: "text-blue-500",
  },
  {
    name: "Design graphique",
    category: "Visual Arts",
    description: "Creating premium digital experiences with a focus on aesthetics, typography, and user-centric design.",
    span: "md:col-span-2 md:row-span-1",
    iconColor: "text-cyan-500",
  },
  {
    name: "Teamwork",
    category: "Collaboration",
    description: "Synergizing with diverse teams to achieve shared objectives through clear communication.",
    span: "md:col-span-1 md:row-span-1",
    iconColor: "text-purple-500",
  },
  {
    name: "Stress Management",
    category: "Resilience",
    description: "Ensuring stability and focused execution even in the most demanding high-pressure environments.",
    span: "md:col-span-1 md:row-span-1",
    iconColor: "text-pink-500",
  },
  {
    name: "Adaptability",
    category: "Flexibility",
    description: "Quickly adjusting to new technologies and evolving project requirements with a positive mindset.",
    span: "md:col-span-1 md:row-span-1",
    iconColor: "text-orange-500",
  },
  {
    name: "Technical Communication",
    category: "Communication",
    description: "Articulating complex technical concepts into clear, actionable insights for all stakeholders.",
    span: "md:col-span-1 md:row-span-1",
    iconColor: "text-green-500",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Hanene2004",
    iconName: "AiFillGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanane-ghabbara-056047296/",
    iconName: "AiFillLinkedin",
  },
];

const milestones = [
  {
    date: "2023",
    title: "The Spark",
    description: "Started my journey in Computer Science, discovering the power of code at Iset Tataouine.",
    icon: ideas,
  },
  {
    date: "2024",
    title: "First Fullstack Steps",
    description: "Built my first complete applications using React and Laravel, mastering the bridge between frontend and backend.",
    icon: code,
  },
  {
    date: "2025",
    title: "Real World Impact",
    description: "Completed key internships at Soroubat and the Ministry of Investment, delivering professional digital platforms.",
    icon: web,
  },
  {
    date: "2026",
    title: "Data & AI Vision",
    description: "Focusing on Junior Data Science and AI integration, turning complex data into actionable insights.",
    icon: concepts,
  },
];

export { achievements, experiences, projects, services, words, education, socialLinks, softSkills, milestones };
