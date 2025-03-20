import { Link } from "react-router-dom";
import { Button } from "../../components/ui/shadnCN/button";

const Veranstaltungen = () => {

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-6">
      <h2 className="text-lg md:text-2xl px-8 text-center font-semibold">Anmeldungen sind leider für dieses Turnier nicht mehr möglich!</h2>
      <div className="flex gap-4">
        <div className="w-full flex justify-center items-center pb-12">
          <Link to="/elfmeterturnier/teams">
            <Button className="bg-white/80 hover:bg-gray-50/50 text-black rounded-full px-4 py-2">
              Zur Teamliste
            </Button>
          </Link>
        </div>
        
        <div className="w-full flex justify-center items-center pb-12">
          <Link to="/">
            <Button className="bg-white/80 hover:bg-gray-50/50 text-black rounded-full px-4 py-2">
              Zur Startseite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Veranstaltungen;
