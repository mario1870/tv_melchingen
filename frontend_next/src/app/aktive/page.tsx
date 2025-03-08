import React from 'react';
import { Kader } from './components/kader';
import Image from 'next/image';

// TeamBanner außerhalb von Aktive, da es keinen Zustand oder Props verwendet
const TeamBanner = () => (
    <div className="w-full flex items-center justify-center py-16 drop-shadow-2xl z-30 bg-gradient-to-r from-blue-900 via-red-400 to-green-500">

        <Image 
            src={"/aktive/mannschaft.webp"} 
            alt="Teamfoto" 
            className="w-full px-2 md:px-20 lg:px-80 md:w-auto rounded-lg" 
            loading='eager'
            width={1000}
            height={1000}
        />

    </div>
);

const Aktive = () => {
    return (
        <>
            <div className="pt-20 z-20">
                <TeamBanner />
                <div className="grid gap-4">
                    <Kader />
                </div>
            </div>
        </>
    );
}

export default Aktive;
