import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

const FooterContent = [
  {
    link: "https://github.com/mrayushmehrotra",
    title: "GitHub",
  },
  {
    link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
    title: "Resume",
  },
];

export const Footer = () => {
  return (
    <div
      className="mt-8 flex flex-col sm:items-center gap-y-4
      sm:flex-col md:flex-row md:justify-between lg:justify-between"
    >
      {FooterContent.map((item) => (
        <Link key={item.title} href={item.link}>
          <p className="flex items-center gap-x-2 text-zinc-400 text-[1.2em] transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
            <ArrowIcon /> <span>{item.title}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};
