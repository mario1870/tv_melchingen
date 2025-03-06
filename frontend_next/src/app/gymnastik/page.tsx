"use client"
import { MY_URL_STRAPI } from "@/lib/config";
import useFormatText from "@/hooks/useFormatText";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/gymnastiks?populate=*`);
    return response.json()
  };  

const Gymnastik = () => {

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['gymnastik'], queryFn: fetchData });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="pt-24 w-full">
                <h1 className="w-full text-center text-4xl py-8">Gymnastik / Fitness</h1>

                {data.data && (
                    <span className="w-full flex items-center justify-center py-8">
                        <img src={`${MY_URL_STRAPI}${data.data.attributes.Bild.data.attributes.url}`} />                        
                    </span>
                )}

                {data.data && (
                    <p className="text-center py-6 px-4 xl:px-40">
                        {useFormatText(data.data.attributes.Text)}
                    </p>
                )}
            </div>
        </>
    )
}

export default Gymnastik