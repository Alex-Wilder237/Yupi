"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cn } from "../lib/Utils";

const FlipText = ({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}) => {
  return (
    <div className="flex justify-center ">
      <AnimatePresence mode="wait">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={Cn("origin-center drop-shadow-sm", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FlipText;
