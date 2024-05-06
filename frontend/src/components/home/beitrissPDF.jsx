import React, { useCallback } from 'react';
import { saveAs } from 'file-saver';
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import FadeInWhenVisible from "../../animationSections/fadeInWhenVisible";

const PDFDownloadButton = () => {

  const handleDownload = useCallback(async () => {
    try {
      const pdfFilePath = '/home/lastschrift.pdf';
      const response = await fetch(pdfFilePath);
      if (!response.ok) {
        throw new Error('Fehler beim Herunterladen der PDF-Datei');
      }
      const blob = await response.blob();
      saveAs(blob, 'example.pdf');
    } catch (error) {
      console.error('Fehler beim Herunterladen der PDF-Datei:', error);
    }
  }, []); 

  return (
    <FadeInWhenVisible>
      <div className='flex flex-col md:flex-row w-full max-w-[50rem] min-h-20 justify-between px-4 items-center bg-white rounded-3xl text-center md:text-left'>
        <div className='py-4'>
          Mit dem Antrag in der PDF können sie jetzt Mitglied des TV Melchingen werden.<br/>
          Wir freuen uns über jede Mitgliedschaft!
        </div>
        <Button className='m-4' color="success" endContent={<FaDownload />} onClick={handleDownload}>
          Herunterladen
        </Button>    
      </div>
    </FadeInWhenVisible>
  );
};

export default PDFDownloadButton;
