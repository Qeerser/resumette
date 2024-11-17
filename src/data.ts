export const fullVersionLink = "https://resume-qeerser.vercel.app/";
export const sourceLink = "https://github.com/Qeerser/resumette";

export const introData = {
  name: "Kanpasit Pothebungkarn",
  jobTitle: "Fullstack Software Engineer",
  phone: import.meta.env.DEV ? import.meta.env.VITE_PHONE : "",
  email: import.meta.env.DEV ? import.meta.env.VITE_EMAIL : "",
  github: "Qeerser",
  linkedin: "kanpasit-pothebungkarn",
  location: "Bangkok, Thailand",
  website: "qeerser.vercel.app",
};

export const objective = [
  { detail:'I am seeking a challenging position to enhance my coding skills. While I may lack experience and have much to learn, I am eager to embrace new challenges and acquire knowledge that will help me grow in many areas. I am fully committed to contributing to the development of various systems.'
  }]

export const technologies = [
  {
    section: "Languages",
    details: [
      "C++",
      "Python",     
      "JavaScript",
      "TypeScript",
      "SQL",
      "Go",
      "Java",
      "Node.js",
      "Scala",
    ],
  },
  {
    section: "Fullstack",
    details: [
      "React",
      "Next.js",
      "Vue.js",
      "TailwindCSS, ",
      "GORM",
      "DaisyUI",
    ],
  },
  {
    section: "Tools",
    details: [
      "Git",
      "Postman",
      "VSCode",
      "Eclipse"
      
    ],
  },
  {
    section: "Database",
    details: ["MySQL","PostgreSQL","MongoDB","DynamoDB"],
  }
  ,
  {
    section: "Other",
    details: ["AWS", "Docker", "Vercel","GitHub Action"],
  }
];

export const educations = [
  {
    head: "Princess Chulabhorn Science High School Loei (Middle School)",
    details:
      "B.Eng. Computer Engineering, 2016-2019 (GPAX 3.89)",
  },
  {
    head: "Princess Chulabhorn Science High School Loei (High School)",
    details:
      "B.Eng. Computer Engineering, 2019-2022 (GPAX 3.92)",
  },
  {
    head: "Chulalongkorn University",
    details:
      "B.Eng. Computer Engineering, 2022-Present (Expected May 2026) (GPAX 3.54)",
  },
];

export const coursework = [
  {
    head: "Programming & Software Development",
    details:
      "Computer Programming,  Algorithm Design, Programming Methodology, Programming Language Principles, Software Engineering",
  },
  {
    head: "Data Structures & Systems",
    details:
      "Introduction to Data Structure, Embedded System, Database System, Software Engineering, Computer System Architectures",
  },
  {
    head: "Other",
    details:
      "Bioinformatics, Introduction to Digital lmaging, ",
  }
];

export const workExperiences = [
  {
    position: "Backend Software Engineer Intern",
    company: "Agoda",
    url: "https://careersatagoda.com/",
    years: ["June 2024", "July 2024"],
    details: [
      "Technologies used: GitLab CI/CD, Nginx, Scala, Play Framework, MSSQL",
      "Migrated Finance Backoffice from Cspider VMs to PrivateCloud",
      "Migrated Generic Adjustment tool's scenarios data source from Hadoop to MSSQL",
      "Assessed the technical feasibility of integrating the Devstack internal tool into finance department repositories.",
    ],
  },
  {
    position: "Backend Developer",
    company: "Information System Development, Student Government",
    url: "https://isd.sgcu.in.th/",
    years: ["December 2023", "Present"],
    details: [
      "Technologies used: Go, GORM, PostgreSQL, Redis, S3, Docker, Kubernetes, gRPC, GitOps",
      "Led the development of the Freshy Orientation Web API for the Student Government (production 7,000 users)",
      "Led the development of Pet Adoption Web API for the Animal Welfare Club",
      "Initiated the backend onboarding process for new club members",
    ],
  },
  {
    position: "Fullstack Software Engineer Intern",
    company: "Agoda",
    url: "https://careersatagoda.com/",
    years: ["June 2023", "October 2023"],
    details: [
      "Technologies used: React, Redux, TypeScript, Jest, .NET, NUnit, MSSQL, Grafana",
      "Experimented with new features using A/B testing, measurements, and element tracking for thousands of users",
      "Delivered features that serve tens of thousands of property owners",
      "Created real-time dashboards for monitoring user behavior using Grafana, Superset (SQL)",
    ],
  },
];

export const activities = [
  {
    name: "22th Larngear Camp (2023)",
    details:
      "Introduction camp to the world of Engineering for high school students, organized by the Faculty of Engineering, Chulalongkorn University. I volunteered as staff.",
  },
  {
    name: "21th & 22th FunFueng Camp (2022,2023)",
    details:
      "Introduction camp to inspire high school students in rural areas about education and future studies, organized by the Faculty of Engineering, Chulalongkorn University. I volunteered as staff.",
  },
  {
    name: "51th & 52th Voluntary Engineering Student Camp (VESC) (2023,2024)",
    details:
      "A community service camp organized by the Engineering Student Club at Chulalongkorn University. It aims to contribute to society through development projects that combine engineering knowledge with social service. I volunteered as member.",
  },
];

export const projects = [
  { 
    name: "Todo List Manager",
 
    stack: "React, TypeScript, TailwindCSS, DaisyUI",
    details:
      "A to-do list app built with React and TypeScript, replicating the same functionality as a Vue.js version",
    url: "",
    github: "github.com/Qeerser/Todo-React-TS",
  },
  { 
    name: "To-Do List Web App",
    stack: "Vue.js, TailwindCSS, DaisyUI, JavaScript",
    details:
      "A to-do list app built with Vue.js to manage user interactions and app state, integrated with MockAPI to simulate a backend for real-time task storage and persistence without the need for a full server setup.",
    url: "",
    github: "github.com/Qeerser/Vue-todo",
  },
  { 
    name: "User Management Web App",
    stack: "HTML, JavaScript, CSS, ExpressJS, PostgreSQL",
    details:
      "Implemented full CRUD operations using Express.js for backend routing and PostgreSQL for data storage and retrieval.",
    url: "",
    github: "github.com/Qeerser/Vanilla-Web-Reg",
  },
  { 
    name: "Programming Methodology Final Project — May 2023",
    stack: "Java JavaFX",
    details:
      "Implemented a game as a final project using Java. The project included the knowledge of the uses of OOP and JavaFX",
    url: "",
    github: "github.com/Qeerser/Progmeth-project",
  },
  { 
    name: "Computer Engineering Essentials Project — April 2023",
    stack: "HTML, JavaScript, CSS, ExpressJS, DynamoDB",
    details:
      "Collaborated with a team to develop a fully functional website using HTML, JavaScript, and DynamoDB, demonstrating proficiency in REST APIs, frontend, and backend development.",
    url: "",
    github: "github.com/khajornritdacha/CEE-Final-Project-G2",
  },
];

export const interests = [
  	'Areas :  Anime , Manhwa , Basketball',
    "Games: RPG, Sandbox, MOBA, FPS ",
 ];

