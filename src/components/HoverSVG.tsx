import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useSpring } from "framer-motion"; // Ensure you're using framer-motion
import { useTheme } from "next-themes";

const HoverSvg = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [svgWidth, setSvgWidth] = useState(1500); // Default width for PC
  const [svgHeight, setSvgHeight] = useState(200); // Default height

  // Spring-based motion values for smooth animation
  const springConfig = { stiffness: 300, damping: 20 };
  const mouseX = useSpring(svgWidth / 2, springConfig); // Initial control point X
  const mouseY = useSpring(svgHeight / 2, springConfig); // Initial control point Y

  // Transform mouseX and mouseY into an SVG path
  const path = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `M 10 ${svgHeight / 2} Q ${x} ${y} ${svgWidth - 10} ${svgHeight / 2}`,
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (svgRect) {
      const x = clientX - svgRect.left; // Adjust X relative to SVG
      const y = clientY - svgRect.top; // Adjust Y relative to SVG
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(svgWidth / 2); // Reset to center X
    mouseY.set(svgHeight / 2); // Reset to center Y
  };

  // Set stroke color based on the theme
  const strokeColor = theme === "dark" ? "white" : "black";

  // Update SVG dimensions based on viewport size
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setSvgWidth(300);
        setSvgHeight(100);
      } else if (width < 1024) {
        // Tablet
        setSvgWidth(800);
        setSvgHeight(150);
      } else {
        // PC
        setSvgWidth(1500);
        setSvgHeight(200);
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions); // Update on resize
    return () => window.removeEventListener("resize", updateDimensions); // Cleanup
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
          stroke={strokeColor}
          strokeWidth="2"
          fill="transparent"
          initial={{ d: `M 10 ${svgHeight / 2} Q ${svgWidth / 2} ${svgHeight / 2} ${svgWidth - 10} ${svgHeight / 2}` }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
        />
      </svg>
    </center>
  );
};

export default HoverSvg;