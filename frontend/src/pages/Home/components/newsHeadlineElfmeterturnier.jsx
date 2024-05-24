import { Card, CardContent, CardHeader, CardFooter } from "../../../components/ui/shadnCN/card";
import { Separator } from "../../../components/ui/shadnCN/separator";
import { PiNewspaperClippingFill } from "react-icons/pi";
import React from 'react';
import { Link } from "react-router-dom";
import { LuPartyPopper } from "react-icons/lu";

const NewsHeadlineElfmeterturnier = () => {  
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row gap-3 w-full p-2 pt-4 px-6">
          <LuPartyPopper className="h-full w-12" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl ml-3 font-plusJakaraSans font-semibold">Bald ist es soweit!</p>
          </div>
        </CardHeader>

        <CardContent className="p-0 px-4 py-2 text-sm md:text-md">
            Sichert euch jetzt einen der <strong>begrenzten Startplätze</strong> für das 11-Meter-Turnier!<br/><br/>

            Nach dem spannenden Turnier laden wir euch herzlich zur <strong>AFTER CUP PARTY</strong> im großen Festzelt ein. Freut euch auf Musik, Tanz und beste Stimmung!
        </CardContent>


        <Separator />

        <CardFooter className=" p-0 px-4 py-4">
          <Link
            className="text-blue-600"
            isexternal
            showanchoricon
            to="/elfmeterturnier"
          >
            Zur Anmeldung
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsHeadlineElfmeterturnier;
