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
  title: "Web Developer",
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
  imageSrc: "/assets/images/frontend.jpeg",
  description:
    "Motivated 4th-year computer engineering student at Marmara University, passionate about web development, seeking a challenging internship to enhance skills. With extensive experience as a game developer intern and a track record of successful web projects, I bring valuable insights in interactive design and problem-solving.",
  infoItems: [
    { title: "01+", name: "Year of \n experience" },
    { title: "10+", name: "Completed \n projects" },
    { title: "01", name: "Company \n Worked" },
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
  imageSrc: "/assets/images/perfil.png",
  dataSections: {
    title: "Hi, I'm Mohammad",
    subtitle: "Web Developer",
    description:
      "High level experience in web development knowledge, producing quality work.",
    contactLink: "#contact",
  },
  scrollTarget: "#about",
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    imgSrc: "/assets/images/articles_app.png",
    title: "Dynamic Articles Web Application with PHP",
    description:
      "Designed and developed a dynamic web application using PHP...",
    githubLink: "https://github.com/MOSALAH-CODE/ArticlesApp",
    modalContent: [
      "Developed a web application using PHP.",
      "Allows users to create, edit, and manage articles.",
      "Implemented a robust user authentication system.",
      "Features include registration, login, and password reset functionalities.",
      "Ensured data security and user privacy through authentication.",
      "Utilized PHP for server-side scripting to process user requests, interact with the database, and generate dynamic HTML content.",
    ],
  },
  {
    id: 2,
    imgSrc: "/assets/images/articles_app.png",
    title: "2Dynamic Articles Web Application with PHP",
    description:
      "Designed and developed a dynamic web application using PHP...",
    githubLink: "https://github.com/MOSALAH-CODE/ArticlesApp",
    modalContent: [
      "Developed a web application using PHP.",
      "Allows users to create, edit, and manage articles.",
      "Implemented a robust user authentication system.",
      "Features include registration, login, and password reset functionalities.",
      "Ensured data security and user privacy through authentication.",
      "Utilized PHP for server-side scripting to process user requests, interact with the database, and generate dynamic HTML content.",
    ],
  },
];

export const qualificationsData: QualificationsData = {
  education: [
    {
      title: "Dammam School",
      subtitle: "Saudi Arabia - Secondary School",
      period: "2014 - 2017",
      isLast: false,
    },
    {
      title: "İTO 15 Temmuz Şehitleri AİHL",
      subtitle: "Turkey - High School",
      period: "2017 - 2020",
      isLast: false,
    },
    {
      title: "Computer Engineer",
      subtitle: "Marmara University",
      period: "2020 - 2024",
      isLast: true,
    },
  ],
  work: [
    {
      title: "Game Developer",
      subtitle: "Turkey - Intern at Wolves Interactive",
      period: "2022",
      isLast: false,
    },
    {
      title: "Web Developer",
      subtitle: "Freelance - Online",
      period: "2023",
      isLast: true,
    },
  ],
};

export const servicesData: ServicesData[] = [
  {
    id: "web-development",
    icon: "uil uil-web-grid",
    title: "Web Development",
    description: [
      "Customized websites designed and developed to meet your unique needs.",
      "Optimize websites for search engines and fast loading times.",
      "Ongoing maintenance and support for smooth, secure, and up-to-date websites.",
    ],
  },
  {
    id: "game-development",
    icon: "uil uil-icons",
    title: "Game Development",
    description: [
      "Immersive and engaging games for PC and mobile platforms.",
      "Captivating designs and interactive elements for visually stunning experiences.",
      "Robust mechanics and intuitive controls for challenging yet enjoyable gameplay.",
      "Optimize performance and provide post-launch support for bug-free gaming.",
    ],
  },
  {
    id: "desktop-development",
    icon: "uil uil-desktop",
    title: "Desktop Development",
    description: [
      "Develop robust and tailored desktop applications.",
      "User-friendly interfaces to enhance productivity.",
      "Powerful functionalities for streamlined processes and efficiency.",
      "Compatibility, performance optimization, and ongoing support for reliable applications.",
    ],
  },
];

export const skillCategories: SkillCategoryType[] = [
  {
    id: "web-development",
    title: "Web development",
    subtitle: "More than 1 year",
    icon: "uil-brackets-curly",
    skills: [
      { name: "PHP", percentage: "80%", className: "skills__php" },
      { name: "HTML", percentage: "90%", className: "skills__html" },
      { name: "CSS", percentage: "90%", className: "skills__css" },
      { name: "Javascript", percentage: "80%", className: "skills__js" },
      {
        name: "Databases and SQL",
        percentage: "85%",
        className: "skills__sql",
      },
    ],
  },
  {
    id: "game-development",
    title: "Game development",
    subtitle: "More than 2 years",
    icon: "uil-icons",
    skills: [
      { name: "Unity Engine", percentage: "70%", className: "skills__unity" },
      { name: "C#", percentage: "60%", className: "skills__csharp" },
      {
        name: "Game Assets",
        percentage: "50%",
        className: "skills__game-assets",
      },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    subtitle: "More than 4 years",
    icon: "uil-arrow",
    skills: [
      { name: "Java", percentage: "90%", className: "skills__java" },
      { name: "Python", percentage: "80%", className: "skills__python" },
      { name: "C", percentage: "70%", className: "skills__c" },
    ],
  },
];
