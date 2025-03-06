import React from 'react';
import { FormComponent } from './FormComponent';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className='min-h-svh flex flex-col items-center justify-center pt-40'>
        <Image className='rounded-lg' src='/sportheim/sportheim.jpeg' alt='Sportheim' width={720} height={1080} />
        <h1 className='text-xl md:text-3xl font-bold py-4'>Kontaktformular für Mietanfragen</h1>
        <FormComponent />
    </div>
  );
}