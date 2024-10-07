import React, { useState, useCallback, Suspense, lazy } from 'react';

const Kader = lazy(() => import("./components/kader"));
const WelcomeAnimation = lazy(() => import('../../components/animationSections/welcomeAnimation'));

// TeamBanner außerhalb von Aktive, da es keinen Zustand oder Props verwendet
const TeamBanner = () => (
    <div className="w-full flex items-center justify-center py-16 drop-shadow-2xl z-30 bg-gradient-to-r from-blue-900 via-red-400 to-green-500">

        <img 
            src={"/mannschaft.webp"} 
            alt="Teamfoto" 
            className="w-full px-20 md:px-60 lg:px-80 md:w-auto rounded-lg" 
            loading='eager'
        />

    </div>
);

const Aktive = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Verwenden von useCallback, um die Funktion zu optimieren
    const handleAnimationComplete = useCallback(() => {
        setIsVisible(false);
    }, []);

    return (
        <>
            <Suspense fallback={<div>Lädt...</div>}>
                {isVisible && (
                    <WelcomeAnimation 
                        isVisible={isVisible} 
                        onAnimationComplete={handleAnimationComplete} 
                        text="Aktive" 
                    />
                )}
            </Suspense>

            <div className="py-20 z-20">
                <TeamBanner />
                <div className="grid gap-4">
                    <Suspense fallback={<div>Lädt...</div>}>
                        <Kader />
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default React.memo(Aktive);
