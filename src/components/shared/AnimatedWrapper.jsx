"use client";

import { motion } from "framer-motion";

export default function AnimatedWrapper({
  children,
  type = "fadeUp",
  delay = 0,
  duration = 0.45,
  className = "",
  staggerChildren = 0.1,
  viewportOnce = true,
  ...props
}) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
        },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariant = variants[type];

  if (type === "stagger") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: viewportOnce, margin: "-50px" }}
        variants={selectedVariant}
        transition={{ duration, ease: "easeOut" }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: "-50px" }}
      variants={selectedVariant}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
