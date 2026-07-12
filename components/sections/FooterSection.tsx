import Footer from "../Footer";

export default function FooterSection() {
  return (
    <div
      className="relative"
      style={{
        height: "300px",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className="fixed bottom-[20%] h-[300px] w-full"
        style={{ zIndex: 1 }}
      >
        <Footer />
      </div>
    </div>
  );
}
