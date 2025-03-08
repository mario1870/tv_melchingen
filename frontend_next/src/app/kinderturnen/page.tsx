import Image from "next/image";

const Kinderturnen = () => {
  return (
    <div className="min-h-screen pt-32 md:pt-48">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Bild-Sektion */}
          <div className="lg:w-1/2 h-[300px] lg:h-[450px] relative w-full">
            <Image
              src="/kinderturnen/kinderturnen.webp"
              alt="Kinder beim Turnen in der Melchinger Turnhalle"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white">
              Kinderturnen
            </h1>
          </div>

          {/* Inhalts-Sektion */}
          <div className="lg:w-1/2 p-4 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center text-indigo-600 font-semibold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <span>Montags um 16:30 Uhr</span>
              </div>

              <div className="flex items-center text-indigo-600 font-semibold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <span>Melchinger Turnhalle</span>
              </div>

              <div className="flex items-center text-indigo-600 font-semibold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
                <span>Für Kinder von 2 bis 5 Jahren</span>
              </div>
              
              <p className="text-gray-700 md:text-lg leading-relaxed">
                Die Betreuerinnen Annika, Sarah und Tina freuen sich auf euer Kommen und auf die sportlichen Aktivitäten mit den Kindern!
              </p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Bei Interesse und Fragen steht euch Annika gerne zur Verfügung:</p>
                <a 
                  href="tel:+4917684284495" 
                  className="mt-2 inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  0176 84284495
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kinderturnen;