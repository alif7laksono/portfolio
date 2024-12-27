"use client";
import React, { useState } from "react";
import { projects } from "../data/project-data";

export default function Frontend() {
  const feProjects = projects.filter(
    (project) => project.category === "frontend"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(feProjects.length / projectsPerPage);

  const displayedProjects = feProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section>
      <div className="flex justify-between gap-4 md:gap-6 items-center mb-6 md:mb-10">
        <h1 className="text-2xl font-semibold text-left tracking-tight animate-fadeIn">
          Front End Projects
        </h1>
        <p className="capitalize text-right">
          Total FrontEnd projects:{" "}
          <span className="font-bold">{feProjects.length}</span>
        </p>
      </div>
      <div className="space-y-6">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="block group transition-opacity duration-200 border-b-2 border-gray-700"
            aria-label={`View project ${project.title}`}
          >
            <div className="flex flex-col mb-10">
              <div className="w-full flex flex-col space-y-2">
                <span className="font-semibold tracking-tight text-lg animate-fadeIn">
                  {`${(currentPage - 1) * projectsPerPage + index + 1}. ${
                    project.title
                  }`}
                </span>
                <div className="flex justify-between items-center animate-slideDown">
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
              <p className="prose prose-neutral dark:prose-invert pt-3 animate-slideUp">
                {project.description}
              </p>
              <div className="mt-4 flex space-x-4 animate-fadeIn">
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

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Previous
        </button>
        <span className="text-neutral-600 dark:text-neutral-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
