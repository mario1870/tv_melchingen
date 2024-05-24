import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => {
  const checkIconVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check flex items-start justify-start"
      initial="initial"
      animate="animate"
      variants={checkIconVariants}
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        variants={checkIconVariants}
      />
    </motion.svg>
  );
};

export default CheckIcon;