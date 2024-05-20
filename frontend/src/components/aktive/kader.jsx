import React, { useMemo, lazy } from 'react';
import { MY_URL, MY_URL_STRAPI } from "../../config";
import { useQuery } from '@tanstack/react-query'

const SpielerCard = lazy(() => import("./SpielerCard"));

const positions = {
  coach: "Trainer",
  betreuer: "Betreuer",
  tw: "Torwart",
  def: "Abwehr",
  mid: "Mittelfeld",
  st: "Angriff"
};

const fetchData = async () => {
    const response = await fetch(`${MY_URL_STRAPI}/api/kaders?populate=*`);
    return response.json()
};  

const Kader = () => {  

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['data'], queryFn: fetchData })

    const groupedData = useMemo(() => {
        if (!data || !Array.isArray(data.data)) return {};
    
        return Object.keys(positions).reduce((acc, key) => {
            acc[key] = data.data.filter(element => element.attributes.Position === positions[key]);
            return acc;
        }, {});
    }, [data]);
    

    if (isLoading || !data) {
        return <p>Loading...</p>;
    }
    
    if(isError){
        return <p>Error: {error.message}</p>
    }

    return (
        <div className="w-full">
            <h1 className="text-4xl text-center py-12">Kader 2023/2024</h1>

            {Object.entries(groupedData).map(([positionKey, players]) => (
                <div key={positionKey} className="my-4">
                    <h2 className="text-3xl py-3 px-6">{positions[positionKey]}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                        {players.map(player => (
                            <div key={player.attributes.Name} className="flex justify-center items-center">
                                <SpielerCard 
                                    name={player.attributes.Name} 
                                    img={`${MY_URL_STRAPI}${player.attributes.Bild.data[0].attributes.url}`} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
    
}

export default Kader;
