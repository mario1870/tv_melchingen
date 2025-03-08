"use client"
import React, { useMemo } from 'react';
import { MY_URL_STRAPI } from "@/lib/config";
import { useQuery } from '@tanstack/react-query';
import { SpielerCard } from './SpielerCard';


// TypeScript Interfaces
interface SpielerBild {
  data: Array<{
    attributes: {
      url: string;
    }
  }>
}

interface SpielerAttributes {
  Name: string;
  Position: string;
  Bild: SpielerBild;
}

interface SpielerData {
  attributes: SpielerAttributes;
}

interface KaderResponse {
  data: SpielerData[];
}

interface GroupedData {
  [key: string]: SpielerData[];
}

// Position mapping
const positions: { [key: string]: string } = {
  coach: "Trainer",
  betreuer: "Betreuer",
  tw: "Torwart",
  def: "Abwehr",
  mid: "Mittelfeld",
  st: "Angriff"
};


// Fetch function
const fetchData = async (): Promise<KaderResponse> => {
  const response = await fetch(`${MY_URL_STRAPI}/api/kaders?populate=*`);
  if (!response.ok) {
    throw new Error('Netzwerkfehler beim Laden der Kaderdaten');
  }
  return response.json();
};


export const Kader: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<KaderResponse, Error>({ 
    queryKey: ['kaderData'], 
    queryFn: fetchData
  });

  const groupedData = useMemo<GroupedData>(() => {
    if (!data || !Array.isArray(data.data)) return {};
   
    return Object.keys(positions).reduce<GroupedData>((acc, key) => {
      acc[key] = data.data.filter(element => 
        element.attributes.Position === positions[key]
      );
      return acc;
    }, {});
  }, [data]);
   
  if (isLoading || !data) return (
    <div className="flex justify-center items-center h-60">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (isError) return (
    <div className="bg-red-50 text-red-800 p-4 rounded-lg">
      <p className="font-semibold">Fehler beim Laden der Kaderdaten</p>
      <p className="text-sm">{error.message}</p>
    </div>
  );

  return (
    <div className="w-full px-2 md:px-20">
      <h1 className="text-4xl font-bold text-center py-12">Kader 2024/2025</h1>
      
      {Object.entries(groupedData).map(([positionKey, players]) => (
        <div key={positionKey} className="my-8">
          <h2 className="text-2xl font-semibold py-3 px-6 border-l-4 border-blue-500">
            {positions[positionKey]}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-6 mt-4">
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
};

export default Kader;