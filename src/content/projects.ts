export interface Project {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  role: string;
  link: string;
  displayLink: string;
}

export const projects: Project[] = [
  {
    slug: "followflash",
    name: "Follow Flash",
    tagline: "Social replies 2X faster, AI",
    stack: ["NestJS", "Next.js", "LangChain", "AWS"],
    role: "Full stack engineer",
    link: "https://www.followflash.com/",
    displayLink: "followflash.com",
  },
  {
    slug: "adavia",
    name: "Adavia",
    tagline: "Global mobility, 27+ countries",
    stack: ["NestJS", "PostgreSQL", "Coolify", "OpenAI"],
    role: "Backend engineer",
    link: "https://adavia.com/",
    displayLink: "adavia.com",
  },
  {
    slug: "bundleup",
    name: "BundleUp",
    tagline: "Baby & toddler clothing marketplace",
    stack: ["Django", "React", "React Native", "PostgreSQL", "Stripe"],
    role: "Full-stack engineer",
    link: "https://www.bundleup.co/",
    displayLink: "bundleup.co",
  },
];
