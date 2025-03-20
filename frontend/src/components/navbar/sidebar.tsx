import { Link } from "react-router-dom";
import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface NavigationLink {
  to: string;
  label: string;
  delay: number;
}

interface SidebarProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigationLinks: NavigationLink[] = [
  { to: "/aktive", label: "Aktive", delay: 0.3 },
  { to: "/jugend", label: "Jugend", delay: 0.4 },
  { to: "/yoga", label: "Yoga", delay: 0.5 },
  { to: "/Kinderturnen", label: "Kindertunen", delay: 0.7 },
  { to: "/roundnet", label: "Roundnet", delay: 0.7 },
  { to: "/Sportheim", label: "Sportheim", delay: 0.8 },
  { to: "/elfmeterturnier", label: "Elfmeterturnier", delay: 0.9 },
  { to: "/Sponsoren", label: "Sponsoren", delay: 1.0 },
  { to: "/Kontakt", label: "Kontakt", delay: 1.1 },
];

const Sidebar: React.FC<SidebarProps> = ({ toggle, setToggle }) => {
  const handleSidebarToggle = () => {
    // Hier wird setToggle aufgerufen, um den State im Parent zu aktualisieren
    setToggle((prevToggle) => !prevToggle);
  };
 
  return(
    <div className="w-full min-h-full z-30 flex flex-col left-0 pt-28 fixed justify-between">
      <div className="flex flex-col justify-between gap-4">
        {navigationLinks.map((link) => (
          <motion.div key={link.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: link.delay }}
          >
            <Link 
              to={link.to} 
              onClick={handleSidebarToggle} 
              className="w-full px-10 my-1.5 text-white text-4xl font-sans font-medium"
            >
              <span>{link.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>    
      <div className="flex w-full justify-around px-20 py-6">
        <a href="https://www.instagram.com/tvmelchingen1912/" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="white" size={40} />
        </a>
        <a href="https://www.facebook.com/tvmelchingen/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF color="white" size={40} />
        </a>
        <a href="https://www.youtube.com/@tvmelchingen3274" target="_blank" rel="noopener noreferrer">
          <FaYoutube color="white" size={40} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;