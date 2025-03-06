"use client"
import { Card, CardContent, CardHeader } from "@/components/ui//card"
import { MY_URL_STRAPI } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";

interface SponsorLogo {
  data: {
    attributes: {
      url: string;
    }
  }
}

interface SponsorAttributes {
  Name: string;
  Link: string;
  Logo: SponsorLogo;
}

interface Sponsor {
  attributes: SponsorAttributes;
}

interface SponsorResponse {
  data: Sponsor[];
}

const fetchData = async (): Promise<SponsorResponse> => {
    const response = await fetch(`${MY_URL_STRAPI}/api/sponsorens?populate=*`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};  

const Sponsoren = (): JSX.Element => {
    const { isLoading, isError, data, error } = useQuery<SponsorResponse, Error>({ 
        queryKey: ['sponsor'], 
        queryFn: fetchData 
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="pt-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-violet-500">
                <h1 className="text-3xl w-full text-center py-8 font-bold md:py-16 md:text-6xl">Sponsoren</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {data?.data.map((element, index) => (
                        <div key={index} className="w-full my-4 flex flex-col justify-center items-center">
                            <Card className="py-4 sm:w-60 mx-6 ">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-start h-16">
                                    <p className="text-base uppercase font-bold text-center">{element.attributes.Name}</p>
                                </CardHeader>
                                <CardContent className="overflow-visible py-2 p-2">
                                    <a href={element.attributes.Link}>
                                        <img className="h-40 w-80 object-cover object-center rounded-lg" alt={element.attributes.Name} src={`${MY_URL_STRAPI}${element.attributes.Logo.data.attributes.url}`} />
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