import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import WelcomeAnimation from "@/components/animationSections/welcomeAnimation";

const YogaInfoCard: React.FC<{
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}> = memo(({ title, content, icon }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <div className="bg-teal-100 text-teal-600 p-3 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <div className="text-gray-600">{content}</div>
  </div>
));
YogaInfoCard.displayName = 'YogaInfoCard';

const Yoga: React.FC = () => {
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
          text="Yoga"
        />
      )}
      
      {/* Hero section with background image */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-teal-50  z-10"></div>
          <img 
            src="/yoga/yoga-bg.jpg" 
            alt="Yoga Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content overlay */}
        <div className="container relative z-20 px-4 py-16 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-gray-800"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Yoga beim TV Melchingen</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
              Finde deine innere Balance und stärke deinen Körper
            </p>
            <a 
              href="https://www.yoganna-alb.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-50 transition-colors"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Partnership announcement */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/yoga/yoga.jpg" 
                  alt="Yoga-Kurs" 
                  className="w-full h-full object-cover"
                  loading="lazy" 
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Kooperation mit Anna</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Liebe TVM-Mitglieder,<br/><br/>
                    wir freuen uns, euch in Kooperation mit Anna hochwertige Yoga-Kurse anbieten zu können. 
                    Die Kurse finden montags und dienstags bei uns in Melchingen statt.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-800">
                      Mehr Informationen erhaltet ihr unter:
                    </p>
                    <a 
                      href="https://www.yoganna-alb.de" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 font-bold hover:text-teal-700 transition-colors flex items-center mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      www.yoganna-alb.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Die Vorteile von Yoga</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yoga bietet zahlreiche Vorteile für Körper und Geist. Entdecke, wie regelmäßiges Üben dein Wohlbefinden steigern kann.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <YogaInfoCard
              title="Körperliche Stärke"
              content={
                <p>Verbessere deine Kraft, Flexibilität und Haltung durch regelmäßige Yoga-Praxis.</p>
              }
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            
            <YogaInfoCard
              title="Mentale Klarheit"
              content={
                <p>Reduziere Stress und Angstzustände, verbessere deine Konzentration und finde innere Ruhe.</p>
              }
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            
            <YogaInfoCard
              title="Ganzheitliches Wohlbefinden"
              content={
                <p>Erlebe eine bessere Körperwahrnehmung, mehr Achtsamkeit und ein gesteigertes allgemeines Wohlbefinden.</p>
              }
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
          </div>
          
          {/* Schedule section */}
          <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl p-8 shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Kurszeiten</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p><strong>Montags:</strong> Verschiedene Kurszeiten verfügbar</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p><strong>Dienstags:</strong> Verschiedene Kurszeiten verfügbar</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p><strong>Ort:</strong> Turnhalle Melchingen</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-medium text-gray-700">Für genaue Kurszeiten und weitere Informationen besuche bitte die Website von Anna:</p>
                  <a 
                    href="https://www.yoganna-alb.de" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white font-medium mt-4 py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <span>Zum Kursplan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-200 rounded-full opacity-30 transform scale-125 animate-pulse"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-teal-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Yoga);