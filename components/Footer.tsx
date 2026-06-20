import ParticleText from "components/ui/particle-text-split";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex flex-col justify-end relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover lg:hidden"
      >
        <source src="/footer_pikachu_run.mp4" type="video/mp4" />
      </video>
      <div className="hidden lg:block absolute inset-0 top-[60px]">
        <ParticleText text="Made By Ayush Mehrotra ❤️ " />
      </div>
    </div>
  );
}
