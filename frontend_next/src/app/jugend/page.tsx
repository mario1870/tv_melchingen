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

// Helper-Komponente für Text mit Zeilenumbrüchen
const TextWithLineBreaks = ({ text }: { text: string }) => (
  <>
    {text.split('<br/>').map((line, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
  </>
);

const Jugend: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<JugendResponse, Error>({ 
    queryKey: ['jugend'], 
    queryFn: async () => {
      const response = await fetch(`${MY_URL_STRAPI}/api/jugends?populate=*`);
      if (!response.ok) {
        throw new Error('Netzwerkfehler beim Laden der Jugenddaten');
      }
      return response.json();
    }
  });

  if (isLoading) return (
    <div className="min-h-screen flex justify-center items-center pt-20">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        <p className="mt-4 text-gray-600">Jugenddaten werden geladen...</p>
      </div>
    </div>
  );

  if (isError) return (
    <div className="min-h-screen flex justify-center items-center pt-20">
      <div className="bg-red-50 text-red-800 p-6 rounded-lg shadow-md max-w-lg mx-4">
        <h2 className="text-xl font-bold mb-2">Fehler beim Laden der Jugenddaten</h2>
        <p>{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Neu laden
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Unsere Jugendmannschaften
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:px-40">
          {data?.data
            .sort((a, b) => a.attributes.Index - b.attributes.Index)
            .map((team, index) => (
              <div 
                key={team.id || index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {team.attributes.Bild && team.attributes.Bild.data && (
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={`${MY_URL_STRAPI}${team.attributes.Bild.data.attributes.url}`}
                      alt={`${team.attributes.Jugend} Mannschaftsfoto`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                      {team.attributes.Jugend}
                    </h2>
                  </div>
                )}
                
                <div className="p-6">
                  {!team.attributes.Bild?.data && (
                    <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                      {team.attributes.Jugend}
                    </h2>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Training:</p>
                        <p className="text-gray-600"><TextWithLineBreaks text={team.attributes.Training} /></p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Trainer:</p>
                        <p className="text-gray-600">{team.attributes.Trainer}</p>
                      </div>
                    </div>
                  </div>
                  
                  {team.attributes.Fussballde ? (
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-gray-700">Aktuelle Ergebnisse:</p>
                      </div>
                      <a 
                        href={team.attributes.Fussballde} 
                        className="mt-2 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Auf Fussball.de anzeigen
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Jugend;