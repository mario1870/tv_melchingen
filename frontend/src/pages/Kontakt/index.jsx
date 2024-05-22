import { Card, CardContent, CardHeader } from "../../components/ui/shadnCN/card"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import FadeInWhenVisible from "../../components/animationSections/fadeInWhenVisible";
import { useState } from "react";
import { MY_URL, MY_URL_STRAPI } from "../../config";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/kontakts?populate=*`);
    return response.json()
  };  

const Kontakt = () => {  

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['contact'], queryFn: fetchData });
    const [isVisible, setIsVisible] = useState(true);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    
    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Kontakt" 
                />
            )}

            <div className="pt-20 min-h-screen md:pt-40">
                <div className="my-10 text-3xl text-center md:text-6xl px-4 md:px-10">
                    Kontakt
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {data.data.map((element, index) => (
                        <FadeInWhenVisible key={index}>
                            <Card className="py-4 mx-6 my-3">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <h4 className="font-bold text-large">{element.attributes.Rolle}</h4>
                                    <p className="text-base uppercase">{element.attributes.Name}</p>
                                    <small className="text-default-500 flex items-center gap-1"><MdEmail />{element.attributes.Email}</small>
                                    <small className="text-default-500 flex items-center gap-1"><FaPhone />{element.attributes.Telefonnummer}</small>
                                </CardHeader>
                                <CardContent className="overflow-visible py-2 flex items-center justify-center">
                                    {element.attributes.Bild.data ? 
                                    <img
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={`${MY_URL_STRAPI}${element.attributes.Bild.data.attributes.url}`}
                                        width={270}
                                        loading="lazy"
                                    />
                                    : 
                                    <div>LOL</div>
                                }
                                </CardContent>
                            </Card>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Kontakt