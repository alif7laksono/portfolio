import { skills } from "./skill-data";

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
