import React from "react";
import { useQuery } from "@tanstack/react-query";
import FadeInWhenVisible from "@/components/animationSections/fadeInWhenVisible";
import { MY_URL } from "@/lib/config";

interface JugendBild {
  data: {
    attributes: {
      url: string;
    }
  }
}

interface JugendAttributes {
  Jugend: string;
  Training: string;
  Trainer: string;
  Index: number;
  Fussballde?: string;
  Bild?: JugendBild;
}

interface JugendItem {
  attributes: JugendAttributes;
}

interface JugendResponse {
  data: JugendItem[];
}

interface TextWithLineBreaksProps {
  text: string;
}

const fetchData = async (): Promise<JugendResponse> => {
  const response = await fetch(`${MY_URL}/api/jugends?populate=*`);
  return response.json();
};  

const Jugend: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<JugendResponse, Error>({ 
    queryKey: ['jugend'], 
    queryFn: fetchData 
  });
    
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  
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
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-4 xl:px-20">
          {data?.data
            .sort((a, b) => a.attributes.Index - b.attributes.Index)
            .map((element, index) => (
              <FadeInWhenVisible key={index}>
                <div className="flex flex-col justify-center items-center pb-4 border-blue-500 md:p-4 md:px-20 rounded-lg">
                  <h1 className="text-4xl py-6">{element.attributes.Jugend}</h1>
                  {element.attributes.Bild && element.attributes.Bild.data && (
                    <img
                      className="rounded-lg"
                      src={`${MY_URL}${element.attributes.Bild.data.attributes.url}`}
                      alt={`Bild von ${element.attributes.Jugend}`}
                      loading="lazy"
                    />
                  )}
                  <div className="flex gap-2 my-2">
                    <p className="font-bold">Training: </p>
                    <p><TextWithLineBreaks text={element.attributes.Training} /></p>
                  </div>
                  <div className="flex gap-2 my-2">
                    <p className="font-bold">Trainer:</p>
                    <p>{element.attributes.Trainer}</p>
                  </div>
                  {element.attributes.Fussballde ? (
                    <p className="text-xl py-3 text-center">
                      Jetzt aktuelle Ergebnisse checken unter:{" "}
                      <a 
                        href={element.attributes.Fussballde} 
                        className="text-black underline"
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
              </FadeInWhenVisible>
            ))}
        </div>
      </div>
    </>
  );
};

export default Jugend;