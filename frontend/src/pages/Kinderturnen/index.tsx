import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/animationSections/fadeInWhenVisible";
import WelcomeAnimation from "@/components/animationSections/welcomeAnimation";

// Feature card component
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = memo(({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

// InfoSection component
const InfoSection: React.FC<{
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}> = memo(({ title, content, image, imageAlt }) => (
  <div className={`mx-2 md:mx-20 py-4 flex gap-8 justify-center items-center my-12`}>
    <div className="w-full text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">{title}</h2>
      <div className="bg-white rounded-xl text-gray-600 space-y-4 p-8 w-full shadow-xl">{content}</div>
    </div>
    {image && (
      <div className="md:w-1/2">
        <img 
          src={image} 
          alt={imageAlt || title} 
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
    )}
  </div>
));
InfoSection.displayName = 'InfoSection';

const Kinderturnen: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const handleAnimationComplete = useCallback(() => {
    setIsVisible(false);
  }, []);
  
  return (
    <>
      {isVisible && (
        <WelcomeAnimation
          isVisible={isVisible}
          onAnimationComplete={handleAnimationComplete}
          text="Kinderturnen"
        />
      )}
      
      {/* Hero section */}
      <div className="pt-20 px-2 md:px-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Kinderturnen
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Bewegung, Spaß und spielerisches Lernen für Kinder von 2 bis 5 Jahren
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  className="w-full h-auto"
                  src="/kinderturnen/kinderturnen.webp"
                  alt="Kinder beim Turnen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">Spaß an Bewegung</h2>
                    <p>Spielerisch motorische Fähigkeiten entwickeln</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto py-12 px-2 md:px-20 flex justify-center flex-col">
        {/* Info section */}
        <InfoSection
          title="Unser Kursangebot für die Kleinsten"
          content={
            <>
              <p>
                Das Kinderturnen für 2- bis 5-jährige Kinder findet immer <strong>montags um 16:30 Uhr</strong> in der Melchinger Turnhalle statt.
              </p>
              <p>
                Die Betreuerinnen Annika, Sarah und Tina freuen sich auf euer Kommen und auf die sportlichen Aktivitäten mit den Kindern!
              </p>
              <div className="bg-blue-50 p-5 rounded-lg mt-6">
                <h3 className="font-bold text-lg mb-2">Kontakt für Fragen</h3>
                <p>Bei Interesse und Fragen steht euch Annika gerne zur Verfügung:</p>
                <a href="tel:017684284495" className="flex items-center justify-center text-blue-600 font-medium mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0176 84284495
                </a>
              </div>
            </>
          }
        />
        
        {/* Features section */}
        <div className="my-16 px-2 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Warum Kinderturnen wichtig ist</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Motorische Entwicklung"
              description="Förderung von Kraft, Ausdauer, Beweglichkeit und Koordination durch kindgerechte Übungen"
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Soziale Kompetenzen"
              description="Stärkung des Gemeinschaftsgefühls und Erlernen von Teamfähigkeit im Umgang mit anderen Kindern"
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Freude an Bewegung"
              description="Spielerisches Heranführen an Sport und Bewegung für einen gesunden und aktiven Lebensstil"
            />
          </div>
        </div>
        
        {/* Schedule section */}
        <div className="bg-blue-50 rounded-2xl p-8 my-16 shadow-lg px-2 md:mx-20">
          <div className="md:flex items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Komm zum Training!</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Wann:</strong> Jeden Montag um 16:30 Uhr
                </p>
                <p>
                  <strong>Wo:</strong> Turnhalle Melchingen
                </p>
                <p>
                  <strong>Wer:</strong> Kinder von 2 bis 5 Jahren
                </p>
                <p>
                  <strong>Mitbringen:</strong> Sportkleidung, Turnschuhe und etwas zu trinken
                </p>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Kinderturnen);