import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar"

const AnimatedLogo = lazy(() => import("./animatedLogo"));

const navbarData = [
  {link: "/aktive", titel: "Aktive"},
  {link: "/jugend", titel: "Jugend"},
  {link: "/yoga", titel: "Yoga"},
  {link: "/Gymnastik", titel: "Gymnastik"},
  {link: "/Kinderturnen", titel: "Kindertunen"},
  {link: "/roundnet", titel: "Roundnet"},
  {link: "/Sportheim", titel: "Sportheim"},
  {link: "/elfmeterturnier", titel: "Elfmeterturnier"},
  {link: "/Sponsoren", titel: "Sponsoren"},
  {link: "/Kontakt", titel: "Kontakt"},
];

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [closedButNotOnLoad, setClosedButNotOnLoad] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [hovered, setHovered] = useState(false);

  const handleToggleHamburger = useCallback(() => {
    setHamburger(prevHamburger => !prevHamburger);
    setClosedButNotOnLoad(true);
    document.body.style.overflow = hamburger ? 'unset' : 'hidden';
  }, [hamburger]);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    setClicked(currentPosition < 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const HintergrundAnimationNavbarOnScroll = {
    normal: { backgroundColor: "rgba(52, 152, 219, 1)" },
    clicked: { backgroundColor: "rgba(0, 0, 0, 0.5)" }
  };

  const animatedNavbarUnderline = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.2
      }
    },
  };

    return(
      <>
        <motion.nav 
          className="fixed w-full bg-blue-400 z-40 flex justify-between px-4 md:px-8 items-center py-2 h-20 drop-shadow-lg" 
          initial="normal" 
          animate={clicked ? "clicked" : "normal"} 
          variants={HintergrundAnimationNavbarOnScroll} 
          ransition={{ duration: 0.6 }}
        >

          <Suspense fallback={<div>Laden...</div>}>
            <motion.div className="z-20">
              <AnimatedLogo />
            </motion.div>
          </Suspense>

          <div className="flex-row hidden lg:flex">
            {navbarData.map((data) => (
              <span className='w-full flex justify-center items-center flex-col pt-4' key={data.titel}>
                  <motion.span><Link to={data.link} onMouseEnter={() => {setHovered(data.titel)}} onMouseLeave={() => {setHovered(false)}} className={"w-full h-10 md:px-1 xl:px-2 my-1.5 text-white md:text-base xl:text-2xl font-sans font-semibold text-center"}>{data.titel}</Link></motion.span>    
                  <svg className='' width="100%" height="16" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={animatedNavbarUnderline} initial="hidden" animate={hovered === data.titel ? "visible": "hidden"}  d="M0 2C34.3704 2 68.7407 2 103.111 2C114.481 2 125.852 2 137.222 2C139.593 2 141.963 2 144.333 2C148.219 2 136.669 3.32019 132.889 4.22222C104.373 11.0272 76.1103 15.889 46.9444 19.7778C38.7799 20.8664 30.456 22.4688 22.2222 23C13.3405 23.573 39.9397 21.2713 48.7778 20.2222C67.9708 17.9441 87.7366 16.8651 107.056 18.5556C109.817 18.7972 124.305 22.3904 126 19" stroke="white" stroke-width="3" stroke-linecap="round"/>
                  </svg>           
              </span> 
            ))}   
          </div>  

          <div className="block lg:hidden">
            {hamburger ? (
              <MdClose onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" />
            ) : (
              <RxHamburgerMenu onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10 z-50" color='white'/>
            )}
          </div>
        </motion.nav>

        <Suspense fallback={<div>Laden...</div>}>
          {hamburger && (
            <motion.div
              initial={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }} 
              animate={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }}
              exit={{ opacity: 0, x: "-100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full min-h-full z-30 flex flex-col left-0 fixed bg-blue-900 justify-between"
              style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
            >
                <Sidebar togggle={hamburger} setToggle={handleToggleHamburger} />
            </motion.div>
          )}
        </Suspense>

        {!hamburger && closedButNotOnLoad && (
          <motion.div
            initial={{ opacity: 1, x: 0, borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%" }} 
            animate={{ opacity: 0, x: "100vw", borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full min-h-full z-30 flex flex-col left-0 fixed bg-blue-900 justify-between"
            style={{ opacity: closedButNotOnLoad ? 0 : 0 }}
          >
          </motion.div>
        )}

      </>

    )
}

export default React.memo(Navbar)