import { motion } from 'framer-motion';

const PopCircle = () => {
  return (
    <motion.div
      className="h-2.5 w-2.5 fill-current text-current"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <Circle />
    </motion.div>
  );
};

const Circle = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="fill-current"
    >
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
};

export default PopCircle;