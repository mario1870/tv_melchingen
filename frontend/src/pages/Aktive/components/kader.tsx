import React, { useMemo, lazy } from 'react';
import { MY_URL } from "@/lib/config";
import { useQuery } from '@tanstack/react-query';

const SpielerCard = lazy(() => import("./SpielerCard"));

interface Position {
  [key: string]: string;
}

interface Bild {
  data: Array<{
    attributes: {
      url: string;
    }
  }>;
}

interface PlayerAttributes {
  Name: string;
  Position: string;
  Bild: Bild;
}

interface Player {
  attributes: PlayerAttributes;
}

interface ApiResponse {
  data: Player[];
}

interface GroupedData {
  [key: string]: Player[];
}

const positions: Position = {
  coach: "Trainer",
  betreuer: "Betreuer",
  tw: "Torwart",
  def: "Abwehr",
  mid: "Mittelfeld",
  st: "Angriff"
};

const fetchData = async (): Promise<ApiResponse> => {
  const response = await fetch(`${MY_URL}/api/kaders?populate=*`);
  return response.json();
};  

const Kader: React.FC = () => {  
  const { isLoading, isError, data, error } = useQuery<ApiResponse, Error>({ 
    queryKey: ['data'], 
    queryFn: fetchData 
  });

  const groupedData = useMemo<GroupedData>(() => {
    if (!data || !Array.isArray(data.data)) return {};
 
    return Object.keys(positions).reduce<GroupedData>((acc, key) => {
      acc[key] = data.data.filter(element => element.attributes.Position === positions[key]);
      return acc;
    }, {});
  }, [data]);
 
  if (isLoading || !data) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full px-2 md:px-20">
      <h1 className="text-4xl text-center py-12">Kader 2024/2025</h1>
      {Object.entries(groupedData).map(([positionKey, players]) => (
        <div key={positionKey} className="my-4">
          <h2 className="text-3xl py-3 px-6">{positions[positionKey]}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
            {players.map(player => (
              <div key={player.attributes.Name} className="flex justify-center items-center">
                <SpielerCard
                  name={player.attributes.Name}
                  img={`${MY_URL}${player.attributes.Bild.data[0].attributes.url}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kader;