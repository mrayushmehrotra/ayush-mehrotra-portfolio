import Link from "next/link";
import Email from "./icons/Email";
import Github from "./icons/Github";
import X from "./icons/X";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Calcom from "./icons/Calcom";
import Youtube from "./icons/Youtube";
import React, { SVGProps } from "react";
import { track } from "@vercel/analytics";
import { socialMedia } from "./resources/content";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const iconLabels: { [key: string]: string } = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  email: "Email",
  github: "GitHub",
  x: "X (Twitter)",
  calcom: "Book a Call",
  youtube: "YouTube",
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    instagram: <Instagram {...props} />,
    linkedin: <LinkedIn {...props} />,
    email: <Email {...props} />,
    github: <Github {...props} />,
    x: <X {...props} />,
    calcom: <Calcom {...props} />,
    youtube: <Youtube {...props} />,
  };

  return icons[name];
};

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-1">
      {socialMedia.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          target="_blank"
          className="group relative p-2 rounded-lg overflow-hidden transition-all duration-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
          onClick={() => track(`${link.name}_link_clicked`)}
          title={iconLabels[link.name] || link.name}
        >
          <p className="sr-only">{iconLabels[link.name] || link.name}</p>
          <Icon
            name={link.name}
            className="transition-all duration-200 h-5 w-5 group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;

