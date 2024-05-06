import { motion } from "framer-motion";
import React from "react";

const WelcomeAnimation = ({ isVisible, onAnimationComplete, text }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      style={{ zIndex: '9999' }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 10 }}
      transition={{ duration: 0.4, delay: 1, ease: 'easeInOut' }}
      className="w-full min-h-full z-30 flex flex-col left-0 fixed bg-blue-900 justify-center items-center"
      onAnimationComplete={onAnimationComplete}
    >
      <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0, ease: 'easeInOut' }}>
        <img src="/navbar/TVMlogo.png" className="w-full pt-24" />
      </motion.span>
      <p className="text-6xl text-center font-outline-4 text-white py-8">{text}</p>
    </motion.div>
  );
};

export default React.memo(WelcomeAnimation);
