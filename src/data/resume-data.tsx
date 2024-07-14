import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fachri Fajar",
  initials: "FF",
  location: "Indonesia",
  locationLink: "https://www.google.com/maps/place/indonesia",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in work teams and creating environments where individuals perform at their best. Currently, I work mostly with Javascript, TypeScript, React and Node.js. I have over 2 years of experience working.",
  personalWebsiteUrl: "",
  contact: {
    email: "fachri.fajar@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fachrifajar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fachri-fajar/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitas Pembangunan Nasional, Yogyakarta",
      degree: "Bachelor's Degree in Petroleum engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Waizly",
      link: "https://waizly.id/",
      badges: ["Hybrid"],
      title: "Frontend Dev",
      start: "2023",
      end: null,
      description:
        "Develop the Social Media Integration Dashboard platform. Technologies: React, Javascript",
    },
    {
      company: "Anteraja",
      link: "https://anteraja.id/id/",
      badges: ["Hybrid"],
      title: "QA Analyst",
      start: "2021",
      end: "2023",
      description:
        "Utilized data visualization, Conducted statistical analysis, maintain quality of app. Technologies: Tableau, Postgres"
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Vue/Nuxt",
    "Node.js",
    "SQL/NOSQL"
  ],
  projects: [
    {
      title: "SID",
      techStack: [
        "Frontend Developer",
        "Javascript",
        "React",
      ],
      description:
        "Ads Manager for Facebook, Google, Tiktok",
      link: {
        // label: "github.com",
        href: "https://sid.ethos.co.id/",
      },
    },
    {
      title: "Linkhub",
      techStack: [
        "Fullstack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "Firebase"
      ],
      description:
        "Linktree Clone",
      link: {
        // label: "github.com",
        href: "https://link-hub-v1.vercel.app/",
      },
    },
  ],
} as const;
