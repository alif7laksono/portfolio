import { skills } from "./skill-data";

export default function Skills() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border-2 border-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:opacity-80"
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
