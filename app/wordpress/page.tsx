"use client";
import React, { useState } from "react";
import { projects } from "../data/project-data";
import { fonts } from "../fonts/fonts";

export default function Wordpress() {
  const wpProjects = projects.filter(
    (project) => project.category === "wordpress"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(wpProjects.length / projectsPerPage);

  const displayedProjects = wpProjects.slice(
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
    <section className={` ${fonts.montserrat}`}>
      <div className="flex justify-center md:justify-start gap-4 md:gap-6 mb-6 md:mb-10">
        <p className="capitalize">
          Total WordPress projects:{" "}
          <span className="font-bold">{wpProjects.length}</span>
        </p>
      </div>
      <div className="space-y-6">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id || index} // Use a unique key if available
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
