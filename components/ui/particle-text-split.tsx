import React, { useRef, useEffect } from "react";

const ParticleText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: any[] = [];
    let animationFrameId: number;

    function resize() {
      const rect = container!.getBoundingClientRect();
      canvas!.width = rect.width * window.devicePixelRatio;
      canvas!.height = rect.height * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = rect.height + "px";
    }

    class Particle {
      x: number;
      y: number;
      color: string;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 2;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 40 + 5;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fill();
      }

      update() {
        let dx = mouse.current.x - this.x;
        let dy = mouse.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouse.current.radius - distance) / mouse.current.radius;
        if (force < 0) force = 0;

        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.current.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    function init() {
      const w = container!.getBoundingClientRect().width;
      const h = container!.getBoundingClientRect().height;
      particlesArray = [];
      const text = "build something";
      const fontSize = Math.min(100, w / 8);

      ctx!.font = `bold ${fontSize}px "Arial Black", Gadget, sans-serif`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";

      const gradient = ctx!.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0.2, "#C9A37A");
      gradient.addColorStop(0.5, "#EDE5D4");
      gradient.addColorStop(0.8, "#C9A37A");
      ctx!.fillStyle = gradient;

      ctx!.fillText(text, w / 2, h / 2);
      const textCoordinates = ctx!.getImageData(0, 0, w, h);
      ctx!.clearRect(0, 0, w, h);

      for (let y = 0; y < textCoordinates.height; y += 4) {
        for (let x = 0; x < textCoordinates.width; x += 4) {
          const alphaIndex = y * 4 * textCoordinates.width + x * 4 + 3;
          if (textCoordinates.data[alphaIndex] > 128) {
            const r = textCoordinates.data[alphaIndex - 3];
            const g = textCoordinates.data[alphaIndex - 2];
            const b = textCoordinates.data[alphaIndex - 1];
            const color = `rgb(${r},${g},${b})`;
            particlesArray.push(new Particle(x, y, color));
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particlesArray.forEach((p) => {
        p.draw();
        p.update();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    const handleResize = () => {
      resize();
      init();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container!);

    resize();
    init();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    container!.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container!.removeEventListener("mouseleave", handleMouseLeave);
      ro.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "40vh",
        minHeight: "300px",
        overflow: "hidden",
        borderRadius: "",
        cursor: "default",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

export default ParticleText;
