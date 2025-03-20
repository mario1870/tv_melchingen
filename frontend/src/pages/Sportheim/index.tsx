import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from "@/components/ui/shadnCN/input";
import { Textarea } from "@/components/ui/shadnCN/textarea";
import { Button } from "@/components/ui/shadnCN/button";


const Sportheim: React.FC = () => {
  const [state, handleSubmit] = useForm("xwkgonny");
  
  return (
    <>
      <div className="pt-24 md:pt-24 min-h-screen px-2">
        <span className="w-full flex items-center justify-center">
          <motion.img
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ type: "fade", duration: 0.4 }}
            className="rounded-lg w-full md:px-40 xl:px-60 2xl:px-[25rem]"
            src="/sportheim/sportheim.jpeg"
            alt="Sportheim"
          />                    
        </span>
        <div className='w-full md:px-40 xl:px-60 2xl:px-[25rem] flex flex-col justify-center items-center py-8'>
          <p className='px-2 w-full py-4 text-lg md:text-xl text-center'>
            Senden Sie einfach über das Formular eine Anfrage.<br/>Wir kontaktieren Sie dann zeitnah.
          </p>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <label htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
            <label htmlFor="email">
              Email Addresse
            </label>
            <Input
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="datum">
              Datum
            </label>
            <Input
              id="datum"
              type="text"
              name="datum"
            />
            <ValidationError
              prefix="Date"
              field="date"
              errors={state.errors}
            />
            <label htmlFor="message">
              Nachricht
            </label>
            <Textarea
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting || state.succeeded}>
              Submit
            </Button>
            {state.succeeded && (
              <p className='text-gray-700 bg-green-400 mx-auto px-4 py-2 rounded-full text-center'>
                Formular erfolgreich übermittelt. Wir melden uns bei ihnen.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Sportheim;