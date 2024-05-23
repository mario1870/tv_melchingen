import { useState } from "react";
import { motion } from 'framer-motion';
import RegistrationForm from "./form";
import Payment from "./payment";
import { ScrollArea } from "../../../components/ui/shadnCN/scroll-area";
import { TextGenerateEffect } from "../../../components/animationEffects/text-generate-effect";
import { TbArrowBigRightLines } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { fetchDataWithReactQuery } from "../../../utils/fetchDataWithReactQuery";

const ElferturnierCard = () => {
  const [delta, setDelta] = useState(false);
  const [gender, setGender] = useState("");
  const [teamId, setTeamId] = useState("")

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
            <div className="bg-blue-300 h-16 rounded-t-xl flex justify-between items-center text-lg md:text-xl font-plusJakaraSans font-semibold px-4 md:px-8">
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
                        <h2 className="mb-2 text-md font-plusJakaraSans">Ablauf der Anmeldung</h2>
                        <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Daten eingeben</p></span>
                        <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Anmeldegebühr zahlen</p></span>
                        <span className="flex justify-start items-center gap-2"><span className="w-6 h-6 flex items-center justify-start"><TbArrowBigRightLines /></span><p className="text-start">Bestätigungsmail erhalten</p></span>
                    </div>
                    <RegistrationForm setDelta={setDelta} setGender={setGender} setTeamId={setTeamId} manTournamentIsFull={manTournamentIsFull} womanTournamentIsFull={womanTournamentIsFull} />
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
    </>
  );
};

export default ElferturnierCard;
