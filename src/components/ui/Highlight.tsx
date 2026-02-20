"use client";

import { motion } from "framer-motion";

interface HighlightProps {
  children: React.ReactNode;
  color?: "blush" | "lilac" | "matcha";
}

const colorMap = {
  blush: "rgba(236, 204, 191, 0.5)",
  lilac: "rgba(224, 216, 236, 0.5)",
  matcha: "rgba(212, 220, 189, 0.5)",
};

export default function Highlight({
  children,
  color = "blush",
}: HighlightProps) {
  return (
    <motion.span
      className="px-1 -mx-0.5"
      style={{
        backgroundImage: `linear-gradient(${colorMap[color]}, ${colorMap[color]})`,
        backgroundSize: "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      {children}
    </motion.span>
  );
}
