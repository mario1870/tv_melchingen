import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area";
import { MY_URL_STRAPI } from "@/lib/config";
import useFormatText from "@/hooks/useFormatText";
import { useQuery } from "@tanstack/react-query";


const fetchData = async () => {
  const response = await fetch(`${MY_URL_STRAPI}/api/newsfeeds?populate=*`);
  return response.json()
};  

const Newsfeed = () => {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['news'], queryFn: fetchData });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    
    const sortierteNewsfeedDaten = data && data.data
        ? [...data.data].sort((a, b) => 
            new Date(b.attributes.Erstelldatum).getTime() - new Date(a.attributes.Erstelldatum).getTime())
        : [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
          {sortierteNewsfeedDaten.map((element, index) => (
            <Card key={index} className="w-full lg:h-80 flex flex-col lg:flex-row p-0 rounded-xl md:grid md:grid-cols-[2fr_3fr] md:justify-center items-center" >

                <CardHeader className="h-auto lg:h-full w-full lg:w-auto p-0 flex items-center justify-center">
                    <img alt="Bild" className="rounded-xl w-auto h-full lg:h-72" src={`${MY_URL_STRAPI}${element.attributes.Bild.data.attributes.url}`} loading="lazy" />
                </CardHeader>

                <CardContent className="overflow-visible p-4 h-auto flex flex-col justify-between bg-transparent">
                    <p className="text-tiny uppercase font-bold">Aktuell</p>
                    <h4 className="font-bold text-large">{element.attributes.Titel}</h4>
                    <ScrollArea className="w-full h-52 pt-3 scrollbar-hidden">
                        <div>{useFormatText(element.attributes.Text)}</div>
                    </ScrollArea>
                </CardContent>
            </Card>
          ))}
        </div>
    )
}

export default Newsfeed