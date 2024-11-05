export interface Project {
  id: number;
  title: string;
  year?: number;
  technologies: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Movie Search Application",
    year: 2024,
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "A movie search application that utilizes the TMDB API to fetch and display movie data. Users can view detailed information about each movie, browse movies by category, and search for movies by title. Built with Next.js for server-side rendering, TypeScript for type safety, and styled with Tailwind CSS for a responsive design.",
    url: "https://tmdb2-one.vercel.app/",
  },
  {
    id: 2,
    title: "News Website using GNews API",
    year: 2024,
    technologies: "Next.js, TypeScript, Tailwind CSS",
    description:
      "A simple news website that uses the GNews API to fetch and display the latest news from various sources. The site features a homepage with current news articles and a search page that allows users to find news based on keywords. Built with Next.js for optimized performance, TypeScript for type safety, and styled with Tailwind CSS for a clean, responsive design.",
    url: "https://g-news-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Landing Page for Tech Services",
    year: 2024,
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "Implemented filter functionality and displayed categorized projects using Next.js. Included sections for Projects, Contact, and Blog",
    url: "https://tech-solutions-phi.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Website: Multi-Page Web Application",
    year: 2024,
    technologies: "NextJs, Javascript, TailwindCss",
    description:
      "Demonstrated the use of React Router for navigation between different pages and modular components for a well-structured application.",
    url: "  https://blog-sable-omega-79.vercel.app/",
  },
  {
    id: 5,
    title: "Simple Portfolio website",
    year: 2024,
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "A minimalist design focused on user experience and ease of navigation. The portfolio highlights projects in an organized layout, with sections dedicated to professional background, technical skills, and contact information.",
    url: "#",
  },
];
