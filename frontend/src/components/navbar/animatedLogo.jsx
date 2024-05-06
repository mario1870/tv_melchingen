import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

const AnimatedLogo = () => {

    const [scrollPositionOnTop, setScrollPositionOnTop] = useState(true)

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPositionOnTop(() => currentPosition < 50);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const logoVariants = {
        hidden: {
            opacity: 1,
            scale: 1.5,
            x:10,
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
        }
    }

      const icon = {
        hidden: {
          pathLength: 0,
          transition: {
            duration: 0.2,
          }
        },
        visible: {
          pathLength: 1,
        }
      }

    return(
        <motion.div className="z-30">
            <Link to="/" className="flex justify-center items-center gap-1" >
                <motion.img src={"/navbar/TVMlogo.png"} alt="Logo" className="h-10" variants={logoVariants} transition={{ delay: 0.2, duration: 0.5 }} initial="hidden" animate= {scrollPositionOnTop ? 'visible' : 'hidden'} exit="exit" />
                <svg className="mx-1" height="36" viewBox="0 0 278 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate= {scrollPositionOnTop ? 'visible' : 'hidden'} variants={icon} initial="hidden" transition={{delay: 1.6, duration: 0.6}} d="M197.739 92.296V60.1387L214.336 100.551C215.122 102.561 216.456 104.274 218.343 105.474C220.081 106.581 222.036 107.152 224.099 107.152C226.263 107.152 228.211 106.427 229.859 105.261C231.593 104.122 232.905 102.542 233.706 100.619L233.711 100.609L233.715 100.598L250.331 60.2132V92.296C250.331 96.6267 251.684 100.696 255.118 103.539C258.372 106.233 262.702 107.152 267.235 107.152H272.235V102.152V20.36C272.235 15.8916 270.59 11.9254 267.086 9.07654C263.786 6.32313 259.579 5.24799 255.075 5.24799H251.708L250.442 8.36827L224.319 72.7559L197.483 8.32547L196.201 5.24799H192.867C188.367 5.24799 184.163 6.32124 180.865 9.0693C177.385 11.8772 175.835 15.8413 175.835 20.232V102.152V107.152H180.835C185.323 107.152 189.62 106.245 192.851 103.575L192.86 103.568L192.868 103.561C196.302 100.7 197.739 96.6699 197.739 92.296Z" style={{ stroke: 'white', strokeWidth: 6 }}/>
                    <motion.path animate= {scrollPositionOnTop ? 'visible' : 'hidden'} variants={icon} initial="hidden" transition={{delay: 1, duration: 0.6}} d="M119.985 100.088L120 100.129L120.017 100.169C120.83 102.201 122.139 104.049 124.094 105.352C126.04 106.65 128.243 107.152 130.419 107.152C132.677 107.152 134.921 106.61 136.905 105.288C138.836 104 140.216 102.198 140.996 100.048L174.005 13.176L175.737 8.61831L171.224 6.77225C168.968 5.84935 166.642 5.24799 164.339 5.24799C161.108 5.24799 158.048 6.06283 155.398 7.89475C152.765 9.62817 150.905 12.0777 149.801 15.0204L149.789 15.0528L149.778 15.0853L130.387 69.0528L111.062 15.0902L111.05 15.0552L111.037 15.0204C109.94 12.0963 108.096 9.65905 105.489 7.92758C102.883 6.05047 99.8297 5.24799 96.627 5.24799C95.3867 5.24799 94.1535 5.44166 92.9588 5.75287C91.7376 5.99058 90.5297 6.36246 89.3989 6.92785L85.3552 8.94972L86.961 13.176L119.985 100.088Z" stroke="white" style={{ stroke: 'white', strokeWidth: 6 }}/>
                    <motion.path animate= {scrollPositionOnTop ? 'visible' : 'hidden'} variants={icon} initial="hidden" transition={{delay: 0.6, duration: 0.6}} d="M10.23 27.024H36.462V102.152V107.152H41.462C46.021 107.152 50.3363 106.172 53.6229 103.433C57.0566 100.572 58.494 96.5419 58.494 92.168V27.024H74.614C78.7949 27.024 82.8278 25.8969 85.7456 22.7921C88.6085 19.7457 89.598 15.6374 89.598 11.4V6.39999H84.598H20.214C16.0331 6.39999 12.0002 7.52711 9.0824 10.6319C6.2195 13.6783 5.22998 17.7866 5.22998 22.024V27.024H10.23Z" style={{ stroke: 'white', strokeWidth: 6 }} />
                </svg>
            </Link>
        </motion.div>
    )
}

export default React.memo(AnimatedLogo)