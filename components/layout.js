// components/layout.js

import Link from "next/link";
// import Potato from './potato'


export default function Layout({ children }) {
  return (
    <>
     {/* <div className="absolute top-0 w-60">
      <Potato/>
      </div> */}
    <div className="pt-10 pb-3 mx-auto lg:pb-4 ">
      <div className='flex justify-center space-x-6 font-sans sm:space-x-16 md:space-x-18 lg:space-x-23'> 
      
        <div className="pl-2 pr-2 font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/projects"> Projects</Link></div>
        <div className="pl-2 pr-2 font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/writings"> Writings</Link></div>
        <div className="pl-2 pr-2 font-sans hover:underline underline-offset-4 decoration-cyan-400 decoration-4"><Link href="/"> Contact</Link></div>
      </div>
    </div>
      <main>{children}</main>
    </>
  )
}