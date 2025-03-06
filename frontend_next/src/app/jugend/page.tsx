"use client"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MY_URL_STRAPI } from "@/lib/config";
import Image from "next/image";

// TypeScript Interfaces
interface JugendBild {
  data: {
    attributes: {
      url: string;
    };
  } | null;
}

interface JugendAttributes {
  Index: number;
  Jugend: string;
  Training: string;
  Trainer: string;
  Fussballde?: string;
  Bild: JugendBild;
}

interface JugendData {
  id: number;
  attributes: JugendAttributes;
}

interface JugendResponse {
  data: JugendData[];
}

// Props für die TextWithLineBreaks Komponente
interface TextWithLineBreaksProps {
  text: string;
}

const fetchData = async (): Promise<JugendResponse> => {
  const response = await fetch(`${MY_URL_STRAPI}/api/jugends?populate=*`);
  if (!response.ok) {
    throw new Error('Netzwerkfehler beim Laden der Jugenddaten');
  }
  return response.json();
};

const Jugend: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<JugendResponse, Error>({ 
    queryKey: ['jugend'], 
    queryFn: fetchData 
  });

  if (isLoading) return (
    <div className="flex justify-center items-center h-60">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (isError) return (
    <div className="bg-red-50 text-red-800 p-4 rounded-lg">
      <p className="font-semibold">Fehler beim Laden der Jugenddaten</p>
      <p className="text-sm">{error.message}</p>
    </div>
  );

  const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
    return (
      <>
        {text.split('<br/>').map((line, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="pt-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-4 xl:px-20 gap-8">
          {data?.data
            .sort((a, b) => a.attributes.Index - b.attributes.Index)
            .map((element, index) => (
              <div 
                key={element.id || index}
                className="flex flex-col justify-center items-center pb-4 md:p-4 md:px-20 rounded-lg"
              >
                <h1 className="text-4xl py-6 font-bold">{element.attributes.Jugend}</h1>
                {element.attributes.Bild && element.attributes.Bild.data && (
                  <div className="relative w-full max-w-lg h-64 md:h-80">
                    <Image
                      src={`${MY_URL_STRAPI}${element.attributes.Bild.data.attributes.url}`}
                      alt={`Bild ${element.attributes.Jugend}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-lg object-cover"
                      priority={index < 2}
                    />
                  </div>
                )}
                <div className="flex gap-2 my-4">
                  <p className="font-bold min-w-20">Training:</p>
                  <p><TextWithLineBreaks text={element.attributes.Training} /></p>
                </div>
                <div className="flex gap-2 my-2">
                  <p className="font-bold min-w-20">Trainer:</p>
                  <p>{element.attributes.Trainer}</p>
                </div>
                {element.attributes.Fussballde ? (
                  <p className="text-xl py-3 text-center">
                    Jetzt aktuelle Ergebnisse checken unter:{" "}
                    <a 
                      href={element.attributes.Fussballde} 
                      className="text-blue-600 hover:text-blue-800 underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fussball.de
                    </a>
                  </p>
                ) : (
                  <div className="text-xl py-3 text-center">-</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Jugend;