"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  separator?: string;
  speed?: number;
  className?: string;
}

export default function Marquee({
  text,
  separator = "\u00A0\u00A0\u2022\u00A0\u00A0",
  speed = 20,
  className = "",
}: MarqueeProps) {
  const repeated = `${text}${separator}`.repeat(12);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none flex items-center ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span>{repeated}</span>
      </motion.div>
    </div>
  );
}
