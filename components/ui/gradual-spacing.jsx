"use client";;
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function GradualSpacing({
  text,
  duration = 0.8,
  delayMultiple = 0.06,

  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },

  className
}) {

  function FadeInWhenVisible({ children, initial = 'hidden', whileInView = "visible", viewport = { once: true }, transition = { duration: 0.3 }, exit = "hidden", variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  } }) {
    return (
      <motion.div
        initial={initial}
        // animate="visible"
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        variants={variants}
        exit={exit}
      >
        {children}

      </motion.div>
    );
  }

  return (
    (<div className="flex space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <FadeInWhenVisible key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: (0.8 * i) * delayMultiple }}>
            <h1
              className={cn("drop-shadow-sm ", className)}>
              {char === " " ? <span>&nbsp;</span> : char}
            </h1>
          </FadeInWhenVisible>
        ))}
      </AnimatePresence>
      {/* <div className=" mt-5 ml-5 h-1 w-5 bg-grey"></div> */}
    </div>)
  );
}
