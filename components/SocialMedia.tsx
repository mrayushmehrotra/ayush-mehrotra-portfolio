import Link from "next/link";
import Email from "./icons/Email";
import Github from "./icons/Github";
import X from "./icons/X";
import LinkedIn from "./icons/LinkedIn";
import Calcom from "./icons/Calcom";
import Youtube from "./icons/Youtube";
import { socialMedia } from "./resources/content";

const iconComponents: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  calcom: Calcom,
  x: X,
  github: Github,
  youtube: Youtube,
  linkedin: LinkedIn,
  email: Email,
};

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {socialMedia
        .filter((s) => s.name !== "resume")
        .map((link) => {
          const Icon = iconComponents[link.name];
          if (!Icon) return null;
          return (
            <Link
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-400"
              style={{
                border: "1px solid var(--line-strong)",
                color: "var(--cream)",
                letterSpacing: "0.16em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--line-strong)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)";
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              {link.name === "calcom"
                ? "Cal.com"
                : link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </Link>
          );
        })}
    </div>
  );
};

export default SocialMedia;
