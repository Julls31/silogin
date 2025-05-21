// src/components/AnimatedPage.jsx
import React from "react";
import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  const variants = {
    initial: { x: "100%", opacity: 1 },
    in: { x: 0, opacity: 1 },
    out: { x: "-100%", opacity: 0 },
  };

  const transition = {
    duration: 0.6,
    ease: [0.42, 0.13, 0.23, 0.96],
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
