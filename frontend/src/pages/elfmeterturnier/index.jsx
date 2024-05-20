import { useEffect, useState, useRef, useCallback } from "react"
import WelcomeAnimation from "../../animationSections/welcomeAnimation";
import { AnimatePresence, motion } from 'framer-motion';
import RegistrationForm from "./form";
import Payment from "./payment";
 
const Veranstaltungen = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
      <AnimatePresence>
          {isVisible && (
            <WelcomeAnimation 
                isVisible={isVisible} 
                onAnimationComplete={() => setIsVisible(false)} 
                text="Elfmeterturnier" 
            />
          )}

          <div className="w-full h-full min-h-screen pt-20 flex justify-center items-center">
            <div className="bg-white mx-3 w-full max-w-[60rem] rounded-3xl my-10">
              <div className="bg-blue-300 h-16 rounded-t-3xl flex justify-center items-center text-xl font-plusJakaraSans font-semibold">
                Elfmeterturnier Melchingen 2024
              </div>
              <div className="grid md:grid-cols-2">
                <RegistrationForm />
                <Payment />
              </div>
            </div>
          </div>
      </AnimatePresence>
  );
};

export default Veranstaltungen