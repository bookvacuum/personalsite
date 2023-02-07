import Head from 'next/head';
import Image from 'next/image';
import profile from '/public/profilepic.jpg';
import dynamic from 'next/dynamic';
import Potato from '/components/potato';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import yuri from 'public/yuri.png';
import React from "react";

// const Potato = dynamic(() => import('/components/potato'), { ssr: false });

export default function Home() {

  
  return (


    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hi! I'm sunwoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Image alt="image of me" className='items-center pb-7 sm:w-30 sm:mx-auto sm:max-w-lg' src={profile}></Image>

     <div className='pl-5 pr-5 text-center'> 
   
        <h1 className='mb-3 text-4xl italic'>Hi! I&apos;m Sunwoo</h1> 
        <p className='pb-0 '>My name means giver of valuables.</p> 
        <p className='pb-0'>I&apos;m a full stack developer currently working on building a more authentic web.</p>
        <p className='pb-0 -mb-5'>In my free time I like to cook hearty meals like this one.</p>
  <div className='relative -left-[2px]'>
  <Potato/>
  </div>
          <p className='pb-3 font-sans'>Read about my journey</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto mb-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
</div>

  <div className='pt-4 ml-8 mr-8 text-center sm:ml-24 sm:mr-24'>

<div className='text-center relative -left-[15px]'>
<span className='p-1 mr-1 text-lg rounded bg-sky-200'>philosophy</span> <span>➡</span> <span className='p-1 ml-1 text-lg bg-pink-200 rounded'>symsys</span>
</div>

<p className='pt-3'>I was a philosophy nerd at Stanford who wanted to go to law school. But after I got into Harvard Law School <Link href='https://hls.harvard.edu/why-jdp/' className='underline underline-offset-2 text-cyan-700'>as a junior</Link> in college,
I started to take more risks and explore anything I found interesting.</p>
<p>After building a <Link href='/projects/#section' className='underline underline-offset-2 text-cyan-700'>social network for queer womxn at Stanford </Link>, a project that went viral &#40;then crashed&#41;, I discovered I loved working with like-minded people to solve problems with technology.
I soon realized that nontechnical majors were treated like second class citizens in the startup space. I decided to build a strong technical foundation that can complement my soft skills.</p>
<p>Luckily, <Link href='http://www.symsyssociety.org/whatissymsys' className='underline underline-offset-2 text-cyan-700'>Stanford&#39; Symbolic Systems Program</Link> was perfect for this. I finished my masters in Symbolic Systems in 2021, focusing on artificial intelligence and consciousness.</p>


<div className='pt-4 text-center relative left-[3px]'>
<span className='p-1 mr-1 text-lg bg-pink-200 rounded'>symsys</span> <span>➡</span> <span className='p-1 ml-1 text-lg rounded bg-emerald-200'>founder</span>
</div>

<p className='pt-3'>I was fortunate to get an operator&#39;s experience in engineering, product, b2b sales, marketing, and UX during my time at <Link href='https://www.neuro-cle.com/en' className='underline underline-offset-2 text-cyan-700'>Neurocle</Link>, <Link href='https://www.column.us/' className='underline underline-offset-2 text-cyan-700'>Column</Link> and <Link href='https://www.navercorp.com/en/naver/company' className='underline underline-offset-2 text-cyan-700'>Naver</Link> before starting my own company.</p>

<p>In 2022 I cofounded and served as the CEO of Cromatic, a company building software for outsourcing R&D in the lifesciences. During my time as CEO it raised 1.2M pre-seed round with top investors like Lux Capital.</p>



<div className='pt-4 text-center relative left-[10px]'>
<span className='p-1 mr-1 text-lg rounded bg-emerald-200'>founder</span> <span>➡</span> <span className='p-1 ml-1 text-lg bg-indigo-200 rounded'>second time founder</span>
</div>

<p className='pt-3'>Cromatic is still going on, but I&#39;ve left and am now working with a team on the problem of scaling authenticity on the web.</p>
<p>Our team is living in a house in SF with a cat named Yuri. </p>
<Image alt="picture of yuri" src={yuri} className='pb-3 mx-auto rounded'></Image>
<p className='pb-20 text-sm italic font-light'>Pictured: Yuri making it hard to finish this sen!@$af#$#rkgioeR90ef</p>



</div>


      


      
    </>
  )
}
