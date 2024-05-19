"use client";
import React from "react";
import { motion } from "framer-motion";

const xInitialValue = "100%"; // Define initial value for '--x'
const xAnimateValue = "-100%"; // Define animate value for '--x'

const Button = () => {
  const handleClick = () => {
    window.location.href = "/bestill";
  };

  return (
    <div>
      <motion.button
        initial={{ "--x": xInitialValue } as any}
        animate={{ "--x": xAnimateValue } as any}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="px-6 py-3 rounded-[10px] relative radial-gradient"
        onClick={handleClick}
      >
        <span className="text-black text-xl tracking-wider font-semibold h-full w-full block relative linear-mask">
          Bestill
        </span>
        <span className="block absolute inset-0 rounded-[10px] p-px linear-overlay" />
      </motion.button>
    </div>
  );
};

export default Button;
