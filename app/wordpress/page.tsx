import { projects } from "./project-data";

export default function Wordpress() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Wordpress Projects
      </h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col mb-10">
              <div className="w-full flex flex-col space-y-1">
                <span className="font-semibold tracking-tight text-lg">
                  {`${index + 1}. ${project.title}`}
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {project.technologies}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {project.year}
                  </span>
                </div>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
