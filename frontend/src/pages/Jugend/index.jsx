
import FadeInWhenVisible from "../../components/animationSections/fadeInWhenVisible";
import { useState } from "react";
import { MY_URL, MY_URL_STRAPI } from "../../config";
import { Skeleton } from "../../components/ui/skeleton"
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/jugends?populate=*`);
    return response.json()
  };  

const Jugend = () => {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['jugend'], queryFn: fetchData });
    const [isVisible, setIsVisible] = useState(true);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Jugend" 
                />
            )}
            
            <div className="pt-20">
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-4 xl:px-20">
                    {data.data.sort((a, b) => a.index - b.index)
                    .map((element, index) => (

                        <FadeInWhenVisible key={index}>
                            <div className="flex flex-col justify-center items-center pb-4 border-blue-500 md:p-4 md:px-20 rounded-lg">
                                <h1 className="text-4xl py-6">{element.alter}</h1>
                                
                                {element.attributes.Bild && element.attributes.Bild.data && (
                                    <img className="rounded-lg" src={`${MY_URL_STRAPI}${element.attributes.Bild.data.attributes.url}`} alt="" loading="lazy" />
                                )}
                               
                                <div className="flex gap-2 my-2">
                                    <p className="font-bold">Training: </p>
                                    <p>{element.attributes.Training}</p>
                                </div>
                                <div className="flex gap-2 my-2">
                                    <p className="font-bold">Trainer:</p>
                                    <p>{element.attributes.Trainer}</p> 
                                </div>

                                {element.attributes.Fussballde ? (
                                    <p className="text-xl py-3 text-center">
                                        Jetzt aktuelle Ergebnisse checken unter:{" "}
                                        <a href={element.attributes.Fussballde} className="text-black underline">
                                        Fussball.de
                                        </a>
                                    </p>
                                ): <div className="text-xl py-3 text-center">-</div>}

                                
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Jugend