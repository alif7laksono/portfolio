"use client";
import Link from "next/link";
import { metaData } from "../config";
import { usePathname } from "next/navigation";

const navItems = {
  "/frontend": { name: "FE Projects" },
  "/mern": { name: "Mern Projects" },
  "/wordpress": { name: "WP Projects" },
  "/skills": { name: "Skills" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-16 mb-12 py-5 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-semibold ${
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
