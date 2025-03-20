import React, { useCallback } from 'react';
import { saveAs } from 'file-saver';
import { Button } from "@/components/ui/shadnCN/button";
import { FaDownload } from "react-icons/fa";
import FadeInWhenVisible from "@/components/animationSections/fadeInWhenVisible";


const PDFDownloadButton: React.FC = () => {
  const handleDownload = useCallback(async (): Promise<void> => {
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
        <div className='py-4 text-sm md:text-base'>
          Mit dem Antrag in der PDF können sie jetzt Mitglied des TV Melchingen werden.<br/>
          Wir freuen uns über jede Mitgliedschaft!
        </div>
        <Button 
          className='m-2 md:m-4' 
          color="success" 
          onClick={handleDownload}
        >
          Herunterladen
          <FaDownload />
        </Button>    
      </div>
    </FadeInWhenVisible>
  );
};

export default PDFDownloadButton;