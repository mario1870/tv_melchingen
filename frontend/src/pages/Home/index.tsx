import React, {lazy, Suspense } from "react";

const Newsfeed = lazy(() => import("./components/newsfeed"));
const PDFDownloadButton = lazy(() => import("./components/beitrissPDF"));
const Carousel = lazy(() => import("./components/carousel"));

const Home: React.FC = () => {
  
  return (
    <>
      <div className="z-50">
        <div className="w-full max-h-screen flex flex-col md:flex-row min-h-screen">
          <Carousel />
        </div>
        <div className="w-full flex flex-col items-center py-8 px-2 md:px-4 xl:px-20">
          <Suspense fallback={<div>Lädt...</div>}>
            <PDFDownloadButton />
          </Suspense>
          <Suspense fallback={<div>Lädt...</div>}>
            <Newsfeed />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Home;