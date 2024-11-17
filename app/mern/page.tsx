import { projects } from "../data/project-data";
import React from "react";

export default function Mern() {
  const mernProjects = projects.filter(
    (project) => project.category === "mern"
  );
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        MERN Stack Projects
      </h1>
      <div className="space-y-6">
        {mernProjects.map((project, index) => (
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
                    {project.technologies}
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

              {/* Demo Site and GitHub Buttons */}
              <div className="mt-4 space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    GitHub Source Code
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
