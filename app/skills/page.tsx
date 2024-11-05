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

interface Skill {
  name: string;
  level: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
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

export default function Skills() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105 hover:bg-gray-800"
          >
            <div className="flex justify-center items-center mb-2">
              {skill.icon}
            </div>
            <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
            <p className="text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
