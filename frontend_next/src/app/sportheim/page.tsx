import React from 'react';
import { FormComponent } from './FormComponent';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className="min-h-svh pt-20 relative">
      {/* Verschwommenes Hintergrundbild */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image 
          src="/sportheim/sportheim.jpeg" 
          alt="Sportheim Hintergrund" 
          fill 
          className="object-cover opacity-70" 
          priority 
        />
      </div>
      
      {/* Inhalt mit Karte auf dem verschwommenen Hintergrund */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20">
        <div className="bg-white/95 p-6 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold py-4">
            Kontaktformular für Mietanfragen
          </h1>
          <FormComponent />
        </div>
      </div>
    </div>
  );
}