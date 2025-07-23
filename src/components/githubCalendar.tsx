import GitHubCalendar from "react-github-calendar";

export function GithubMap() {
  return (
    <div className="p-2 text-center">
      <div className="flex   flex-col items-center">
        <span className=" text-[#f2f2f2] scale-[150%]   md:scale-[200%] m-4  font-bold">
          <GitHubCalendar
            blockSize={0}
            hideMonthLabels
            hideColorLegend
            username="mrayushmehrotra"
          />
        </span>

        <p className="text-xl text-zinc-500 mt-4">
          Want to see my projects? Check out my profile at{" "}
          <a
            href="https://github.com/mrayushmehrotra"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#f2f2f2]  hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
