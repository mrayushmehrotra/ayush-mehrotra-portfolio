export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className="h-full w-full flex flex-col justify-end relative overflow-hidden"
      style={{ background: "#1A1815", top: "-10%", position: "relative" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ opacity: 0.35, top: "10%", left: 0 }}
      >
        <source src="/footer_pikachu_run.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
