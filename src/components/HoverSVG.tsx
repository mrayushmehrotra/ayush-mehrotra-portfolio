import React, { useRef } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes"; // Import useTheme

const HoverSvg = () => {
  const svgRef = useRef(null);
  const { theme } = useTheme(); // Get the current theme

  // Spring-based motion values for smooth animation
  const springConfig = { stiffness: 300, damping: 20 };
  const mouseX = useSpring(500, springConfig); // Initial control point X
  const mouseY = useSpring(100, springConfig); // Initial control point Y

  // Transform mouseX and mouseY into an SVG path
  const path = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `M 10 100 Q ${x} ${y} 1590 100`,
  );

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX); // Update X position with spring smoothing
    mouseY.set(clientY); // Update Y position with spring smoothing
  };

  const handleMouseLeave = () => {
    mouseX.set(500); // Reset to initial X
    mouseY.set(100); // Reset to initial Y
  };

  // Set stroke color based on the theme
  const strokeColor = theme === "dark" ? "white" : "black";

  return (
    <center
      className="w-full z-20 relative" // Add relative positioning
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg ref={svgRef} height="200" width="1500">
        <motion.path
          d={path}
          stroke={strokeColor} // Dynamic stroke color
          strokeWidth="2"
          fill="transparent"
          initial={{ d: "M 10 100 Q 500 100 1490 100" }}
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
