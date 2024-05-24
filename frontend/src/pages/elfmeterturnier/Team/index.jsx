import { useParams } from "react-router-dom";
import { fetchDataWithReactQuery } from "../../../utils/fetchDataWithReactQuery";
import { useQuery } from "@tanstack/react-query";
import { TextGenerateEffect } from "../../../components/animationEffects/text-generate-effect";
import ramos_penalty from '../../../assets/ramos_penalty.gif'
import { Separator } from "../../../components/ui/shadnCN/separator";

const Team = () => {
    const { teamID } = useParams();
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    const { data, isLoading, isError, error } = useQuery({queryKey: ["stripeSession", sessionId],
        queryFn: () =>
            fetchDataWithReactQuery(`/retrieve-checkout-session/${sessionId}`),
            enabled: !!sessionId,
    });

    const { isLoading: isLoadingTeam, isError: isErrorTeam, data: dataTeam, error: errorTeam } = useQuery({queryKey: ['team', teamID],
        queryFn: () => fetchDataWithReactQuery(`/${teamID}`),
        enabled: !!data,
    });

    if (isLoading || isLoadingTeam) return <p>Loading...</p>;
    if (isError || isErrorTeam) return <div>Error!: {error.message}</div>;

    return(
        <div className="w-full h-full min-h-screen pt-32 flex flex-col justify-center items-center px-2">
            {data.status && data.status === "complete" ? (
                <div className="text-xl font-plusJakaraSans font-semibold">
                    Vielen Dank für ihre Anmeldung!
                </div>) : 
                (<div className="text-xl font-plusJakaraSans font-semibold">
                    Anmeldung war leider nicht erfolgreich!
                </div>)
                }
            {data.status && data.status === "complete" ? "" : "Falls dies ein Fehler sein sollte kontaktieren Sie mich bitte unter der unten stehenden Mail-Addresse!"}


            
            {data.status && data.status === "complete" && (
                <div className="mt-8">
                    <img src={ramos_penalty} className="w-full h-auto rounded-xl" />
                </div>
            )}

            {data.status && data.status === "complete" && (
            <>
                <div className="mx-3 w-full max-w-[340px] md:max-w-[30rem] rounded-xl my-10">
                    <div className="p-2 grid grid-cols-2 md:px-10 md:text-lg font-roboto gap-y-1 gap-x-2 pt-2">
                        <p>Teamname:</p><p>{dataTeam.teamname}</p>
                        <Separator className="col-span-2 my-1 opacity-30" />
                        <p>Verantwortlicher:</p><p>{dataTeam.hostName}</p>
                        <Separator className="col-span-2 my-1 opacity-30" />
                        <p>Teamart:</p><p>{dataTeam.gender === "man" ? "Männerteam" : "Frauenteam"}</p>
                    </div>
                </div>
            </>
            )}

            <div className="text-[0.9rem] text-center text-blue-200 pb-8">
                Sollten Sie ihren Teamnamen ändern wollen oder sonstige Fragen haben, wenden Sie sich an <a href="mailto:marioraach.tvm@gmail.com">marioraach.tvm@gmail.com</a>
            </div>
        </div>
    );
}

export default Team;
