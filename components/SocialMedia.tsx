import Link from "next/link";
import Email from "./icons/Email";
import Github from "./icons/Github";
import X from "./icons/X";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Calcom from "./icons/Calcom";
import React, { SVGProps } from "react";
import { track } from "@vercel/analytics";
import { socialMedia } from "./resources/content";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    instagram: <Instagram {...props} />,
    linkedin: <LinkedIn {...props} />,
    email: <Email {...props} />,
    github: <Github {...props} />,
    x: <X {...props} />,
    calcom: <Calcom {...props} />,
  };

  return icons[name];
};

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialMedia.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          target="_blank"
          className="overflow-hidden transition-all text-[var(--social-icon)] hover:text-[var(--sh-identifier)]"
          onClick={() => track(`${link.name}_link_clicked`)}
        >
          <p className="sr-only">{link.name}</p>
          <Icon name={link.name} className="transition-all h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
