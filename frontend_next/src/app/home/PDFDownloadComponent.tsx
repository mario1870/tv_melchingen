
import React, { useCallback } from 'react';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';


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
    <>
      <div className='flex flex-col md:flex-row w-full max-w-[50rem] min-h-20 justify-between px-4 items-center bg-white rounded-3xl text-center md:text-left'>
        <div className='py-4'>
          Mit dem Antrag in der PDF können sie jetzt Mitglied des TV Melchingen werden.<br/>
          Wir freuen uns über jede Mitgliedschaft!
        </div>
        <Button className='m-4 bg-green-500 hover:bg-green-600' onClick={handleDownload}>
          Herunterladen <Download className="ml-2 h-4 w-4" />
        </Button>    
      </div>
    </>
  );
};

export default PDFDownloadButton;
