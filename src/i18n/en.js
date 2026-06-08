export default {
  nav: {
    homeAria: (name) => `${name} — Home`,
    toggleAria: "Switch language between English and Japanese",
  },
  navLinks: {
    skills: "Skills & Experience",
    education: "Education",
    achievements: "Achievements",
    projects: "Projects",
    openSource: "Open Source",
    extraCurricular: "Extra Curricular",
    contactMe: "Contact Me",
  },
  hero: {
    greeting1: "Hi there!",
    greeting2: "I am",
  },
  aboutMe: {
    name: "Yoshiaki Kitade",
    intro:
      "Software Engineer from Japan who is either busy improving his craft or pondering over the next big idea.",
    tagLine:
      "Full-Stack Engineer · AI & Automation · 9+ Years Building Production Systems",
  },
  sections: {
    skills: "Skills & Experience",
    education: "Education",
    achievements: {
      title: "Career Highlights",
      subtitle:
        "Impactful full-stack and AI engineering milestones from 9+ years in production.",
    },
    projects: {
      title: "Projects",
      subtitle:
        "AI, automation, and platform products shaping modern full-stack engineering.",
    },
    openSource: {
      title: "Open Source Contributions",
      errorTitle: "Something went wrong loading this section.",
      errorBody: "Please wait a few seconds and try reloading the page.",
      filterAll: "All",
    },
    extraCurricular: "Extra Curricular",
  },
  common: {
    techStack: "Tech Stack",
    visitSite: "Visit site",
    resume: "Resume",
    madeWith: (name) => `Made with 💙 by ${name} & the Open Source Community`,
    openProject: (title) => `Open ${title}`,
  },
  letsConnect: {
    line1: "Let's",
    line2: "Connect",
    ariaLabel: "Let's Connect on LinkedIn",
  },
  skillCategories: [
    "Languages",
    "Frameworks & Libraries",
    "AI & Automation",
    "Cloud, DevOps & Databases",
  ],
  stats: ["Years Experience", "Tech Stacks", "Companies"],
  educationList: [
    {
      degree: "Bachelor of Technology",
      duration: "August 2012 - August 2016",
      content1: "Major: Information Technology",
    },
    {
      degree: "",
      duration: "May 2016 - June 2016",
      content1:
        "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
    },
  ],
  achievements: [
    {
      event: "LLM Document Orchestration",
      position: "NextGen Systems · Sr Full Stack Engineer",
      content1:
        "Built AI document parsing with instructor.js and Zod validation across GPT-4, Claude, Gemini, and Grok.",
      content2:
        "Led cost-benefit analysis for LLM providers and vector stores to guide architecture decisions.",
    },
    {
      event: "Onboarding Flow Rebuild",
      position: "14% Completion Increase",
      content1:
        "Rebuilt a brittle signup flow across Next.js, Python APIs, and event tracking.",
      content2:
        "Resolved validation edge cases, duplicate accounts, and post-launch funnel blind spots.",
    },
    {
      event: "AI Bid Matching Platform",
      position: "Full-Stack Delivery",
      content1:
        "Architected an AI-powered bid matching platform with Node.js, MongoDB, and React.",
      content2:
        "Deployed to DigitalOcean with a complete CI/CD pipeline implementation.",
    },
    {
      event: "AI Business Automation",
      position: "monoya · Python Developer",
      content1:
        "Led AI automation platforms using React, FastAPI, and OpenAI APIs.",
      content2:
        "Applied pandas and Watson NLU to analyze customer satisfaction signals.",
    },
    {
      event: "OCR & Workflow Automation",
      position: "Gunosy, Inc. · Software Developer",
      content1:
        "Automated manual operations with OCR processing and intelligent data extraction.",
      content2:
        "Built distributed workers with Celery, RabbitMQ, MySQL, and Django.",
    },
    {
      event: "Enterprise Web Delivery",
      position: "NS Solutions Corp · Web Developer",
      content1:
        "Integrated Joomla, WordPress, and Drupal CMS platforms for client websites.",
      content2:
        "Delivered responsive, accessibility-focused UIs under tight contract timelines.",
    },
  ],
  experiences: [
    {
      positions: [
        {
          title: "Sr Full Stack Engineer",
          duration: "Oct 2024 - Apr 2026",
          content: [
            "Developed AI-assisted web applications using React, Node.js, and Python to streamline business operations and automate data processing workflows.",
            "Improved onboarding completion by 14% after rebuilding a brittle signup flow across Next.js, Python APIs, and event tracking, fixing validation edge cases, duplicate account creation, and post-launch funnel blind spots.",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "Python Developer",
          duration: "Apr 2021 - Sept 2024",
          content: [
            "Led the development of AI-powered business automation platforms using React, FastAPI, and OpenAI APIs.",
            "Managed comprehensive DevOps tasks on Linux servers, covering database management, Grafana setup, and project metric monitoring, ensuring system reliability and uptime.",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "Software Developer",
          duration: "Jul 2019 - Mar 2021",
          content: [
            "Built backend systems and AI processing services using Python and PHP for enterprise web applications.",
            "The application was based on a service-oriented architecture and used Python 2.7, Django 1.5, JSF 2, Spring 2, AJAX, HTML, and CSS for the frontend.",
            "Created Python and Bash tools to increase the efficiency of the call center application system and operations; data conversion scripts, AMQP/Rabbit MQ, REST, JSON, and CRUD scripts for API integration.",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "Web Developer",
          duration: "Sept 2016 - Jun 2019",
          content: [
            "Integrated websites with different CMS systems such as Joomla, WordPress, and Drupal.",
            "Developed responsive cross-browser web applications utilizing modern HTML, CSS, and JavaScript technologies.",
          ],
        },
      ],
    },
  ],
  projects: [
    "AI-first customer service agent that resolves complex support queries with natural conversation and deep product context.",
    "Intelligent document processing platform that automates invoice and data capture workflows with AI-powered extraction.",
    "LLM observability platform for tracing, evaluating, and monitoring production AI applications at scale.",
    "Enterprise AI search and knowledge assistant that connects workplace apps to deliver contextual answers.",
    "Container management platform for deploying and operating Docker and Kubernetes environments with a visual UI.",
    "Work OS for building custom workflows, automations, and cross-team collaboration across projects and operations.",
    "Japanese AI platform focused on practical business visibility, analytics, and intelligent decision support.",
    "AI-powered accounting solution for Japanese businesses, automating bookkeeping, reporting, and finance workflows.",
    "Business operations platform for Japanese teams, streamlining sales, tasks, and workflow automation in one place.",
  ],
};
