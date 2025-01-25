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

export const Footer = () => {
  return (
    <div>
      <p className="flex text-zinc-400 gap-x-2 text-[1.2em] items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
        <ArrowIcon /> <h1>resume </h1>
      </p>
    </div>
  );
};
