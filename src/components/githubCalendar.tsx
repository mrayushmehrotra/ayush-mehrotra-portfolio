import GitHubCalendar from "react-github-calendar";
export function GithubMap() {
  return (
    <div className="mt-8">
      <GitHubCalendar
        blockSize={7.5}
        hideColorLegend
        blockMargin={3}
        errorMessage="contribution not exist"
        username="mrayushmehrotra"
      />
    </div>
  );
}
