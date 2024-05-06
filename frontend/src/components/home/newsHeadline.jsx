import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { PiNewspaperClippingFill } from "react-icons/pi";
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

const fetchData = async () => {
  const response = await fetch("https://fw2wtdomoh5zu53hym3ckx3ddm0jorqn.lambda-url.eu-central-1.on.aws/");
  return response.json();
};  

const NewsHeadline = () => {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['newsTVM'], queryFn: fetchData, refetchInterval: 600000  });
  
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row gap-3 w-full p-2 px-6">
          <PiNewspaperClippingFill className="h-full w-12" />
          <div className="flex flex-col">
            <p className="text-2xl">Aktuelles</p>
          </div>
        </CardHeader>

        <CardContent className="p-0 px-4 py-2">
          {isLoading ? (
            <div className="loading">
              <Skeleton className="h-4 w-full my-2 bg-gray-600" />
              <Skeleton className="h-4 w-8/12 my-2 bg-gray-500" />
            </div>
          ) : data.length > 0 ? (
            data[0].newsTVM
          ) : (
            <div>No data available</div>
          )}
        </CardContent>


        <Separator />

        <CardFooter className=" p-0 px-4 py-4">
          <a
            className="text-blue-600"
            isexternal
            showanchoricon
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
