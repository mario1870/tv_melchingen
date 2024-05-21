import { Card, CardContent, CardFooter } from "../../../components/ui/card"

import React from "react";

const SpielerCard = ({ name, img }) => {
    return (
        <Card isFooterBlurred radius="lg" className="relative border-none w-40 flex items-center">
            <CardContent className="p-0">
                <img
                    alt={name}
                    className="object-cover rounded-lg"
                    src={img}
                    shadow="lg"
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
