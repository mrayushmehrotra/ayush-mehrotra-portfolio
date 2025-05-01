import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const HoverSvg = ({ svgHeigh }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [Text, SetText] = useState("you can play with me :)");
  const [offSetValue, setOffSetValue] = useState(20);

  const [svgWidth, setSvgWidth] = useState(window.innerWidth * 0.8); // 80% of screen width
  const svgHeight = svgHeigh; // Default height
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Spring-based motion values for smooth animation
  const springConfig = { stiffness: 300, damping: 20 };
  const mouseX = useSpring(svgWidth / 2, springConfig);
  const mouseY = useSpring(svgHeight / 2, springConfig);

  // Transform mouseX and mouseY into an SVG path
  const path = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `M 10 ${svgHeight / 2} Q ${x} ${y} ${svgWidth - 10} ${svgHeight / 2}`,
  );
  const handleMouseMove = (event: React.MouseEvent) => {
    SetText("Yay!");
    setOffSetValue(window.innerWidth / 4);
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
    setOffSetValue(window.innerWidth / 4);
    SetText("Oh oh :(");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      SetText("you can play with me :)");
      setOffSetValue(20);
    }, 4000);
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
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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
          stroke={"white"}
          strokeWidth="2"
          fill="transparent"
          initial={{
            d: `M 10 ${svgHeight / 2} Q ${svgWidth / 2} ${svgHeight / 2} ${svgWidth - 10} ${svgHeight / 2}`,
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
          id="lineAC"
        />
        <text
          style={{ fill: "white" }}
          className="text-xl md:text-4xl lg:text-8xl  "
        >
          <textPath
            href="#lineAC"
            className="uppercase font-[neuka]"
            startOffset={offSetValue}
          >
            {Text}
          </textPath>
        </text>
      </svg>
    </center>
  );
};

export default HoverSvg;
