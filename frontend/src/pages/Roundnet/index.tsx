import React, { useState } from "react";
import { motion } from "framer-motion";
import SlideUpWhenVisible from "@/components/animationSections/slideUpWhenVisible";
import { TextGenerateEffect } from "@/components/animationEffects/text-generate-effect";
  
const Roundnet: React.FC = () => {

    const delayRectangle = 0.5;

    return (
        <>
            <div className="min-h-svh z-10 flex justify-center items-end">
                <>
                    <motion.div
                        className="bg-white/0 rounded-[3rem] absolute w-11/12 md:w-8/12 h-auto max-h-[30rem] md:h-[30rem] flex flex-col p-1 mb-10 gap-1"
                    >
                        <div className="md:h-12 md:px-6 px-2 text-center md:text-start flex justify-between items-end py-4 md:py-0">
                            <TextGenerateEffect 
                                delay={delayRectangle * 1000 + 2000} 
                                words={"Roundnet beim TV Melchingen"} 
                            />
                        </div>

                        <div className="w-full h-full flex flex-col items-end justify-end md:flex-row gap-1 mt-1">
                            <motion.img 
                                src="/roundnet/himmelberg2.jpg" 
                                alt="Roundnet Spieler auf dem Himmelberg"
                                className="h-1/3 md:h-full md:w-1/3 object-cover md:rounded-l-[3rem] hidden md:block" 
                                initial={{ opacity: 0}} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 0.8, delay: delayRectangle + 0.8, ease:"easeInOut" }} 
                            />
                            <motion.img 
                                src="/roundnet/himmelberg.jpg"
                                alt="Roundnet auf dem Himmelberg" 
                                className="h-auto md:h-full md:w-1/3 object-cover rounded-[3rem] md:rounded-none " 
                                initial={{ opacity: 0}} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 0.8, delay: delayRectangle + 1.0, ease:"easeInOut" }} 
                            />
                            <motion.img 
                                src="/roundnet/himmelberg1.jpg"
                                alt="Roundnet Spieler in Aktion" 
                                className="h-1/3 md:h-full md:w-1/3 object-cover rounded-r-[3rem] hidden md:block" 
                                initial={{ opacity: 0}} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 0.8, delay: delayRectangle + 1.2, ease:"easeInOut" }} 
                            />
                        </div>
                    </motion.div>
                </>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mt-16 md:mt-40 pb-6 md:pb-32 mx-4 md:mx-32 font-roboto">
                <SlideUpWhenVisible delay={0.3}>
                    <div>
                        <h1 className="text-xl md:text-3xl font-freeman">
                            Entdecke Roundnet: Unsere Neue Leidenschaft!
                        </h1>

                        <h3 className="text-lg my-4 font-semibold">
                            Roundnet? Was ist das denn? 
                        </h3>

                        <p className="md:text-lg">
                            Diese coole Trendsportart ähnelt ein wenig der Sportart Volleyball. Zwei Teams mit je 2 Personen spielen gegeneinander und haben jeweils 3 Berührungen, um den Ball zurück aufs Netz zu bringen. Das Netz befindet sich auf dem Boden und beide Teams können sich frei um das Netz bewegen. Spaß ist bei dieser Sportart auf jeden Fall garantiert. Nicht ohne Grund sieht man mittlerweile fast in jedem Park 4 Personen um dieses „komische Netz" herumrennen 😉
                        </p>
                        <br />
                        <p className="text-lg font-semibold">
                            Sieh dir das kurze Erklärungsvideo an und mach mit beim Training!
                        </p>
                    </div>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.35}>
                    <div className="w-full flex justify-center items-center">
                        <iframe 
                            className="rounded-xl max-h-60 md:max-h-full" 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/T3vLN-KHUlQ?si=MT_zyi4Coi7c5K0t" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </SlideUpWhenVisible>
            </div>

            <div className="pb-16 md:pb-40 pt-6 md:pt-32 placeholder-neutral-200 mx-4 md:mx-32 flex flex-col-reverse md:flex-row">
                <div className="rounded-xl md:w-1/2">
                    <SlideUpWhenVisible delay={0.1}>
                        <img 
                            src="/roundnet/team.jpg" 
                            alt="Roundnet Team Foto" 
                            className="w-full max-w-[40rem] rounded-xl" 
                        />
                    </SlideUpWhenVisible>
                </div>
                
                <div className="md:w-1/2 mb-6">
                    <SlideUpWhenVisible delay={0.15}>
                        <h2 className="text-black text-2xl md:text-3xl font-bold font-freeman">
                            Melchinger Goldhähnchen
                        </h2>
                        <div className="text-black text-md md:text-lg font-roboto my-6 grid grid-cols-8 gap-4">
                            <span className="w-full col-span-8">
                                Die Melchinger Roundnet Community existiert seit Herbst 2023 und erfreut sich seither wachsender Beliebtheit. Unsere Trainingseinheiten finden <strong>jeden Freitag von 18 bis 20 Uhr</strong> statt.<br/>In den kalten Monaten trainieren wir in der Halle, während wir ab April bei gutem Wetter auf dem Sportplatz aktiv sind.
                                Unser Training besteht nicht nur aus Spielphasen, sondern beinhaltet auch eine kurze Übungsphase, um Technik und Taktik zu verbessern.<br/><br/>Wir möchten damit sowohl Anfängern als auch Fortgeschrittenen die Möglichkeit bieten, ihre Fähigkeiten zu entwickeln und zu verfeinern.
                                Willkommen sind alle, die Spaß am Spiel haben und gerne Teil unserer Community werden möchten. Besonders freuen würden wir uns über ein paar weibliche Teilnehmerinnen, um unsere Gruppe noch vielfältiger zu gestalten.
                                <br/><br/>Worauf wartet ihr also noch? Folgt dem Ruf der Goldhähnchen und lernt die Dynamik und den Spaß der Sportart Roundnet kennen! 😊
                            </span>
                        </div>
                    </SlideUpWhenVisible>
                </div>
            </div>

            <div></div>
        </>
    );
};

export default Roundnet;