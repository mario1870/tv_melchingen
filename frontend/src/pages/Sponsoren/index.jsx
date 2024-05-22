import { Card, CardContent, CardHeader } from "../../components/ui/shadnCN/card"
import { useState, useEffect } from "react";
import { MY_URL, MY_URL_STRAPI } from "../../config";
import WelcomeAnimation from "../../components/animationSections/welcomeAnimation";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/sponsorens?populate=*`);
    return response.json()
};  

const Sponsoren = () => {

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['sponsor'], queryFn: fetchData });

    const [isVisible, setIsVisible] = useState(true);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            {isVisible && (
                <WelcomeAnimation 
                    isVisible={isVisible} 
                    onAnimationComplete={() => setIsVisible(false)} 
                    text="Sponsoren" 
                />
            )}

            <div className="pt-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-violet-500">
                <h1 className="text-3xl w-full text-center py-8 font-bold md:py-16 md:text-6xl">Sponsoren</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {data.data.map((element, index) => (
                        <div key={index} className="w-full my-4 flex flex-col justify-center items-center">
                            <Card className="py-4 sm:w-60 mx-6 ">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-start h-16">
                                    <p className="text-base uppercase font-bold text-center">{element.attributes.Name}</p>
                                </CardHeader>
                                <CardContent className="overflow-visible py-2 p-2">
                                    <a href={element.attributes.Link}>
                                        <img className="h-40 w-80 object-cover object-center rounded-lg" alt={element.attributes.name} src={`${MY_URL_STRAPI}${element.attributes.Logo.data.attributes.url}`} />
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Sponsoren