import GitHubCalendar from "react-github-calendar";

export function GithubMap() {
  return (
    <div className="p-2 text-center">
      <div className="flex flex-col items-center">
        <span className="text-emerald-600 font-bold">
          <GitHubCalendar
            blockSize={0}
            hideMonthLabels
            hideColorLegend
            username="mrayushmehrotra"
          />
        </span>

        <p className="text-sm text-zinc-500 mt-4">
          Want to see my projects? Check out my profile at{" "}
          <a
            href="https://github.com/mrayushmehrotra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
