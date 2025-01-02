export interface Project {
  id: number;
  title: string;
  year?: number;
  category: "frontend" | "wordpress" | "mern";
  technologies: string;
  description: string;
  github?: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Movie Search Application",
    year: 2024,
    category: "frontend",
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "A movie search application that utilizes the TMDB API to fetch and display movie data. Users can view detailed information about each movie, browse movies by category, and search for movies by title. Built with Next.js for server-side rendering, TypeScript for type safety, and styled with Tailwind CSS for a responsive design.",
    github: "https://github.com/alif7laksono/tmdb2",
    url: "https://tmdb2-one.vercel.app/",
  },
  {
    id: 2,
    title: "News Website using GNews API",
    year: 2024,
    category: "frontend",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    description:
      "A simple news website that uses the GNews API to fetch and display the latest news from various sources. The site features a homepage with current news articles and a search page that allows users to find news based on keywords. Built with Next.js for optimized performance, TypeScript for type safety, and styled with Tailwind CSS for a clean, responsive design.",
    github: "https://github.com/alif7laksono/gNews",
    url: "https://g-news-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Landing Page for Tech Services",
    year: 2024,
    category: "frontend",
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "Implemented filter functionality and displayed categorized projects using Next.js. Included sections for Projects, Contact, and Blog",
    github: "https://github.com/alif7laksono/techSolutions",
    url: "https://tech-solutions-phi.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Website: Multi-Page Web Application",
    year: 2024,
    category: "frontend",
    technologies: "NextJs, Javascript, TailwindCss",
    description:
      "Demonstrated the use of React Router for navigation between different pages and modular components for a well-structured application.",
    github: "https://github.com/alif7laksono/agency",
    url: "  https://blog-sable-omega-79.vercel.app/",
  },
  {
    id: 5,
    title: "Simple Portfolio website",
    year: 2024,
    category: "frontend",
    technologies: "NextJs, Typescript, TailwindCss",
    description:
      "A minimalist design focused on user experience and ease of navigation. The portfolio highlights projects in an organized layout, with sections dedicated to professional background, technical skills, and contact information.",
    github: "https://github.com/alif7laksono/portfolio",
    url: "#",
  },
  {
    id: 6,
    title: "Wordpress Website for Photography Agency",
    year: 2024,
    category: "wordpress",
    technologies: "Wordpress, Elementor Pro",
    description:
      "A WordPress website designed for a photography agency, showcasing an elegant photography gallery along with a dedicated services page and contact page. Built with Elementor Pro for easy customization and responsive design, allowing potential clients to explore photography portfolios and inquire about services effortlessly.",
    url: "https://mia.fnespoir.blog/",
  },
  {
    id: 7,
    title: "Simple Website for Bloggers With Ecommerce Integration",
    year: 2024,
    category: "wordpress",
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://rosette.fnespoir.blog/",
  },
  {
    id: 8,
    title: "Website for Life Coaching Service with Blog",
    year: 2024,
    category: "wordpress",
    technologies: "WordPress, Elementor Pro",
    description:
      "A professional WordPress website designed for a life coaching service, featuring an informative blog to share insights and advice. The site includes dedicated pages for service offerings, client testimonials, and a contact form to make it easy for potential clients to connect. Built with Elementor Pro, the website is highly customizable and responsive, providing an engaging user experience that highlights the life coach's expertise and supports audience growth through valuable blog content.",
    url: "https://emma.fnespoir.blog/",
  },
  {
    id: 9,
    title: "Website for Bloggers With Ecommerce",
    year: 2024,
    category: "wordpress",
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://luna.fnespoir.blog/",
  },
  {
    id: 10,
    title: "Website for Bloggers With Ecommerce and Serives Page",
    year: 2024,
    category: "wordpress",
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://briella.site/",
  },
  {
    id: 11,
    title: "Simple CRUD Application",
    year: 2024,
    category: "mern",
    technologies: "MERN Stack, TypeScript",
    description:
      "A basic CRUD (Create, Read, Update, Delete) application built using the MERN Stack (MongoDB, Express, React, Node.js) with TypeScript for enhanced type safety.",
    github: "https://github.com/alif7laksono/crud",
    url: "https://github.com/alif7laksono/crud",
  },
  {
    id: 12,
    title: "URL Shortener",
    year: 2024,
    category: "mern",
    technologies: "MERN Stack, TypeScript",
    description:
      "A free tool for shortening URLs and generating short links. The URL shortener simplifies sharing long links by creating concise and manageable links.",
    github: "https://github.com/alif7laksono/crud",
    url: "https://github.com/alif7laksono/url-shortener",
  },
  {
    id: 13,
    title: "Welding Workshop Website with Landing Page, Blog, and Contact Info",
    year: 2024,
    category: "wordpress",
    technologies: "WordPress, Astra, Elementor",
    description:
      "A professionally crafted WordPress website for a welding workshop, combining a striking landing page, informative blog, and detailed contact section. The landing page highlights the workshop's services, expertise, and key projects, creating a strong first impression. The integrated blog allows the workshop to share insights, tips, and industry updates to engage their audience.",
    url: "https://rezadasteel.com/",
  },
  {
    id: 14,
    title: "Wedding Website Theme with Next.js",
    year: 2024,
    category: "frontend",
    technologies: "Next.js, TypeScript, Tailwind CSS, ShadCN UI",
    description:
      "A beautifully designed one-page wedding website theme. The theme features a sticky navbar for easy navigation, a responsive layout for optimal viewing on all devices, and a modern aesthetic tailored for wedding events.",
    url: "https://pricelist-eta.vercel.app/roseandethan",
  },
  {
    id: 15,
    title: "Photography Agency Portfolio Landing Page",
    year: 2024,
    category: "frontend",
    technologies: "Next.js, TypeScript, Tailwind CSS, ShadCN UI",
    description:
      "A modern and responsive landing page designed for photography agencies. The layout features a sticky header for seamless navigation, a gallery section to showcase stunning photography portfolios. Optimized for all devices.",
    url: "https://pricelist-eta.vercel.app/portfolio",
  },
  {
    id: 16,
    title: "Responsive Wedding&Decoration Pricelist with Gallery page",
    year: 2024,
    category: "frontend",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    description:
      "A modern and fully responsive web application designed for wedding and decoration services. Built using Next.js, TypeScript, and Tailwind CSS, the application ensures fast performance, clean code structure, and a seamless user experience across all devices",
    url: "https://rnita.vercel.app/",
  },
  {
    id: 17,
    title: "Free, reusable components built with Next.js, Tailwind CSS, and ShadCN UI.",
    year: 2024,
    category: "frontend",
    technologies: "Next.js, TypeScript, Tailwind CSS, ShadcnUI",
    description:
      "A modern and fully responsive free and reusable components shadcnui. Create stunning web interfaces with ready-to-use components.",
    github: "https://github.com/alif7laksono/shadcn-ui-nextjs-components",
    url: "https://shadcn-ui-nextjs-components.vercel.app/",
  },
];
