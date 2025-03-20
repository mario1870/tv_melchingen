import { Card, CardContent, CardFooter } from "@/components/ui/shadnCN/card"
import React from "react";

interface SpielerCardProps {
  name: string;
  img: string;
}

const SpielerCard: React.FC<SpielerCardProps> = ({ name, img }) => {
  return (
    <Card className="relative border-none w-40 flex items-center">
      <CardContent className="p-0">
        <img
          alt={name}
          className="object-cover rounded-lg w-40 h-52"
          src={img}
          loading="lazy"
        />
      </CardContent>
      <CardFooter className="absolute bottom-0 p-0 bg-black/80 w-full flex justify-center py-2 rounded-b-lg">
        <p className="text-sm text-center text-white/80 font-roboto font-semibold">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default React.memo(SpielerCard);