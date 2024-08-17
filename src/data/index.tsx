import {
  AboutData,
  FooterType,
  HomeData,
  NavItem,
  PortfolioItem,
  QualificationsData,
  ServicesData,
  SkillCategoryType,
} from "../types";

export const footerData: FooterType = {
  name: "Mohammad Salah",
  title: "Full-Stack Web Developer",
  links: [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact me" },
  ],
  socials: [
    {
      href: "https://www.linkedin.com/in/mohammad-salah-532588233/",
      iconClass: "uil uil-linkedin",
    },
    { href: "https://github.com/MOSALAH-CODE", iconClass: "uil uil-github" },
    { href: "https://wa.link/a2guid", iconClass: "uil uil-whatsapp-alt" },
  ],
};

export const aboutData: AboutData = {
  imageSrc: "assets/images/frontend.jpeg",
  description:
    "I'm a Computer Engineer, graduated from Marmara University, with over three years of experience in frontend and backend development. I'm passionate about web development and have a proven track record of solving complex problems and delivering user-friendly solutions across multiple companies.",
  infoItems: [
    { title: "03+", name: "Years of \nExperience" },
    { title: "20+", name: "Completed \nProjects" },
    { title: "03", name: "Companies \nWorked" },
  ],
  cvLink: "assets/pdf/CV.pdf",
};


export const navItems: NavItem[] = [
  { href: "#home", iconClass: "uil-estate", text: "Home" },
  { href: "#about", iconClass: "uil-user", text: "About" },
  { href: "#skills", iconClass: "uil-file-alt", text: "Skills" },
  { href: "#services", iconClass: "uil-briefcase-alt", text: "Services" },
  { href: "#portfolio", iconClass: "uil-scenery", text: "Portfolio" },
  { href: "#contact", iconClass: "uil-message", text: "Contact me" },
];
export const homeData: HomeData = {
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/mohammad-salah-532588233/",
      iconClass: "uil uil-linkedin-alt",
    },
    {
      href: "https://github.com/MOSALAH-CODE",
      iconClass: "uil uil-github-alt",
    },
    { href: "https://wa.link/a2guid", iconClass: "uil uil-whatsapp" },
  ],
  imageSrc: "assets/images/perfil_new1.png",
  dataSections: {
    title: "Mohammad Salah",
    subtitle: "Full Stack Web Developer",
    description:
      "A Full Stack Web Developer with extensive experience in both frontend and backend development. I am dedicated to producing high-quality work and delivering robust solutions across various web projects.",
    contactLink: "#contact",
  },
  scrollTarget: "#about",
};


export const portfolioItems: PortfolioItem[] = [
  {
    id: 7,
    imgSrc: "assets/images/dicom_viewer.png",
    title: "DICOM Web Viewer",
    description:
      "A web-based viewer for medical imaging data in the DICOM format.",
    links: [],
    modalContent: [
      "Developed the user interface for handling and displaying complex medical images.",
      "Ensured compatibility with various browsers and devices.",
      "Focused on performance and efficient rendering of images.",
      "Collaborated with medical professionals to refine the user interface.",
    ],
  },
  {
    id: 1,
    imgSrc: "assets/images/alifbee_web.png",
    title: "Alifbee",
    description:
      "A comprehensive platform for educational and entertainment purposes, accessible via mobile applications and websites.",
    links: [{"title":"Platform", "href": "https://app.alifbee.com/"}],
    modalContent: [
      "Developed and maintained backend services using Django.",
      "Integrated FastAPI for enhanced performance.",
      "Created dynamic user interfaces using React for the website.",
      "Focused on scalability and performance to handle a large user base.",
    ],
  },
  {
    id: 2,
    imgSrc: "assets/images/alifbee_kids.png",
    title: "Alifbee Kids",
    description:
      "A specialized mobile application targeting children's educational content.",
    links: [{"title": 'Website', "href": 'https://alifbeekids.com/en'}],
    modalContent: [
      "Built backend services using Django.",
      "Ensured secure and efficient content management.",
      "Optimized for mobile devices.",
      "Collaborated with a cross-functional team to deliver the project.",
    ],
  },
  {
    id: 3,
    imgSrc: "assets/images/crm.png",
    title: "CRM",
    description:
      "A customer relationship management system designed to streamline business processes and client interactions.",
    links: [],
    modalContent: [
      "Implemented backend using PHP Laravel.",
      "Developed the user interface with React and Blade.",
      "Focused on data handling and business logic.",
      "Enhanced user experience through responsive design.",
    ],
  },
  {
    id: 4,
    imgSrc: "assets/images/adam.png",
    title: "Adam",
    description:
      "A data entry system used to manage and input data for the primary projects, Alifbee and Alifbee Kids.",
    links: [],
    modalContent: [
      "Developed backend with PHP Laravel.",
      "Handled data management and integration with Alifbee and Alifbee Kids.",
      "Created a user-friendly interface using Blade.",
      "Ensured accurate and efficient data entry processes.",
    ],
  },
  {
    id: 8,
    imgSrc: "assets/images/ai_chatbot.png",
    title: "AI Chatbot Application",
    description:
      "A comprehensive AI-powered chatbot application developed using React Native, GPT models, and DALL·E, created as a graduation project. The chatbot integrates emotion detection, text classification, and image generation for interactive and character-based conversations.",
    links: [],
    modalContent: [
      "Integrated GPT models for natural language processing, enabling the chatbot to detect emotions, classify user inputs, and generate contextually accurate responses.",
      "Implemented DALL·E for image generation based on user prompts, enhancing the interactive experience with visual content.",
      "Designed a dynamic character system, allowing the chatbot to fully embody specific personas with consistent behavior and historical context.",
      "Included functionality for users to create their own characters and chat with them, as well as interact with popular figures.",
      "Ensured smooth performance and seamless integration of complex API calls across multiple mobile platforms.",
      "Implemented recursive data handling functions to manage and present nested information in a structured manner."
    ],
  }
  
  // {
  //   id: 5,
  //   imgSrc: "assets/images/lms.png",
  //   title: "LMS (Learning Management System)",
  //   description:
  //     "An educational platform for managing and delivering online learning content.",
  //   links: [{"title":"", "href": "https://app.alifbee.com/"}],
  //   modalContent: [
  //     "Utilized PHP Laravel for backend development.",
  //     "Implemented interactive user interfaces with React.",
  //     "Focused on user management and content delivery.",
  //     "Ensured scalability and security of the platform.",
  //   ],
  // },
  // {
  //   id: 6,
  //   imgSrc: "assets/images/alifbee_academy.png",
  //   title: "Alifbee Academy",
  //   description:
  //     "An extension of the Alifbee platform focused on providing educational resources and tools.",
  //   links: [{"title":"", "href": "https://app.alifbee.com/"}],
  //   modalContent: [
  //     "Developed backend with PHP Laravel.",
  //     "Designed frontend with React and Blade.",
  //     "Enhanced user experience with modern, responsive design.",
  //     "Supported various educational features and tools.",
  //   ],
  // }
];

export const qualificationsData: QualificationsData = {
  qualifications: {
    work: [
      {
        title: "Game Developer",
        subtitle: "Turkey - Intern at Wolves Interactive",
        period: "2022",
      },
      {
        title: "Front-End Web Developer",
        subtitle: "Turkey - Full-time - Alifbee Company",
        period: "2022 - 2023",
      },
      {
        title: "Back-End Web Developer",
        subtitle: "Turkey - Full-time - Alifbee Company",
        period: "2023 - 2024",
      },
      {
        title: "Full-Stack Web Developer",
        subtitle: "Freelance",
        period: "2023 - Present",
      },
      {
        title: "Full-Stack Web Developer",
        subtitle: "Turkey - Full-time - Alifbee Company",
        period: "2024 - Present",
      }
    ],
    education: [
      {
        title: "Dammam School",
        subtitle: "Saudi Arabia - Secondary School",
        period: "2014 - 2017",
      },
      {
        title: "İTO 15 Temmuz Şehitleri AİHL",
        subtitle: "Turkey - High School",
        period: "2017 - 2020",
      },
      {
        title: "Computer Engineer",
        subtitle: "Marmara University",
        period: "2020 - 2024",
      },
    ],
  },
};

export const servicesData: ServicesData[] = [
  {
    id: "api-development",
    icon: "uil uil-server",
    title: "API Development",
    description: [
      "Design and develop robust APIs to facilitate seamless integration and communication between systems.",
      "Ensure APIs are scalable, secure, and efficiently handle various data operations.",
      "Provide documentation and support for easy implementation and use.",
    ],
  },
  {
    id: "web-development",
    icon: "uil-brackets-curly",
    title: "Web Development",
    description: [
      "Customized websites designed and developed to meet your unique needs.",
      "Expertise in both frontend and backend development for a seamless user experience.",
      "Optimization for search engines and fast loading times.",
      "Ongoing maintenance and support to ensure websites remain secure and up-to-date.",
    ],
  },
  {
    id: "full-stack-development",
    icon: "uil-server-network",
    title: "Full Stack Development",
    description: [
      "Comprehensive development solutions covering both frontend and backend aspects.",
      "Proficient in various technologies and frameworks to deliver end-to-end solutions.",
      "Focus on creating scalable, efficient, and high-performance applications.",
      "Ensure cohesive and integrated development from initial design to final deployment.",
    ],
  }
];


export const skillCategories: SkillCategoryType[] = [
  {
    id: "backend-development",
    title: "Backend Development",
    subtitle: "More than 2 years",
    icon: "uil-server",
    skills: [
      { name: "Laravel - PHP", percentage: "90%" },
      { name: "Django - Python", percentage: "90%" },
      { name: "FastAPI - Python", percentage: "85%" },
      { name: "Next.js", percentage: "70%" },
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    subtitle: "More than 2 years",
    icon: "uil-brackets-curly",
    skills: [
      { name: "React", percentage: "90%" },
      { name: "Blade", percentage: "85%" },
      { name: "HTML", percentage: "90%" },
      { name: "CSS & Tailwind & Bootstrap", percentage: "80%" },
      { name: "JavaScript & TypeScript", percentage: "80%" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "More than 3 years",
    icon: "uil-database",
    skills: [
      { name: "MySQL", percentage: "85%" },
      { name: "SQL Server", percentage: "75%" },
      { name: "Firebase", percentage: "75%" },
      { name: "AWS DynamoDB", percentage: "75%" },
    ],
  },
  {
    id: "ai-development",
    title: "AI Development",
    subtitle: "More than 1 year",
    icon: "uil-robot",
    skills: [
      { name: "GPT-3 Prompt Engineering", percentage: "75%" },
      { name: "Natural Language Processing (NLP)", percentage: "70%" },
      { name: "AI Chatbot Development", percentage: "70%" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "",
    icon: "uil-server-network",
    skills: [
      { name: "Docker", percentage: "75%" },
      { name: "Jenkins (CI/CD)", percentage: "65%" },
      { name: "Kubernetes", percentage: "60%" },
      { name: "Terraform", percentage: "55%" },
      { name: "AWS", percentage: "70%" }
    ],
  },
  {
    id: "version-control",
    title: "Version Control",
    subtitle: "",
    icon: "uil-gitlab",
    skills: [
      { name: "Git", percentage: "80%" },
      { name: "GitHub", percentage: "" },
      { name: "Bitbucket", percentage: "" },
      { name: "Plastic SCM", percentage: "" },
    ],
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Development",
    subtitle: "More than 1 year",
    icon: "uil-mobile-android",
    skills: [
      { name: "Android (Java)", percentage: "75%" },
      { name: "React Native", percentage: "70%" },
    ],
  },
  {
    id: "desktop-applications",
    title: "Desktop Applications",
    subtitle: "More than 2 years",
    icon: "uil-desktop",
    skills: [
      { name: "JavaFX - Java", percentage: "80%" },
      { name: "Qt - Java", percentage: "70%" },
      { name: "Tkinter - Python", percentage: "75%" },
    ],
  },
  {
    id: "game-development",
    title: "Game Development",
    subtitle: "More than 1 year",
    icon: "uil-icons",
    skills: [
      { name: "Unity Engine", percentage: "70%" },
      { name: "C#", percentage: "60%" },
      {
        name: "Game Assets",
        percentage: "50%",
      },
    ],
  },
];
