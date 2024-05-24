import { useState } from "react";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/shadnCN/button";
import ElferturnierCard from "./components/page";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
        <ElferturnierCard />
      </div>
      
      <div className="w-full flex justify-center items-center pb-12">
        <Link to="/elfmeterturnier/teams">
          <Button className="bg-white/80 hover:bg-gray-50/50 text-black rounded-full px-4 py-2">
            Zur Teamliste<HiOutlineArrowUpRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default Veranstaltungen;
