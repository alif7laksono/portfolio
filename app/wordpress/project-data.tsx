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
    title: "Wordpress Website for Photography Agency",
    year: 2024,
    technologies: "Wordpress, Elementor Pro",
    description:
      "A WordPress website designed for a photography agency, showcasing an elegant photography gallery along with a dedicated services page and contact page. Built with Elementor Pro for easy customization and responsive design, allowing potential clients to explore photography portfolios and inquire about services effortlessly.",
    url: "https://mia.fnespoir.blog/",
  },
  {
    id: 2,
    title: "Simple Website for Bloggers With Ecommerce Integration",
    year: 2024,
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://rosette.fnespoir.blog/",
  },
  {
    id: 3,
    title: "Website for Life Coaching Service with Blog",
    year: 2024,
    technologies: "WordPress, Elementor Pro",
    description:
      "A professional WordPress website designed for a life coaching service, featuring an informative blog to share insights and advice. The site includes dedicated pages for service offerings, client testimonials, and a contact form to make it easy for potential clients to connect. Built with Elementor Pro, the website is highly customizable and responsive, providing an engaging user experience that highlights the life coach's expertise and supports audience growth through valuable blog content.",
    url: "https://emma.fnespoir.blog/",
  },
  {
    id: 4,
    title: "Website for Bloggers With Ecommerce",
    year: 2024,
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://luna.fnespoir.blog/",
  },
  {
    id: 4,
    title: "Website for Bloggers With Ecommerce and Serives Page",
    year: 2024,
    technologies: "Wordpress, Elementor Pro, Wocommerce",
    description:
      "A WordPress website tailored for bloggers who want to share content and sell products. Features a stylish blog layout alongside an integrated eCommerce platform powered by WooCommerce, enabling seamless product listings and a user-friendly shopping experience. Built with Elementor Pro, the site is highly customizable and responsive, making it easy for bloggers to create and manage their online presence and shop.",
    url: "https://briella.site/",
  },
];
