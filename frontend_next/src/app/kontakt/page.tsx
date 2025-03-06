"use client"
import { Card, CardContent, CardHeader } from "@/components/ui//card"
import { Phone } from 'lucide-react';
import { MY_URL_STRAPI } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/kontakts?populate=*`);
    return response.json()
  };  

const Kontakt = () => {  

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['contact'], queryFn: fetchData });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    
    // Define interfaces for the data structure
    interface KontaktImage {
        data: {
            attributes: {
                url: string;
            };
        } | null;
    }

    interface KontaktAttributes {
        Rolle: string;
        Name: string;
        Email: string;
        Telefonnummer: string;
        Bild: KontaktImage;
    }

    interface KontaktItem {
        id: number;
        attributes: KontaktAttributes;
    }

    interface KontaktResponse {
        data: KontaktItem[];
    }

    return (
            <>
                <div className="pt-20 min-h-screen md:pt-40 flex flex-col justify-center items-center">
                    <div className="my-10 text-3xl text-center md:text-6xl px-4 md:px-10">
                        Kontakt
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {(data as KontaktResponse).data.map((element, index) => (
                            <Card key={element.id} className="py-4 mx-6 my-3 bg-white/20">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <h4 className="font-bold text-large">{element.attributes.Rolle}</h4>
                                    <p className="text-base uppercase">{element.attributes.Name}</p>
                                    <small className="text-default-500 flex items-center gap-1"><Phone />{element.attributes.Telefonnummer}</small>
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
                        ))}
                    </div>
                </div>
            </>
    )
}

export default Kontakt