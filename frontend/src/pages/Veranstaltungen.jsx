import { useEffect, useState, useRef } from "react"
import WelcomeAnimation from "../animationSections/welcomeAnimation";
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};


const Veranstaltungen = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
      <AnimatePresence>
          {isVisible && (
            <WelcomeAnimation 
                isVisible={isVisible} 
                onAnimationComplete={() => setIsVisible(false)} 
                text="Veranstaltungen" 
            />
          )}

          <div className="w-full h-full min-h-screen pt-20">
              Coming soon!
          </div>
      </AnimatePresence>
  );
};

export default Veranstaltungen