import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/shadnCN/card";
import { ScrollArea } from "@/components/ui/shadnCN/scroll-area";
import FadeInWhenVisible from "@/components/animationSections/fadeInWhenVisible";
import { MY_URL } from "@/lib/config";
import useFormatText from "@/hooks/useFormatText";

interface NewsfeedBild {
  data: {
    attributes: {
      url: string;
    }
  }
}

interface NewsfeedAttributes {
  Titel: string;
  Text: string;
  Erstelldatum: string;
  Bild: NewsfeedBild;
}

interface NewsfeedItem {
  attributes: NewsfeedAttributes;
}

interface NewsfeedResponse {
  data: NewsfeedItem[];
}

const fetchData = async (): Promise<NewsfeedResponse> => {
  const response = await fetch(`${MY_URL}/api/newsfeeds?populate=*`);
  return response.json();
};

const Newsfeed: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<NewsfeedResponse, Error>({ 
    queryKey: ['news'], 
    queryFn: fetchData 
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
 
  // Stellen Sie sicher, dass data und data.data vorhanden sind, bevor Sie fortfahren
  const sortierteNewsfeedDaten = data && data.data
    ? [...data.data].sort((a, b) =>
        new Date(b.attributes.Erstelldatum).getTime() - new Date(a.attributes.Erstelldatum).getTime())
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {sortierteNewsfeedDaten.map((element) => (
        <FadeInWhenVisible key={element.attributes.Titel}>
          <Card className="w-full lg:h-80 flex flex-col lg:flex-row p-0 rounded-xl md:grid md:grid-cols-[2fr_3fr] md:justify-center items-center">
            <CardHeader className="h-auto lg:h-full w-full lg:w-auto p-0 flex items-center justify-center">
              <img 
                alt={`Bild zu ${element.attributes.Titel}`} 
                className="rounded-xl w-auto h-full lg:h-72" 
                src={`${MY_URL}${element.attributes.Bild.data.attributes.url}`} 
                loading="lazy" 
              />
            </CardHeader>
            <CardContent className="overflow-visible p-4 h-auto flex flex-col justify-between bg-transparent">
              <p className="text-tiny uppercase font-bold">Aktuell</p>
              <h4 className="font-bold text-large">{element.attributes.Titel}</h4>
              <ScrollArea className="w-full h-52 pt-3">
                <div>{useFormatText(element.attributes.Text)}</div>
              </ScrollArea>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      ))}
    </div>
  );
};

export default Newsfeed;