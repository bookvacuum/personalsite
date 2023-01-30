// components/layout.js

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
    <div className="p-4 pt-10 pb-8 font-sans">
      <div className='flex float-right sm:space-x-10'> 
        <div className="pl-2 pr-2"><Link href="/"> Home</Link> </div>
        <div className="pl-2 pr-2"><Link href="/"> Projects</Link></div>
        <div className="pl-2 pr-2"><Link href="/"> Writings</Link></div>
        <div className="pl-2 pr-2"><Link href="/"> Contact</Link></div>
      </div>
    </div>
      <main>{children}</main>
    </>
  )
}