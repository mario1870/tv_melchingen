import Image from "next/image";

const Yoga = () => {
    return (
        <>
            <div className="pt-20 md:pt-20 pb-8 min-h-screen px-2 lg:px-40 ">

                <div className="flex flex-col lg:flex-row bg-blue-300 my-10 rounded-3xl">
                    <div className="relative h-full min-w-40 min-h-40">
                        <Image
                            src='/yoga/yoga.jpg'
                            alt="Yoga"
                            width={1000}
                            height={1000}
                            className="h-auto object-cover rounded-lg"
                        />
                    </div>

                    <span className="flex items-center py-12 lg:px-12 justify-center">
                        <h1 className="px-6 text-xl xl:text-4xl"> Liebe TVM-Mitglieder,<br/><br/>wir bieten in Kooperation mit Anna<br/>montags und dienstags Yoga-Kurse<br/>bei uns in Melchingen an.<br/> <br/>Mehr Infos erhaltet ihr unter der Website:<br/><a href="https://www.yoganna-alb.de" className="underline">www.yoganna-alb.de</a></h1>
                    </span>
                </div>

            </div>
        </>
    )
}

export default Yoga