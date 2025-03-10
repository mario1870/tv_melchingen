
import { Facebook, Instagram  } from 'lucide-react';
import Link from 'next/link'


const Footer = () => {
    return (
        <div className="bg-transparent flex w-full justify-center flex-col py-6 pt-12 items-center">
            <div className="flex gap-12 pb-4">
                <a href="https://www.instagram.com/tvmelchingen1912/" rel="noopener noreferrer"><Instagram size={40} /></a>
                <a href="https://www.facebook.com/tvmelchingen/?locale=de_DE" rel="noopener noreferrer"><Facebook size={40} /></a>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="footer">&copy; {new Date().getFullYear()} - All rights reserved</p>
                <Link href="/impressum"><span>Impressum</span></Link>                   
            </div>

        </div>
    )
}

export default Footer