import { motion } from "framer-motion";
import React, { useMemo, ReactNode } from 'react';

interface SlideUpWhenVisibleProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
}

function SlideUpWhenVisible({
  children, 
  duration = 0.6, 
  delay = 0.4, 
  ease = "easeInOut", 
  y = 20
}: SlideUpWhenVisibleProps) {
  const variants = useMemo(() => ({
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: y }
  }), [y]);
 
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay, ease: ease }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default React.memo(SlideUpWhenVisible);