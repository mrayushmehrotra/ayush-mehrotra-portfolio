import ParticleText from "components/ui/particle-text-split";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover lg:hidden"
        style={{ top: "20%", opacity: 0.7 }}
      >
        <source src="/footer_pikachu_run.mp4" type="video/mp4" />
      </video>
      <div className="hidden lg:block absolute inset-0 top-[60px]">
        <ParticleText text="Made By Ayush Mehrotra ❤️ " />
      </div>
    </div>
  );
}
