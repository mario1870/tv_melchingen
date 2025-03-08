import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Newspaper } from 'lucide-react';
import Link from "next/link";
import React from 'react';

const NewsHeadline = () => {  
  return (
    <div className="w-full">
      <Card className="w-full p-0 pt-2 gap-2 md:gap-4">
        <CardHeader className="flex flex-row items-center gap-3 w-full px-6">
          <Newspaper className="h-full w-6 md:w-8" />
          <div className="flex flex-col">
            <p className="text-lg md:text-2xl">Aktuelles</p>
          </div>
        </CardHeader>

        <div className="text-sm md:text-base pl-4">
          Die Heimspiele der ersten Mannschaft finden in Stetten statt. Die der zweiten Mannschaft in Hörschwag.<br/>
          <b>Wir freuen uns auf ihren Besuch!</b>
        </div>

        <CardFooter className="px-4 py-2 flex justify-start items-center border-t-2">
          <Link
            className="text-blue-600 text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fussball.de/verein/tv-melchingen-wuerttemberg/-/id/00ES8GNAVO00007VVV0AG08LVUPGND5I#!/"
          >
            Jetzt alle aktuellen Ergebnisse checken.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsHeadline;
