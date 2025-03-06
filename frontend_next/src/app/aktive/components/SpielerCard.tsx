import { Card, CardContent, CardFooter } from "@/components/ui/card"
import React from "react";
import Image from 'next/image'


interface SpielerCardProps {
  name: string;
  img: string;
}

export const SpielerCard = ({ name, img }: SpielerCardProps) => {
    return (
        <Card className="relative border-none w-40 flex items-center overflow-hidden rounded-lg p-0">
            <CardContent className="p-0">
                <div className="relative w-40 h-52">
                    <Image
                        alt={name}
                        className="object-cover rounded-lg shadow-lg"
                        src={img}
                        loading="lazy"
                        fill
                        sizes="160px"
                    />
                </div>
            </CardContent>
            <CardFooter className="absolute bottom-0 p-0 bg-black/80 w-full flex justify-center py-2 rounded-b-lg">
                <p className="text-sm text-center text-white/80 font-roboto font-semibold">{name}</p>
            </CardFooter>
        </Card>
    );
};