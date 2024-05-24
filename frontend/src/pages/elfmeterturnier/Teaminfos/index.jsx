import { useParams } from "react-router-dom";
import { fetchDataWithReactQuery } from "../../../utils/fetchDataWithReactQuery";
import { useQuery } from "@tanstack/react-query";
import { TextGenerateEffect } from "../../../components/animationEffects/text-generate-effect";
import { Separator } from "../../../components/ui/shadnCN/separator";

const Teaminfos = () => {
    const { teamID } = useParams();
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['team', teamID],
        queryFn: () => fetchDataWithReactQuery(`/${teamID}`),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <div>Error!: {error.message}</div>;

    return(
        <div className="w-full h-full min-h-screen pt-20 flex flex-col justify-center items-center px-2">
            <div className="text-xl font-plusJakaraSans font-semibold">
                Vielen Dank für ihre Anmeldung!
            </div>

            <div className="bg-white mx-3 w-full max-w-[40rem] rounded-xl my-10">
                <div className="bg-blue-300 h-16 rounded-t-xl flex justify-between items-center text-lg md:text-xl font-plusJakaraSans font-semibold px-4 md:px-8">
                    <TextGenerateEffect className="text-md md:text-xl flex items-center justify-center mt-1" words={"Teaminfos"} />
                    <img src="/logo_gray.png" className="w-auto h-10" />
                </div>
                <div className="p-2 grid grid-cols-2 md:px-10 md:text-lg font-roboto gap-y-1 gap-x-2 pt-6">
                    <p>Teamname:</p><p>{data.teamname}</p>
                    <Separator className="col-span-2 my-1" />
                    <p>Verantwortlicher:</p><p>{data.hostName}</p>
                    <Separator className="col-span-2 my-1" />
                    <p>Teamart:</p><p>{data.gender}</p>
                    <Separator className="col-span-2 my-1" />
                    <p>Zahlung erfolgreich:</p><p>{data.paymentSuccessful ? "Ja" : "Nein"}</p>
                </div>
            </div>
        </div>
    );
}

export default Teaminfos;
