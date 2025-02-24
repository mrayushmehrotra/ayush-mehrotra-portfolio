import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

const HoverSvg = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [svgWidth, setSvgWidth] = useState(window.innerWidth * 0.8); // 80% of screen width
  const [svgHeight, setSvgHeight] = useState(200); // Default height

  // Spring-based motion values for smooth animation
  const springConfig = { stiffness: 300, damping: 20 };
  const mouseX = useSpring(svgWidth / 2, springConfig);
  const mouseY = useSpring(svgHeight / 2, springConfig);

  // Transform mouseX and mouseY into an SVG path
  const path = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `M 10 ${svgHeight / 2} Q ${x} ${y} ${svgWidth - 10} ${svgHeight / 2}`,
  );
setSvgHeight(200)
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (svgRect) {
      const x = clientX - svgRect.left;
      const y = clientY - svgRect.top;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(svgWidth / 2);
    mouseY.set(svgHeight / 2);
  };

  // Update SVG dimensions based on viewport size
  useEffect(() => {
    const updateDimensions = () => {
      setSvgWidth(window.innerWidth * 0.8); // Always 80% of screen width
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <center
      className="w-full z-20 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg ref={svgRef} height={svgHeight} width={svgWidth}>
        <motion.path
          d={path}
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="2"
          fill="transparent"
          initial={{ d: `M 10 ${svgHeight / 2} Q ${svgWidth / 2} ${svgHeight / 2} ${svgWidth - 10} ${svgHeight / 2}` }}
          transition={{ duration: 1, type: "spring", stiffness: 500, damping: 40 }}
        />
      </svg>
    </center>
  );
};

export default HoverSvg;
