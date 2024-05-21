import { useState } from "react";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import SlideUpWhenVisible from "../../components/animationSections/slideUpWhenVisible";
import { motion } from "framer-motion"; // Importiere die SVG-Datei
import { TextGenerateEffect } from "../../components/animationEffects/text-generate-effect";
import { useMediaQuery } from 'react-responsive';
import { FaVolleyballBall } from "react-icons/fa";
import useScrollViewport from "../../hooks/framer-animations/useScrollViewport";
import { useTransform } from "framer-motion";
  
const Roundnet = () => {
    const [isVisible, setIsVisible] = useState(true);

    const MobileWidth = 768; // Beispielwert für die Breite eines Mobilgeräts
    const isMobile = useMediaQuery({ maxWidth: MobileWidth });
    const width = isMobile ? "90%" : "66%";

    const delayRectangle = 1.5

    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Roundnet" 
                />
            )}

            <div className="min-h-svh z-10 flex justify-center items-end">

                <div className="text-6xl absolute top-32 md:top-40 font-roboto max-w-[66%]">
                    <TextGenerateEffect 
                        delay={2000} 
                        className={"text-4xl text-center md:text-start md:text-8xl"} words={"Herzlich Willkommen"} />
                </div>

                {!isVisible && 
                    <>
                        <motion.div
                            className="bg-white rounded-3xl absolute w-full h-auto max-h-[30rem] md:h-[30rem] flex flex-col p-1 mb-10 gap-1"
                            initial={{ width: "10rem", borderRadius: "5rem", height:"10rem"}} 
                            animate={{ width: width, borderRadius: "3rem", height:"auto" }} 
                            transition={{ duration: 1, delay: delayRectangle, ease:"easeInOut" }} 
                        >

                            <div className="w-full h-auto flex justify-center items-center">
                                <motion.img 
                                    src="/roundnet/logo_gray.png"
                                    loading="eager"
                                    className="h-32 w-32 object-cover mx-auto my-auto absolute top-[1rem]" 
                                    initial={{ opacity: 1, height: "auto" }} 
                                    animate={{ opacity: 0, height: 0 }} 
                                    transition={{ duration: 0.5, delay: delayRectangle, ease:"easeInOut" }} 
                                />
                            </div>

                            <div className="md:h-12 md:px-6 px-2 text-center md:text-start flex justify-between items-end">
                                <TextGenerateEffect delay={delayRectangle * 1000 + 2000} words={"Die Goldhähnchen: Roundnet beim TV Melchingen"} />
                            </div>

                            <div className="w-full h-full flex flex-col items-end justify-end md:flex-row gap-1 mt-1">
                                <motion.img 
                                    src="/roundnet/himmelberg2.jpg" 
                                    className="h-1/3 md:h-full md:w-1/3 object-cover md:rounded-l-[3rem] hidden md:block" 
                                    initial={{ opacity: 0}} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 0.8, delay: delayRectangle + 0.8, ease:"easeInOut" }} 
                                />
                                <motion.img 
                                    src="/roundnet/himmelberg.jpg" 
                                    className="h-auto md:h-full md:w-1/3 object-cover rounded-[3rem] md:rounded-none " 
                                    initial={{ opacity: 0}} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 0.8, delay: delayRectangle + 1.0, ease:"easeInOut" }} 
                                />
                                <motion.img 
                                    src="/roundnet/himmelberg1.jpg" 
                                    className="h-1/3 md:h-full md:w-1/3 object-cover rounded-r-[3rem] hidden md:block" 
                                    initial={{ opacity: 0}} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 0.8, delay: delayRectangle + 1.2, ease:"easeInOut" }} 
                                />
                            </div>
                        </motion.div>
                    </>
                }

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mt-16 md:mt-40 pb-6 md:pb-32 mx-4 md:mx-32 font-roboto">
                <SlideUpWhenVisible delay={0.3}>
                    <div>
                        <h1 className="text-xl md:text-3xl font-freeman">
                            Entdecke Roundnet: Unsere Neue Leidenschaft!
                        </h1>

                        <h3 className="text-lg my-4 font-semibold">
                            Was ist Roundnet?
                        </h3>

                        <p>
                            Roundnet ist ein aufregendes Spiel, das Volleyball und Völkerball vereint. Zwei Teams kämpfen darum, den Ball auf ein niedriges Netz zu schlagen, um Punkte zu erzielen.
                        </p>
                        <br />
                        <p>
                            Sieh dir das kurze Erklärungsvideo an und mach mit beim Training!
                        </p>

                        <h3 className="text-lg my-4 font-semibold">
                            Willkommen in der Welt des Roundnet!
                        </h3>
                    
                    </div>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible delay={0.35}>
                    <div className="w-full flex justify-center items-center">
                        <iframe className="rounded-xl max-h-60 md:max-h-full" width="560" height="315" src="https://www.youtube.com/embed/T3vLN-KHUlQ?si=MT_zyi4Coi7c5K0t" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </SlideUpWhenVisible>
            </div>

            <div className="pb-16 md:pb-40 pt-6 md:pt-32 placeholder-neutral-200 mx-4 md:mx-32 flex flex-col-reverse md:flex-row">

                <div className="rounded-xl md:w-1/2">
                    <SlideUpWhenVisible delay={0.1}>
                        <img src="/roundnet/team.jpg" className="w-full max-w-[40rem] rounded-xl" />
                    </SlideUpWhenVisible>
                </div>
                
                
                    <div className="md:w-1/2 mb-6">
                        <SlideUpWhenVisible delay={0.15}>
                            <h2 class="text-black text-2xl md:text-3xl font-bold font-freeman">Melchinger Goldhähnchen</h2>
                            <div class="text-black text-md md:text-xl font-roboto my-6 md:my-12 grid grid-cols-8 gap-4">
                                <span className="flex justify-center items-center">
                                    <FaVolleyballBall className="h-6 w-6" />
                                </span>
                                <h2 className="col-span-7">
                                     Roundnetgruppe des TV Melchingen
                                </h2>
                                <span className="flex justify-center items-center">
                                    <FaVolleyballBall className="h-6 w-6" />
                                </span>
                                <h2 className="col-span-7">
                                     Training findet Freitags um 18 Uhr statt, entweder in der Melchinger Turnhalle oder bei schönem Wetter auf dem Melchinger Sportplatz
                                </h2>
                                <span className="flex justify-center items-center">
                                    <FaVolleyballBall className="h-6 w-6" />
                                </span>
                                <h2 className="col-span-7">
                                     Bei Fragen und Interesse melden Sie sich bei Raphael (Nummer)
                                </h2>
                                <br/><br/>
                                <h2 className="col-span-8 px-6">
                                    Es ist egal ob Sie Roundnet bereits lieben oder einfach mal etwas Neues ausprobieren möchten – <strong>alle sind bei uns herzlich willkommen!</strong>
                                </h2>
                            </div>
                        </SlideUpWhenVisible>
                    </div>
                

            </div>

            <div></div>

        </>
    )
}

export default Roundnet