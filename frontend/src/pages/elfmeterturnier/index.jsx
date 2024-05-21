import { useEffect, useState, useRef, useCallback } from "react"
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { AnimatePresence, motion } from 'framer-motion';
import RegistrationForm from "./form";
import Payment from "./payment";
import { ScrollArea } from "../../components/ui/scroll-area";


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
              <div className="bg-blue-300 h-16 rounded-t-3xl flex justify-center items-center text-lg md:text-xl font-plusJakaraSans font-semibold">
                Elfmeterturnier Melchingen 2024
              </div>
              <div className="grid md:grid-cols-2 p-2">
                <div className="w-full">
                  <RegistrationForm />
                </div>
                <motion.div
                  className="w-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 5}}
                >
                  <ScrollArea className="w-full h-[40rem] rounded-md border">
                    <Payment />
                  </ScrollArea>
                </motion.div>
              </div>
            </div>
          </div>
      </AnimatePresence>
  );
};

export default Veranstaltungen