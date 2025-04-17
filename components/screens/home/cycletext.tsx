"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CycleText() {
  const words = [
    "full stack web developer",
    "native app developer",
    "sw enthusiast",
    "movie fanatic",
  ];
  const [index, setIndex] = useState(0);

  const total = words.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1500);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.h1
          key={`words_${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, bounce: 0.2 }}
          className="inline-block font-mono text-pink-500"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
