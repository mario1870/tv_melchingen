import { useState } from "react";
import { motion } from 'framer-motion';
import RegistrationForm from "./form";
import Payment from "./payment";
import { ScrollArea } from "../../../components/ui/shadnCN/scroll-area";
import { TextGenerateEffect } from "../../../components/animationEffects/text-generate-effect";
import { TbArrowBigRightLines } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { fetchDataWithReactQuery } from "../../../utils/fetchDataWithReactQuery";
import { AiFillCreditCard } from "react-icons/ai";
import { FaApplePay, FaGooglePay, FaPaypal  } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";

const ElferturnierCard = () => {
  const [delta, setDelta] = useState(false);
  const [gender, setGender] = useState("");
  const [teamId, setTeamId] = useState("")
  const [email, setEmail] = useState("")

  const { isLoading, isError, data, error } = useQuery({ queryKey: ['allTeams'], queryFn: () => fetchDataWithReactQuery(`/`) });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Filtern aller angemeldeter Teams für Männer- & Frauenturnier
  const initialAcc = { manTeams: 0, womanTeams: 0 };
  const { manTeams, womanTeams } = data.reduce(
    (acc, team) => {
      if (team.gender === "man") {
        acc.manTeams++;
      } else if (team.gender === "woman") {
        acc.womanTeams++;
      }
      return acc;
    },
    initialAcc,
  );

  const manTournamentIsFull = manTeams >= 72
  const womanTournamentIsFull = womanTeams >= 24

  return (
    <>
        <div className="bg-white mx-3 w-full max-w-[40rem] rounded-xl my-10">
            <div className="bg-blue-300 h-[4.5rem] rounded-t-xl flex justify-between items-center text-lg md:text-xl font-plusJakaraSans font-semibold px-4 md:px-8">
                <div>
                  <h2>Elfmeterturnier 2024</h2>
                  <p className="text-[0.8rem] font-normal text-gray-800">3. August - Sportgelände Melchingen</p>
                </div>
                <img src="/logo_gray.png" className="w-auto h-10" />
            </div>
            <div className="p-2">
                {!delta && 
                  <motion.div
                      className="flex flex-col space-y-8 rounded-b-3xl px-6 pb-6 pt-6 md:px-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                      <div className="flex flex-col text-sm">
                          <h2 className="mb-2 text-md font-plusJakaraSans">Ablauf der Anmeldung</h2>
                          <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Daten eingeben</p></span>
                          <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Anmeldegebühr zahlen</p></span>
                          <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Bestätigungsmail erhalten</p></span>
                      </div>
                      <RegistrationForm setDelta={setDelta} setGender={setGender} setTeamId={setTeamId} setEmail={setEmail} manTournamentIsFull={manTournamentIsFull} womanTournamentIsFull={womanTournamentIsFull} />

                      <div className="text-center pt-8">
                        <h1 className="text-lg text-gray-600">
                          Zahlungsmöglichkeiten
                        </h1>
                        <div className="w-full gap-4 flex justify-center mt-4">
                          <AiFillCreditCard className="w-6 h-6 text-gray-700" />
                          <FaApplePay className="w-6 h-6 text-gray-700" />
                          <FaGooglePay className="w-6 h-6 text-gray-700" />
                          <img src="/giropay.png" className="w-6 text-gray-700 object-contain grayscale-60" />
                          <FaPaypal className="w-6 h-6 text-gray-700" />
                          <SiKlarna className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
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
                          <Payment gender={gender} teamId={teamId} email={email} />
                      </motion.div>
                  </ScrollArea>
                }
            </div>
        </div>
    </>
  );
};

export default ElferturnierCard;
