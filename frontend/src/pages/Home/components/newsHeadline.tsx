import React from 'react';
import { Card, CardHeader, CardFooter } from "@/components/ui/shadnCN/card";
import { Separator } from "@/components/ui/shadnCN/separator";
import { PiNewspaperClippingFill } from "react-icons/pi";


const NewsHeadline: React.FC = () => {
 
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-3 w-full p-2 px-6">
          <PiNewspaperClippingFill className="h-full w-8 md:w-12" />
          <div className="flex flex-col">
            <p className="text-lg md:text-2xl">Aktuelles</p>
          </div>
        </CardHeader>
        <div className="px-4 py-2 text-sm md:text-base">
          Die Heimspiele der ersten Mannschaft finden in Melchingen statt. Die der zweiten Mannschaft in Salmendingen.<br/>
          <b>Wir freuen uns auf ihren Besuch!</b>
        </div>
        <Separator />
        <CardFooter className="p-0 px-4 py-2 md:py-4">
          <a
            className="text-blue-600"
            href="https://www.fussball.de/verein/tv-melchingen-wuerttemberg/-/id/00ES8GNAVO00007VVV0AG08LVUPGND5I#!/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aktuelle Ergebnisse checken.
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsHeadline;