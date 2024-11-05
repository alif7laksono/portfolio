"use client";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "../config";
import { FC } from "react";
const YEAR = new Date().getFullYear();

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon: Icon, onClick }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <Icon />
    </a>
  );
};

function SocialLinks() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(socialLinks.email.replace("mailto:", ""));
    alert("Email address copied to clipboard!");
  };

  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink
        href={socialLinks.email}
        icon={TbMailFilled}
        onClick={handleEmailClick} // Pass handleEmailClick here for the email link
      />
    </div>
  );
}

export function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
