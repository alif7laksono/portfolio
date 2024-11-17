export interface Project {
  id: number;
  title: string;
  year?: number;
  technologies: string[];
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Simple CRUD Application",
    year: 2024,
    technologies: ["MERN Stack", "TypeScript"],
    description:
      "A basic CRUD (Create, Read, Update, Delete) application built using the MERN Stack (MongoDB, Express, React, Node.js) with TypeScript for enhanced type safety.",
    url: "https://github.com/alif7laksono/crud",
  },
  {
    id: 2,
    title: "URL Shortener",
    year: 2024,
    technologies: ["MERN Stack", "TypeScript"],
    description:
      "A free tool for shortening URLs and generating short links. The URL shortener simplifies sharing long links by creating concise and manageable links.",
    url: "https://github.com/alif7laksono/url-shortener",
  },
];
