"use client";

const createDot = (x: number, y: number) => {
  const dot = document.createElement("div");
  const size = Math.random() * 8 + 4;
  const color = `hsl(${Math.random() * 360}, 100%, 60%)`;

  dot.style.position = "absolute";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.backgroundColor = color;
  dot.style.borderRadius = "50%";
  dot.style.pointerEvents = "none";
  dot.style.opacity = "1";
  dot.style.zIndex = "9999";
  dot.style.transition = "all 0.6s ease-out";

  document.body.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${
      (Math.random() - 1) * 200
    }px)`;
    dot.style.opacity = "0";
  });

  setTimeout(() => {
    dot.remove();
  }, 600);
};

export default function PopperButton({ children }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    for (let i = 0; i < 25; i++) {
      createDot(clientX, clientY);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='white'/><stop offset='40%' stop-color='white'/><stop offset='70%' stop-color='white'/><stop offset='100%' stop-color='white'/></linearGradient></defs><text y='20' font-size='30' fill='url(%23g)'>❓</text></svg>") 12 12, auto`,
      }}
    >
      {children}
    </button>
  );
}
