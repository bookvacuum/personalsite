// components/layout.js

import Link from "next/link";
import { useEffect, useState } from "react";
// import Potato from './potato'


export default function Layout({ children }) {

  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
  const updateWindowDimensions = () => {
    if(window.scrollY >= 150) {
      setColorChange(true);
    } else {
      setColorChange(false);   
  };
  };

  window.addEventListener("scroll", updateWindowDimensions);

  return () => window.removeEventListener("scroll", updateWindowDimensions) 

}, []);

  return (
    <>
    
      {colorChange ? <div className="sticky top-0 z-10 pt-3 pb-3 mx-auto opacity-[98%] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">

      <div className='flex justify-center space-x-6 font-sans sm:space-x-16 md:space-x-18 lg:space-x-23'> 
        <Link href='/' className="pl-[4px] pr-[2px]">🏠</Link>

        <div className="pl-[2px] pr-[2px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/projects"> Projects</Link></div>
        <div className="pl-[2px] pr-[2px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/writings"> Writings</Link></div>
        <div className="pl-[2px] pr-[4px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/contact"> Contact</Link></div>
      </div>
    </div>  : <div className="sticky top-0 z-10 pt-10 pb-3 mx-auto bg-white lg:pb-4">

      <div className='flex justify-center space-x-6 font-sans sm:space-x-16 md:space-x-18 lg:space-x-23'> 
      <Link href='/' className="pl-[4px] pr-[2px] hover:underline underline-offset-4 decoration-cyan-400 decoration-4">🏠</Link>
        <div className="pl-[2px] pr-[2px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/projects"> Projects</Link></div>
        <div className="pl-[2px] pr-[2px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/writings"> Writings</Link></div>
        <div className="pl-[2px] pr-[4px] font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/contact"> Contact</Link></div>
      </div>
    </div> }
      <main>{children}</main>
    </>
  )
}