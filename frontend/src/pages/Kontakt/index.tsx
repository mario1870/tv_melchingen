import React, { useState, useCallback, memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaPhone } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/shadnCN/card";
import FadeInWhenVisible from "@/components/animationSections/fadeInWhenVisible";
import WelcomeAnimation from "@/components/animationSections/welcomeAnimation";
import { MY_URL } from "@/lib/config";

interface KontaktBild {
  data: {
    attributes: {
      url: string;
    }
  } | null;
}

interface KontaktAttributes {
  Rolle: string;
  Name: string;
  Email: string;
  Telefonnummer: string;
  Bild: KontaktBild;
}

interface KontaktItem {
  attributes: KontaktAttributes;
}

interface KontaktResponse {
  data: KontaktItem[];
}

// Avatar component with fallback
const Avatar: React.FC<{
  src: string | null;
  name: string;
  size?: number;
}> = memo(({ src, name, size = 120 }) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return src ? (
    <div 
      className="rounded-full overflow-hidden border-4 border-white shadow-lg"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={`Foto von ${name}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  ) : (
    <div 
      className="rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold border-4 border-white shadow-lg"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initials}
    </div>
  );
});
Avatar.displayName = 'Avatar';

// Contact card component
const ContactCard: React.FC<{
  contact: KontaktItem;
}> = memo(({ contact }) => {
  const { attributes } = contact;
  const imageUrl = attributes.Bild.data 
    ? `${MY_URL}${attributes.Bild.data.attributes.url}` 
    : null;

  return (
    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden border-0 shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-12 px-4 flex flex-col items-center relative">
        <div className="absolute -bottom-16">
          <Avatar src={imageUrl} name={attributes.Name} />
        </div>
      </div>

      <CardContent className="pt-20 pb-6 px-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">{attributes.Name}</h3>
          <p className="text-blue-600 font-medium">{attributes.Rolle}</p>
        </div>

        <div className="space-y-3 mt-6">
          <div className="flex items-center justify-center text-gray-700">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <FaPhone className="text-blue-600 text-lg" />
            </div>
            <a 
              href={`tel:${attributes.Telefonnummer}`} 
              className="hover:text-blue-600 transition-colors"
            >
              {attributes.Telefonnummer}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
ContactCard.displayName = 'ContactCard';

// Animated section header
const SectionHeader = memo(({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block">
      {title}
      <div className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-500 rounded-full"></div>
    </h1>
    {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">{subtitle}</p>}
  </div>
));
SectionHeader.displayName = 'SectionHeader';

// Skeleton loading state
const LoadingSkeleton: React.FC = () => (
  <div className="pt-20 min-h-screen md:pt-40 container mx-auto px-4">
    <div className="animate-pulse text-center mb-16">
      <div className="h-10 bg-gray-200 rounded w-40 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded max-w-md mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-32 bg-gray-200"></div>
          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const fetchData = async (): Promise<KontaktResponse> => {
  const response = await fetch(`${MY_URL}/api/kontakts?populate=*`);
  return response.json();
};  

const Kontakt: React.FC = () => {  
  const { isLoading, isError, data, error } = useQuery<KontaktResponse, Error>({
    queryKey: ['contact'],
    queryFn: fetchData
  });
 
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleAnimationComplete = useCallback(() => {
    setIsVisible(false);
  }, []);
 
  if (isLoading) return <LoadingSkeleton />;
  
  if (isError) return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="bg-red-50 p-6 rounded-lg border border-red-200 max-w-md text-center">
        <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-xl font-bold text-red-700 mb-2">Fehler beim Laden der Kontakte</h2>
        <p className="text-red-600">{error.message}</p>
      </div>
    </div>
  );
 
  return (
    <>
      {isVisible && (
        <WelcomeAnimation
          isVisible={isVisible}
          onAnimationComplete={handleAnimationComplete}
          text="Kontakt"
        />
      )}
      
      <div className="pt-40 pb-24 min-h-screen md:px-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Unser Team" 
            subtitle="Hier findest du die richtigen Ansprechpartner für deine Anliegen. Wir freuen uns auf deine Kontaktaufnahme!"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data?.data.map((contact, index) => (
              <FadeInWhenVisible key={contact.attributes.Name || index}>
                <ContactCard contact={contact} />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default memo(Kontakt);