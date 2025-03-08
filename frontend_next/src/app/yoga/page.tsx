import Image from "next/image";

const Yoga = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Yoga beim TVM
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Bild-Sektion */}
            <div className="lg:w-2/5 relative">
              <div className="aspect-[3/4] relative h-full">
                <Image
                  src='/yoga/yoga.jpg'
                  alt="Yoga-Kurse in Melchingen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-transparent lg:bg-gradient-to-t lg:from-blue-500/30 lg:via-transparent lg:to-transparent"></div>
            </div>

            {/* Inhalts-Sektion */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mb-2">
                  Kursangebot
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Liebe TVM-Mitglieder,
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wir bieten in Kooperation mit Anna montags und dienstags Yoga-Kurse
                  bei uns in Melchingen an.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Mehr Informationen</h3>
                      <p className="text-gray-700">
                        Alle Details zu Terminen, Kursinhalten und Anmeldung findest du auf der Website:
                      </p>
                      <a 
                        href="https://www.yoganna-alb.de" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        www.yoganna-alb.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;