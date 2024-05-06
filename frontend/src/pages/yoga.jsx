import { useState } from "react";
import WelcomeAnimation from "../animationSections/welcomeAnimation";

const Yoga = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Yoga" 
                />
            )}

            <div className="pt-20 md:pt-20 pb-8 min-h-screen px-2 lg:px-40 ">

                <div className="flex flex-col lg:flex-row bg-blue-300 my-10 rounded-3xl">
                    <span className="md:min-h-full flex items-center justify-center">
                        <img className="rounded-3xl" src="/yoga/yoga.jpg" loading="lazy" />                    
                    </span>

                    <span className="flex items-center py-12 lg:px-12 justify-center">
                        <h1 className="px-6 text-xl xl:text-4xl"> Liebe TVM-Mitglieder,<br/><br/>wir bieten in Kooperation mit Anna<br/>montags und dienstags Yoga-Kurse<br/>bei uns in Melchingen an.<br/> <br/>Mehr Infos erhaltet ihr unter der Website:<br/><a href="https://www.yoganna-alb.de" className="underline">www.yoganna-alb.de</a></h1>
                    </span>
                </div>

            </div>
        </>
    )
}

export default Yoga