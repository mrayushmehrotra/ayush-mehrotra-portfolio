"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const HoverSvg = ({ svgHeigh }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [Text, SetText] = useState("you can play with me :)");

  const [svgWidth, setSvgWidth] = useState(0);
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
    SetText("Yaaaaaaaaaaaaaaaaaay!");

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
    SetText("Oh oh :(");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      SetText("you can play with me :)");
    }, 3000);
    mouseX.set(svgWidth / 2);
    mouseY.set(svgHeight / 2);
  };

  // Update SVG dimensions based on viewport size
  useEffect(() => {
    setSvgWidth(window.innerWidth * 0.8);
  }, []);

  return (
    <>
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
              className="uppercase font-[editorialNew]"
              startOffset={20}
            >
              {Text}
            </textPath>
          </text>
        </svg>
      </center>
    </>
  );
};

export default HoverSvg;
