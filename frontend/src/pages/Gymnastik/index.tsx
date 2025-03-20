import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FadeInWhenVisible from "../../components/animationSections/fadeInWhenVisible";
import WelcomeAnimation from '../../components/animationSections/welcomeAnimation';
import useFormatText from "../../hooks/useFormatText";
import { MY_URL } from "@/lib/config";

interface Bild {
  data: {
    attributes: {
      url: string;
    }
  }
}

interface GymnastikAttributes {
  Text: string;
  Bild: Bild;
}

interface GymnastikData {
  data: {
    attributes: GymnastikAttributes;
  }
}

const fetchData = async (): Promise<GymnastikData> => {
  const response = await fetch(`${MY_URL}`);
  return response.json();
};

const Gymnastik: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<GymnastikData, Error>({
    queryKey: ['gymnastik'],
    queryFn: fetchData
  });
  
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  
  return (
    <>
      {isVisible && (
        <WelcomeAnimation
          isVisible={isVisible}
          onAnimationComplete={() => setIsVisible(false)}
          text="Gymnastik"
        />
      )}
     
      <div className="pt-24 w-full">
        <h1 className="w-full text-center text-4xl py-8">Gymnastik / Fitness</h1>
        {data?.data && (
          <span className="w-full flex items-center justify-center py-8">
            <FadeInWhenVisible>
              <img 
                src={`${MY_URL}${data.data.attributes.Bild.data.attributes.url}`}
                alt="Gymnastik Bild"
              />                        
            </FadeInWhenVisible>
          </span>
        )}
        {data?.data && (
          <p className="text-center py-6 px-4 xl:px-40">
            {useFormatText(data.data.attributes.Text)}
          </p>
        )}
      </div>
    </>
  );
};

export default Gymnastik;