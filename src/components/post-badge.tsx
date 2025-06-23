import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

type PostBadgeProps = {
  children: string;
  href: string;
};

const PostBadge = ({ children, href }: PostBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const INDICATOR_SIZE = "0.4rem";
  const INDICATOR_LEFT = "0.75rem";

  const indicatorVariants: Variants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 150,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 1, 1],
      },
    },
  };

  const textVariants = {
    rest: {
      transition: { duration: 0.5 },
    },
    hover: {
      color: "#ffffff",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? "hover" : "rest"}
      initial="rest"
      className="relative inline-flex items-center justify-start overflow-hidden px-[calc(1rem)] pr-[calc(INDICATOR_LEFT+0.5rem)] py-2 rounded-[10px] border text-sm font-medium cursor-pointer no-underline isolate bg-white"
      style={{
        border: "1px solid var(--badge-border-color)",
        width: "fit-content",
      }}
    >
      <motion.div
        variants={indicatorVariants}
        className="absolute rounded-full z-0"
        style={{
          left: INDICATOR_LEFT,
          width: INDICATOR_SIZE,
          height: INDICATOR_SIZE,
          backgroundColor: "#3b82f6",
        }}
      />

      <div
        className="absolute rounded-full z-[1] pointer-events-none"
        style={{
          left: INDICATOR_LEFT,
          width: INDICATOR_SIZE,
          height: INDICATOR_SIZE,
          backgroundColor: "#3b82f6",
        }}
      />

      {isHovered && (
        <div
          className="absolute rounded-full z-[2] pointer-events-none"
          style={{
            left: INDICATOR_LEFT,
            width: INDICATOR_SIZE,
            height: INDICATOR_SIZE,
            backgroundColor: "#ffffff",
          }}
        />
      )}

      <motion.span
        variants={textVariants}
        className="relative z-[3] ml-3 text-zinc-700"
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

export default PostBadge;
