import FadeInWhenVisible from "../../components/animationSections/fadeInWhenVisible";
import { useState } from "react";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";

const Kindertunen = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Kinderturnen" 
                />
            )}

            <div className="pt-24 md:pt-24 min-h-screen px-2">
                <span className=" w-full flex items-center justify-center">
                    <FadeInWhenVisible>
                        <img className="rounded-lg w-full md:px-52 xl:px-80 2xl:px-[35rem]" src="/kinderturnen/kinderturnen.webp" />
                    </FadeInWhenVisible>                   
                </span>

                <div className='w-full md:px-40 xl:px-60 2xl:px-[25rem] flex flex-col justify-center items-center py-8 '>
                    <p className='px-2 w-full py-4 text-lg md:text-xl text-center'>
                        Das Kinderturnen für 2- bis 5-jährige Kinder findet immer montags um 16:30 in der Melchinger Turnhalle statt.<br/> <br/>
                        Die Betreuerinnen Annika, Sarah und Tina freuen sich auf euer Kommen und auf die sportlichen Aktivitäten mit den Kindern!

                        <br/><br/>
                        Bei Interesse und Fragen steht euch Annika gerne zur Verfügung: <br/>
                        0176 84284495
                    </p>
                </div>
            </div>
        </>
    )
}

export default Kindertunen