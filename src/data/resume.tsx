import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GitGraph } from "lucide-react";

export const DATA = {
  name: "Suraj Singh Chahar",
  initials: "SC",
  url: "https://iamsurajchahar.vercel.app/",
  location: "Gurgaon, Haryana",
  locationLink: "https://www.google.com/maps/place/Gurgaon",
  description:
    "Software Development Engineer with a gamer's obsession for performance. I ship products, not just code.",
  summary:
    "I'm a Software Development Engineer who likes owning things **end-to-end**: backend, frontend, and everything in between. I care about performance the way gamers do: **every millisecond matters**. If something needs to be built fast and built right, that's where I do my best work.",
  avatarUrl: "/avatar.jpg",
  skills: {
    Programming: ["C++", "JavaScript", "TypeScript"],
    "Frontend Development": ["React.js", "Redux", "Next.js", "TailwindCSS", "Tauri"],
    "Backend Development": ["Node.js", "Express.js", "MongoDB", "Redis", "SQL", "PostgreSQL", "Socket.io"],
    "DevOps & Cloud": ["Docker", "AWS", "Ansible", "CloudFormation"],
    "Tools & Utilities": ["Git", "Postman", "Bash/Shell Scripting", "Linux"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resources", icon: GitGraph, label: "Resources" },
  ],
  contact: {
    email: "contact.chahar@gmail.com",
    tel: "+91 9068891028",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamsurajchahar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imsurajchahar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/soissuraj/",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/919068891028",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "RNF Technologies",
      href: "https://www.rnftechnologies.com",
      badges: [],
      location: "Noida, UP",
      title: "Software Development Engineer",
      logoUrl: "/rnf-logo.png",
      start: "December 2025",
      end: "Present",
      description:
        "Chartered the backend's entire foundation for Innersmith, a wellness platform, building 212+ REST APIs and conducting R&D on scalable architecture, resulting in a 30% decrease in development complexity.\nEngineered secure user authentication using JWT and Google OAuth 2.0, alongside CloudFront signed-URL media access, improving API performance by 35% with zero-downtime deployment and 99.9% API uptime across production.\nEngineered a production-ready admin panel processing 20,000+ daily actions, leveraging 15+ third-party integrations to achieve a 50% reduction in manual workload.",
    },
    {
      company: "Heliverse Technologies",
      href: "https://heliverse.com",
      badges: [],
      location: "Gurgaon, Haryana",
      title: "Associate Software Developer",
      logoUrl: "/heliverse-logo.svg",
      start: "May 2025",
      end: "October 2025",
      description:
        "Implemented a CMS-powered web application using Next.js and Sanity.io, enabling seamless client-side content updates without code changes and optimizing content management workflows by 70%.\nOrchestrated the construction of a resilient backend framework utilizing Hono and Prisma, integrating JWT-based authentication and RESTful APIs, which enhanced system uptime by 20%.\nSpearheaded the development and deployment of three distinct gaming applications, exceeding quality assurance benchmarks and achieving complete defect-free releases within all project timelines.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Gurgaon, Haryana",
      title: "Software Development Engineer",
      logoUrl: "/freelance-logo.svg",
      start: "October 2024",
      end: "April 2025",
      description:
        "Automated CI/CD pipeline using GitHub Actions for a React (Vite + TypeScript) application that reduced deployment time by 75%, handled 13+ weekly deployments with zero downtime, and enabled fully automated updates on code push.\nTransformed 3 client React applications with responsive architecture and reusable components, improving rendering speed and reducing bundle size by 28%.\nPioneered a responsive Next.js application featuring optimized state management across four key pages; this reduced data fetching speeds by 50% and reduced latency, improving response times by 30%.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "B.Tech in Computer Science and Engineering (Specialization in Gaming Technology)",
      cgpa: "8.5/10",
      logoUrl: "/vit-logo.svg",
      start: "December 2020",
      end: "December 2024",
    },
  ],
  projects: [
    {
      title: "Stack Decay Score",
      href: "https://stack-decay.vercel.app",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Track and score the health of your project dependencies: maintenance activity, community strength, known vulnerabilities, end-of-life risk, and license compliance, all in one dashboard.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://stack-decay.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/stack-delay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stack-delay-logo.png",
      video: "",
    },
    {
      title: "npmlens",
      href: "https://www.npmjs.com/package/npmlens",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Know everything about an npm package before you install it: health score, security, bundle size, dependency tree, and side-by-side comparison. Published on npm with 300+ weekly downloads.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Commander",
        "Chalk",
        "Ora",
        "cli-table3",
        "semver",
      ],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/npmlens",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/npmlens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/npmlens-logo.png",
      video: "",
    },
    {
      title: "Dukaan Saathi",
      href: "https://dukaan-saathi-client.vercel.app/",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Smart inventory management for kirana stores. Studies past sales to tell shopkeepers exactly what to restock, how much, and when, with low-stock alerts, sales analytics, and Hindi language support.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
        "Razorpay",
        "Turborepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://dukaan-saathi-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/dukaan_saathi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dukaan-saathi.png",
      video: "",
    },
    {
      title: "Json Tree",
      href: "https://jsontreeviewer.vercel.app/",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "Visualize JSON data in graph and tree forms. Simplify, explore, and customize effortlessly. Lightning-fast rendering, browser-friendly, and developer-ready.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Monaco Editor",
        "Reaflow",
      ],
      links: [
        {
          type: "Website",
          href: "https://jsontreeviewer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/Json_Tree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/json-tree-logo.png",
      video: "",
    },
    {
      title: "Kanban",
      href: "https://kanban-sooty-mu.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "A modern task management website designed to streamline your workflow. It provides an intuitive and visually appealing way to organize and track tasks efficiently, helping you stay productive and focused.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "react-beautiful-dnd",
        "Headless UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://kanban-sooty-mu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/kanban",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kanban-logo.png",
      video: "",
    },
    {
      title: "Time Series Data Visualizer",
      href: "https://drive.google.com/file/d/1KwMKR4Y3sOWZCbTjFZt9o4W-q62Ne3Nh/view",
      dates: "December 2024 - February 2025",
      active: true,
      description:
        "A desktop application built using Next.js and Tauri that allows users to visualize time series data from CSV files.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tauri",
        "Chart.js",
        "Tailwind CSS",
        "PapaParse",
      ],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1KwMKR4Y3sOWZCbTjFZt9o4W-q62Ne3Nh/view",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/iamsurajchahar/Time-series-data-visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/time-series-logo.jpg",
      video: "",
    },
  ],
} as const;
