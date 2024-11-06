import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaShoppingCart,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiElementor,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export interface Skill {
  name: string;
  level: string;
  icon: JSX.Element;
}

export const skills: Skill[] = [
  {
    name: "HTML",
    level: "Intermadiate",
    icon: <FaHtml5 className="text-4xl mb-2" />,
  },
  {
    name: "CSS",
    level: "Intermadiate",
    icon: <FaCss3Alt className="text-2xl mb-2" />,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    icon: <FaJs className="text-2xl mb-2" />,
  },
  {
    name: "TypeScript",
    level: "Basic",
    icon: <SiTypescript className="text-2xl mb-2" />,
  },
  {
    name: "React.js",
    level: "Basic",
    icon: <FaReact className="text-2xl mb-2" />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    icon: <SiNextdotjs className="text-2xl mb-2" />,
  },
  {
    name: "WordPress",
    level: "Intermediate",
    icon: <FaWordpress className="text-2xl mb-2" />,
  },
  {
    name: "Elementor Pro",
    level: "Intermediate",
    icon: <SiElementor className="text-2xl mb-2" />,
  },
  {
    name: "WooCommerce",
    level: "Intermediate",
    icon: <FaShoppingCart className="text-2xl mb-2" />,
  },
  {
    name: "Photoshop",
    level: "Basic",
    icon: <SiAdobephotoshop className="text-2xl mb-2" />,
  },
  {
    name: "Illustrator",
    level: "Basic",
    icon: <SiAdobeillustrator className="text-2xl mb-2" />,
  },
];
