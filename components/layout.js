// components/layout.js

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
    <div className="flex p-4 pt-16 font-sans text-3xl bg-cyan-200">
        <div className="pl-4 pr-4"><Link href="/"> Home</Link> </div>
        <div className="pl-4 pr-4"><Link href="/"> Projects</Link></div>
        <div className="pl-4 pr-4"><Link href="/"> Writings</Link></div>
        <div className="pl-4 pr-4"><Link href="/"> Contact</Link></div>
    </div>
      <main>{children}</main>
    </>
  )
}