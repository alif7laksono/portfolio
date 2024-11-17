import { projects } from "../data/project-data";

export default function Wordpress() {
  const wpProjects = projects.filter(
    (project) => project.category === "wordpress"
  );
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        WordPress Projects
      </h1>
      <div className="space-y-6">
        {wpProjects.map((project, index) => (
          <div
            key={index}
            className="block group hover:opacity-80 transition-opacity duration-200"
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

              <div className="mt-4">
                {/* Demo Site Button (URL) */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
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
