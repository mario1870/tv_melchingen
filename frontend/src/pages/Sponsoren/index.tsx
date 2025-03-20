import React, { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/shadnCN/card";
import { MY_URL } from "@/lib/config";
import { motion } from "framer-motion";

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

interface SponsorItem {
  attributes: SponsorAttributes;
}

interface SponsorResponse {
  data: SponsorItem[];
}

// Sponsor card component
const SponsorCard: React.FC<{
  sponsor: SponsorItem;
  index: number;
  totalCount: number;
}> = memo(({ sponsor, index }) => {
  // Calculate animation delay based on grid position for staggered effect
  const delay = 0.1 + (index % 4) * 0.05 + Math.floor(index / 4) * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex justify-center"
    >
      <Card className="w-full max-w-xs h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
        <CardHeader className="py-4 px-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-lg font-bold text-center text-gray-800">{sponsor.attributes.Name}</h3>
        </CardHeader>
        <CardContent className="p-6 flex items-center justify-center">
          <a 
            href={sponsor.attributes.Link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
            aria-label={`Website von ${sponsor.attributes.Name} besuchen`}
          >
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <img
                className="w-full h-32 object-contain rounded"
                alt={`Logo von ${sponsor.attributes.Name}`}
                src={`${MY_URL}${sponsor.attributes.Logo.data.attributes.url}`}
                loading="lazy"
              />
            </div>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
});
SponsorCard.displayName = 'SponsorCard';

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-purple-400">
    <div className="container mx-auto px-4">
      <div className="animate-pulse mb-16">
        <div className="h-12 bg-white/30 rounded-full w-64 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-white/30 rounded-xl overflow-hidden backdrop-blur-sm shadow p-4">
            <div className="h-8 bg-white/50 rounded w-24 mx-auto mb-6"></div>
            <div className="h-32 bg-white/50 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Error display
const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-purple-400">
    <div className="backdrop-blur-sm rounded-xl p-8 max-w-md shadow-lg text-center">
      <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Fehler beim Laden</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
);

const fetchData = async (): Promise<SponsorResponse> => {
  const response = await fetch(`${MY_URL}/api/sponsorens?populate=*`);
  return response.json();
};

const Sponsoren: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<SponsorResponse, Error>({
    queryKey: ['sponsor'],
    queryFn: fetchData
  });
 
  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorDisplay message={error.message} />;

  if(!data){
    return null
  }

  // Sort sponsors alphabetically
  const sortedSponsors = [...data.data].sort((a, b) => 
    a.attributes.Name.localeCompare(b.attributes.Name)
  );
 
  return (
    <>
      <div className="min-h-screen px-2 md:px-20 pt-20">
        {/* Hero section with background */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              >
                Unsere Sponsoren
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xl text-white/90 max-w-2xl mx-auto px-4"
              >
                Wir bedanken uns herzlich bei allen Unterstützern, die den Verein und unsere Arbeit möglich machen.
              </motion.p>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
          
          {/* Sponsors grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedSponsors.map((sponsor, index) => (
              <SponsorCard 
                key={sponsor.attributes.Name} 
                sponsor={sponsor} 
                index={index} 
                totalCount={sortedSponsors.length} 
              />
            ))}
          </div>
          
          {/* Call to action */}
          <div id="kontakt" className="mt-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Werden Sie Teil unserer Sponsoren-Familie</h2>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Unterstützen Sie den lokalen Sport und profitieren Sie gleichzeitig von einer erhöhten Sichtbarkeit in der Region. 
                  Wir bieten verschiedene Sponsoring-Pakete an und finden gemeinsam die passende Lösung für Sie.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <a 
                  href="mailto:sponsoring@tvmelchingen.de" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Sponsoren);