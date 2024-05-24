import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TextGenerateEffect } from "../../../components/animationEffects/text-generate-effect";
import { useAnimate, stagger, delay } from "framer-motion"
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/shadnCN/button";
import { fetchDataWithReactQuery } from "../../../utils/fetchDataWithReactQuery";
import { motion } from "framer-motion";


const ElfmeterturnierListe = () => {
    const [gender, setGender] = useState("man")    
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['allTeams'], queryFn: () => fetchDataWithReactQuery(`/`) });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    const men = data.filter(data => data.gender === "man");
    const women = data.filter(data => data.gender === "woman");

    return (
        <>
      <div className="w-full h-full min-h-screen pt-20 flex justify-center items-start">
        <div className="bg-white mx-3 w-full max-w-[40rem] rounded-xl my-10">
          <div className="bg-blue-300 h-16 rounded-t-xl flex justify-center items-center text-lg md:text-xl font-plusJakaraSans font-semibold">
            <TextGenerateEffect className="text-md md:text-xl" words={"Angemeldete Teams"} />
          </div>

          <div className="h-16 grid grid-cols-2 mt-6">
            <span className={`flex justify-center items-center w-full h-full`}>
                <Button className={`flex justify-center items-center text-lg font-roboto cursor-pointer rounded-full p-4 text-black ${gender === "man" ? "bg-blue-300 hover:bg-blue-300/80" : "bg-gray-200/40 hover:bg-gray-200/20"}`} onClick={() => setGender("man")}>
                    Männerturnier
                </Button>
            </span>
            <span className={`flex justify-center items-center w-full h-full`}>
                <Button className={`flex justify-center items-center text-lg font-roboto cursor-pointer rounded-full py-2 text-black ${gender === "woman" ? "bg-blue-300 hover:bg-blue-300/80" : "bg-gray-200/40 hover:bg-gray-200/20"}`} onClick={() => setGender("woman")}>
                    Frauenturnier
                </Button>
            </span>
          </div>

          <div className="p-2">
            <motion.div
                className="flex flex-col rounded-b-3xl px-6 pb-6 pt-6 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {gender === "man" && men.length === 0 && (
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-center">Noch kein Team angemeldet</p>
                        <Link to={"/elfmeterturnier"} className="text-lg text-center">
                            <Button className="mt-4 px-6 bg-gray-200 text-black">
                                Zur Anmeldung
                            </Button>
                        </Link>
                    </div>                
                )}
                {gender === "man" && (
                    <motion.div className="flex flex-col text-xl" initial="hidden" animate="visible">
                        {men.map((team, index) => (
                            <motion.div 
                                key={team.teamname}
                                className="flex flex-row gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: [0, 0.2, 1], x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15, ease: "easeInOut" }}
                            >
                                <p>{index + 1}.</p> 
                                <p>{team.teamname}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
                {gender === "woman" && women.length === 0 && (
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-center">Noch kein Team angemeldet</p>
                        <Link to={"/elfmeterturnier"} className="text-lg text-center">
                            <Button className="mt-4 px-6 bg-gray-200 text-black">
                                Zur Anmeldung
                            </Button>
                        </Link>
                    </div>
                )}
                {gender === "woman" && (
                    <motion.div className="flex flex-col text-xl" initial="hidden" animate="visible">
                        {women.map((team, index) => (
                            <motion.div 
                                key={team.teamname}
                                className="flex flex-row gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: [0, 0.2, 1], x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15, ease: "easeInOut" }}
                            >
                                <p>{index + 1}.</p> 
                                <p>{team.teamname}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>
          </div>
        </div>
      </div> 
        </>
    );
};

export default ElfmeterturnierListe;
