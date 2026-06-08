import {
  nitk,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  echo,
  kosh,
  polkadot_dev_cli,
  hackathon_curation_agent,
  kudos,
  web3_marketing_hackathon,
  projectFin,
  projectRossum,
  projectLangsmith,
  projectGlean,
  projectPortainer,
  projectMonday,
  projectMieru,
  projectBenstay,
  projectSanka,
  nextgenSystems,
  monoya,
  gunosy,
  nssolutions,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiOracle,
  SiSupabase,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiVercel,
  SiIntellijidea,
  SiPhp,
  SiVuedotjs,
  SiRedux,
  SiExpress,
  SiFastapi,
  SiLaravel,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGithubactions,
  SiNginx,
  SiWordpress,
  SiHuggingface,
  SiZapier,
} from "react-icons/si";

import { FaHardHat, FaRust, FaRobot, FaLinux } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiGeminiFill, RiBrainLine } from "react-icons/ri";
import { TbApi, TbScan } from "react-icons/tb";

export const resumeLink =
  // "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
  "https://drive.google.com/file/d/1j7DBYsl_va685KO2oZ6Ho-1ZZHdjPp3I/view?usp=sharing";
export const repoLink = "https://yoshiaki-344i.vercel.app";

export const callToAction =
  "https://www.linkedin.com/in/yoshiaki-kitade-37677840b";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Singapore Institute of Technology",
    degree: "Bachelor of Technology",
    duration: "August 2012 - August 2016",
    content1: "Major: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Polkadot Blockchain Academy",
    degree: "",
    duration: "May 2016 - June 2016",
    content1:
      "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
// Career highlights from resume — aligned with full-stack & AI experience
export const achievements = [
  {
    id: "a-1",
    icon: nextgenSystems,
    event: "LLM Document Orchestration",
    position: "NextGen Systems · Sr Full Stack Engineer",
    content1:
      "Built AI document parsing with instructor.js and Zod validation across GPT-4, Claude, Gemini, and Grok.",
    content2:
      "Led cost-benefit analysis for LLM providers and vector stores to guide architecture decisions.",
    tags: ["Python", "OpenAI", "LLM", "RAG"],
  },
  {
    id: "a-2",
    icon: nextgenSystems,
    event: "Onboarding Flow Rebuild",
    position: "14% Completion Increase",
    content1:
      "Rebuilt a brittle signup flow across Next.js, Python APIs, and event tracking.",
    content2:
      "Resolved validation edge cases, duplicate accounts, and post-launch funnel blind spots.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    id: "a-3",
    icon: nextgenSystems,
    event: "AI Bid Matching Platform",
    position: "Full-Stack Delivery",
    content1:
      "Architected an AI-powered bid matching platform with Node.js, MongoDB, and React.",
    content2:
      "Deployed to DigitalOcean with a complete CI/CD pipeline implementation.",
    tags: ["MongoDB", "React", "Docker", "CI/CD"],
  },
  {
    id: "a-4",
    icon: monoya,
    event: "AI Business Automation",
    position: "monoya · Python Developer",
    content1:
      "Led AI automation platforms using React, FastAPI, and OpenAI APIs.",
    content2:
      "Applied pandas and Watson NLU to analyze customer satisfaction signals.",
    tags: ["FastAPI", "Python", "NLP", "AWS"],
  },
  {
    id: "a-5",
    icon: gunosy,
    event: "OCR & Workflow Automation",
    position: "Gunosy, Inc. · Software Developer",
    content1:
      "Automated manual operations with OCR processing and intelligent data extraction.",
    content2:
      "Built distributed workers with Celery, RabbitMQ, MySQL, and Django.",
    tags: ["Django", "Python", "OCR", "REST API"],
  },
  {
    id: "a-6",
    icon: nssolutions,
    event: "Enterprise Web Delivery",
    position: "NS Solutions Corp · Web Developer",
    content1:
      "Integrated Joomla, WordPress, and Drupal CMS platforms for client websites.",
    content2:
      "Delivered responsive, accessibility-focused UIs under tight contract timelines.",
    tags: ["JavaScript", "HTML/CSS", "WordPress", "UX"],
  },
];

// Skills from resume — Yoshiaki Kitade
export const skills = [
  {
    title: "Languages",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-3", icon: SiTypescript, name: "TypeScript" },
      { id: "pl-4", icon: SiPhp, name: "PHP" },
      { id: "pl-5", icon: DiMsqlServer, name: "SQL" },
      { id: "pl-6", icon: AiFillHtml5, name: "HTML" },
      { id: "pl-7", icon: DiCss3, name: "CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "f-1", icon: SiReact, name: "React" },
      { id: "f-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "f-3", icon: SiVuedotjs, name: "Vue.js" },
      { id: "f-4", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "f-5", icon: SiRedux, name: "Redux" },
      { id: "f-6", icon: SiNodedotjs, name: "Node.js" },
      { id: "f-7", icon: SiExpress, name: "Express.js" },
      { id: "f-8", icon: SiFastapi, name: "FastAPI" },
      { id: "f-9", icon: SiLaravel, name: "Laravel" },
      { id: "f-10", icon: SiWordpress, name: "WordPress" },
      { id: "f-11", icon: TbApi, name: "REST APIs" },
      { id: "f-12", icon: SiGraphql, name: "GraphQL" },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { id: "ai-1", icon: SiOpenai, name: "OpenAI API" },
      { id: "ai-2", icon: RiBrainLine, name: "LLM Integration" },
      { id: "ai-3", icon: RiGeminiFill, name: "Prompt Engineering" },
      { id: "ai-4", icon: SiZapier, name: "AI Automation" },
      { id: "ai-5", icon: SiHuggingface, name: "NLP" },
      { id: "ai-6", icon: TbScan, name: "OCR Processing" },
      { id: "ai-7", icon: FaRobot, name: "AI Chatbots" },
      { id: "ai-8", icon: SiOpenai, name: "RAG Systems" },
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    items: [
      { id: "t-1", icon: SiAmazon, name: "AWS" },
      { id: "t-2", icon: SiDocker, name: "Docker" },
      { id: "t-3", icon: SiGithubactions, name: "GitHub Actions" },
      { id: "t-4", icon: FaLinux, name: "Linux" },
      { id: "t-5", icon: SiNginx, name: "Nginx" },
      { id: "t-6", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "t-7", icon: SiMysql, name: "MySQL" },
      { id: "t-8", icon: SiMongodb, name: "MongoDB" },
      { id: "t-9", icon: SiRedis, name: "Redis" },
      { id: "t-10", icon: SiGit, name: "Git" },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "NextGen Systems",
    logo: nextgenSystems,
    // link: "https://www.oracle.com/in/",
    positions: [
      // {
      //   title: "Member of Technical Staff",
      //   duration: "Oct 2025 - Present",
      //   content: [
      //     {
      //       text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Member of Technical Staff - 1",
      //   duration: "Jul 2024 - Sep 2025",
      //   content: [
      //     {
      //       text: "Made several fixes to reduce the time taken for backup deletion from OCI Object Storage for large customers resulting in decreased costs.",
      //       link: "",
      //     },
      //     {
      //       text: "Worked towards building an AI On-Call Agent using an internal agentic framework.",
      //       link: "",
      //     },
      //     {
      //       text: "Developed a common integration test framework for ExaCS, ExaDB-XS and ExaCC, reducing code maintenance by ~67% and increased coverage by ~50%",
      //       link: "",
      //     },
      //   ],
      // },
      {
        title: "Sr Full Stack Engineer",
        duration: "Oct 2024 - Apr 2026",
        content: [
          {
            text: "Developed AI-assisted web applications using React, Node.js, and Python to streamline business operations and automate data processing workflows.",
            link: "",
          },
          {
            text: "Improved onboarding completion by 14% after rebuilding a brittle signup flow across Next.js,Python APIs, and event tracking, fixing validation edge cases, duplicate account creation, and post-launch funnel blind spots.",
            link: "",
          },
          
        ],
      },
    ],
  },
  {
    organisation: "monoya",
    logo: monoya,
    // link: "https://averlon.ai/",
    positions: [
      {
        title: "Python Developer",
        duration: "Apr 2021 - Sept 2024",
        content: [
          {
            text: "Led the development of AI-powered business automation platforms using React, FastAPI, and OpenAI APIs. ",
            link: "",
          },
          {
            text: "Managed comprehensive DevOps tasks on Linux servers, covering database management, Grafana setup, and project metric monitoring, ensuring system reliability and uptime.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Gunosy, Inc.",
    logo: gunosy,
    // link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Software Developer",
        duration: "Jul 2019 - Mar 2021",
        content: [
          {
            text: "Built backend systems and AI processing services using Python and PHP for enterprise web applications. ",
            link: "",
          },
          {
            text: "The application was based on a service-oriented architecture and used Python 2.7, Django 1.5, JSF 2, Spring 2, AJAX, HTML, and CSS for the frontend.",
            link: "",
          },
          {
            text: "Created Python and Bash tools to increase the efficiency of the call center application system and operations; data conversion scripts, AMQP/Rabbit MQ, REST, JSON, and CRUD scripts for API integration.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Web Lead",
      //   duration: "Apr 2022 - Present",
      //   content: [
      //     {
      //       text: "Managed a team of 6 student developers while also overlooking multiple modules.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer",
      //   duration: "Nov 2021 - Apr 2022",
      //   content: [
      //     {
      //       text: "Added Conditional Fields support to the Forms Module.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer Intern",
      //   duration: "Jun 2021 - Oct 2021",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "NS Solutions Corp",
    logo: nssolutions,
    // link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Web Developer",
        duration: "Sept 2016 - Jun 2019",
        content: [
          {
            text: "Integrated websites with different CMS systems such as Joomla, WordPress, and Drupal.",
            link: "",
          },
          {
            text: "Developed responsive cross-browser web applications utilizing modern HTML, CSS,and JavaScript technologies.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Web Lead",
      //   duration: "Apr 2022 - Present",
      //   content: [
      //     {
      //       text: "Managed a team of 6 student developers while also overlooking multiple modules.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer",
      //   duration: "Nov 2021 - Apr 2022",
      //   content: [
      //     {
      //       text: "Added Conditional Fields support to the Forms Module.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer Intern",
      //   duration: "Jun 2021 - Oct 2021",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Fin",
    link: "https://fin.ai/",
    image: projectFin,
    content:
      "AI-first customer service agent that resolves complex support queries with natural conversation and deep product context.",
    stack: [
      { id: "p1-1", icon: SiOpenai, name: "LLM" },
      { id: "p1-2", icon: FaRobot, name: "AI Agents" },
      { id: "p1-3", icon: SiReact, name: "React" },
      { id: "p1-4", icon: SiNodedotjs, name: "Node.js" },
    ],
  },
  {
    id: "project-2",
    title: "Rossum",
    link: "https://rossum.ai/",
    image: projectRossum,
    content:
      "Intelligent document processing platform that automates invoice and data capture workflows with AI-powered extraction.",
    stack: [
      { id: "p2-1", icon: TbScan, name: "OCR" },
      { id: "p2-2", icon: SiPython, name: "Python" },
      { id: "p2-3", icon: RiBrainLine, name: "ML" },
      { id: "p2-4", icon: TbApi, name: "REST API" },
    ],
  },
  {
    id: "project-3",
    title: "LangSmith",
    link: "https://www.langchain.com/langsmith/observability",
    image: projectLangsmith,
    content:
      "LLM observability platform for tracing, evaluating, and monitoring production AI applications at scale.",
    stack: [
      { id: "p3-1", icon: RiBrainLine, name: "LLM Ops" },
      { id: "p3-2", icon: SiPython, name: "Python" },
      { id: "p3-3", icon: SiOpenai, name: "OpenAI" },
      { id: "p3-4", icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: "project-4",
    title: "Glean",
    link: "https://www.glean.com/",
    image: projectGlean,
    content:
      "Enterprise AI search and knowledge assistant that connects workplace apps to deliver contextual answers.",
    stack: [
      { id: "p4-1", icon: SiOpenai, name: "GenAI" },
      { id: "p4-2", icon: RiBrainLine, name: "RAG" },
      { id: "p4-3", icon: SiPython, name: "Python" },
      { id: "p4-4", icon: SiAmazon, name: "Cloud" },
    ],
  },
  {
    id: "project-5",
    title: "Portainer",
    link: "https://www.portainer.io/",
    image: projectPortainer,
    content:
      "Container management platform for deploying and operating Docker and Kubernetes environments with a visual UI.",
    stack: [
      { id: "p5-1", icon: SiDocker, name: "Docker" },
      { id: "p5-2", icon: FaLinux, name: "Linux" },
      { id: "p5-3", icon: SiGithubactions, name: "CI/CD" },
      { id: "p5-4", icon: SiNginx, name: "Nginx" },
    ],
  },
  {
    id: "project-6",
    title: "monday.com",
    link: "https://monday.com/",
    image: projectMonday,
    content:
      "Work OS for building custom workflows, automations, and cross-team collaboration across projects and operations.",
    stack: [
      { id: "p6-1", icon: SiReact, name: "React" },
      { id: "p6-2", icon: SiGraphql, name: "GraphQL" },
      { id: "p6-3", icon: SiTypescript, name: "TypeScript" },
      { id: "p6-4", icon: SiZapier, name: "Automation" },
    ],
  },
  {
    id: "project-7",
    title: "Mieru AI",
    link: "https://mieru-ai.jp/",
    image: projectMieru,
    content:
      "Japanese AI platform focused on practical business visibility, analytics, and intelligent decision support.",
    stack: [
      { id: "p7-1", icon: SiPython, name: "Python" },
      { id: "p7-2", icon: SiOpenai, name: "LLM" },
      { id: "p7-3", icon: SiReact, name: "React" },
      { id: "p7-4", icon: SiFastapi, name: "FastAPI" },
    ],
  },
  {
    id: "project-8",
    title: "Benstay AI Accounting",
    link: "https://benstay.jp/ai-accounting/",
    image: projectBenstay,
    content:
      "AI-powered accounting solution for Japanese businesses, automating bookkeeping, reporting, and finance workflows.",
    stack: [
      { id: "p8-1", icon: SiOpenai, name: "AI" },
      { id: "p8-2", icon: TbScan, name: "Document AI" },
      { id: "p8-3", icon: SiPython, name: "Python" },
      { id: "p8-4", icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    id: "project-9",
    title: "Sanka",
    link: "https://sanka.com/ja/",
    image: projectSanka,
    content:
      "Business operations platform for Japanese teams, streamlining sales, tasks, and workflow automation in one place.",
    stack: [
      { id: "p9-1", icon: SiReact, name: "React" },
      { id: "p9-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "p9-3", icon: SiZapier, name: "Workflow" },
      { id: "p9-4", icon: SiMysql, name: "MySQL" },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Career highlights from resume
export const stats = [
  {
    id: "stats-1",
    title: "Years Experience",
    value: "9+",
  },
  {
    id: "stats-2",
    title: "Tech Stacks",
    value: "30+",
  },
  {
    id: "stats-3",
    title: "Companies",
    value: "4",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/yoshiaki-kitade-37677840b",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/yoshiaki-kitade",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:yoshiakikitade@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/yoshiakikitade_",
  }
];

// Your professional summary
export const aboutMe = {
  name: "Yoshiaki Kitade",
  githubUsername: "yoshiaki-kitade",
  // tagLine:
  //   "MTS @ Oracle | 12x Hackathon Winner | ETHIndia'22,24 Winner | NITK'24 | PBA-5",
  intro:
    "Software Engineer from Japan who is either busy improving his craft or pondering over the next big idea.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
