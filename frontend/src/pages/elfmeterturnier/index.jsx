import { useState } from "react";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { AnimatePresence, motion } from 'framer-motion';
import RegistrationForm from "./form";
import Payment from "./payment";
import { ScrollArea } from "../../components/ui/shadnCN/scroll-area";
import { TextGenerateEffect } from "../../components/animationEffects/text-generate-effect";
import { TbArrowBigRightLines } from "react-icons/tb";import { TbArrowForward } from "react-icons/tb";

const Veranstaltungen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(false);
  const [gender, setGender] = useState("");
  const [teamId, setTeamId] = useState("")

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
        <div className="bg-white mx-3 w-full max-w-[40rem] rounded-xl my-10">
          <div className="bg-blue-300 h-16 rounded-t-xl flex justify-between items-center text-lg md:text-xl font-plusJakaraSans font-semibold px-4">
            <TextGenerateEffect className="text-md md:text-xl flex items-center justify-center mt-1" words={"Elfmeterturnier 2024"} />
            <img src="/logo_gray.png" className="w-auto h-10" />
          </div>
          <div className="p-2">
            {!delta && 
              <motion.div
                className="flex flex-col space-y-8 rounded-b-3xl px-6 pb-12 pt-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col text-sm">
                  <h2 className="mb-2 text-md font-plusJakaraSans">Ablauf</h2>
                  <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Daten eingeben</p></span>
                  <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Anmeldegebühr zahlen</p></span>
                  <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Bestätigungsmail erhalten</p></span>
                </div>
                <RegistrationForm setDelta={setDelta} setGender={setGender} setTeamId={setTeamId} />
              </motion.div>
            }
            {delta &&
              <ScrollArea className="w-full h-[40rem] rounded-md">
                <motion.div
                  className="w-full"
                  initial={{ x: "5rem", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Payment gender={gender} teamId={teamId} />
                </motion.div>
              </ScrollArea>
            }
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Veranstaltungen;
