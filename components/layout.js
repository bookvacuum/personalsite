// components/layout.js

import Link from "next/link";
// import Potato from './potato'


export default function Layout({ children }) {
  return (
    <>
     {/* <div className="absolute top-0 w-60">
      <Potato/>
      </div> */}
    <div className="p-4 pt-10 pb-8 font-sans sm:pb-12">
      <div className='flex float-right sm:space-x-10 sm:text-lg'> 
      
        <div className="pl-2 pr-2"><Link href="/"> Projects</Link></div>
        <div className="pl-2 pr-2"><Link href="/"> Writings</Link></div>
        <div className="pl-2 pr-2"><Link href="/"> Contact</Link></div>
      </div>
    </div>
      <main>{children}</main>
    </>
  )
}