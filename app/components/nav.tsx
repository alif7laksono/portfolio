"use client";
import Link from "next/link";
import { metaData } from "../config";
import { usePathname } from "next/navigation";

const navItems = {
  "/frontend": { name: "FrontEnd" },
  "/mern": { name: "Mern" },
  "/wordpress": { name: "Wordpress" },
  "/skills": { name: "Skills" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-16 mb-0 py-5 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-row mt-6 md:mt-0 justify-center md:justify-start">
          <Link
            href="/"
            className="text-3xl font-semibold tracking-tight text-center md:text-left"
          >
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto justify-center items-center border-y md:border-none border-white py-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-normal md:font-semibold text-center ${
                pathname === path
                  ? "active"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
