import { projects } from "../data/project-data";

export default function Frontend() {
  const feProjects = projects.filter(
    (project) => project.category === "frontend"
  );
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Front End Projects
      </h1>
      <div className="space-y-6">
        {feProjects.map((project, index) => (
          <div
            key={index}
            className="block group transition-opacity duration-200 border-b-2 border-gray-700"
            aria-label={`View project ${project.title}`}
          >
            <div className="flex flex-col mb-10">
              <div className="w-full flex flex-col space-y-2">
                <span className="font-semibold tracking-tight text-lg">
                  {`${index + 1}. ${project.title}`}
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {Array.isArray(project.technologies)
                      ? project.technologies.join(", ")
                      : project.technologies}
                  </span>
                  {project.year && (
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {project.year}
                    </span>
                  )}
                </div>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>

              <div className="mt-4 flex space-x-4">
                {/* GitHub Button (Source Code) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Source Code
                  </a>
                )}

                {/* Demo Site Button (URL) */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Demo Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
