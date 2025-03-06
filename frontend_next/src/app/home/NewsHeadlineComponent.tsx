import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Newspaper } from 'lucide-react';
import React from 'react';

const NewsHeadline = () => {  
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row gap-3 w-full p-2 px-6">
          <Newspaper className="h-full w-12" />
          <div className="flex flex-col">
            <p className="text-2xl">Aktuelles</p>
          </div>
        </CardHeader>

        <div className="pl-4">
          Die Heimspiele der ersten Mannschaft finden in Melchingen statt. Die der zweiten Mannschaft in Salmendingen.<br/>
          <b>Wir freuen uns auf ihren Besuch!</b>
        </div>

        <Separator />

        <CardFooter className="px-4">
          <a
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fussball.de/verein/tv-melchingen-wuerttemberg/-/id/00ES8GNAVO00007VVV0AG08LVUPGND5I#!/"
          >
            Jetzt alle aktuellen Ergebnisse checken.
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsHeadline;
