"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

import styles from "./NavLeft.module.scss";

export default function NavLeft() {
  const [navImgIndex, setNavImgIndex] = useState(0);

  const navImages = [
    "/images/tanjiro_happy.jpg",
    "/images/tanjiro_shock.jpg",
    "/images/question_mark.png",
    "/images/crying.gif",
  ];

  const cycleNavImage = () => {
    confetti();
    setNavImgIndex((prev) => (prev + 1) % navImages.length);
  };

  return (
    <motion.div
      className={styles.container}
      onClick={cycleNavImage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Spinning border */}
      <motion.div
        className={styles.border}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Inner image box */}
      <div className={styles.imageBox}>
        <Image
          priority
          src={navImages[navImgIndex]}
          alt="navImg"
          height={50}
          width={50}
          className={styles.image}
        />
      </div>
    </motion.div>
  );
}
