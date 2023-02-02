import Head from 'next/head';
import Image from 'next/image';
import profile from '/public/profilepic.jpg';
import dynamic from 'next/dynamic';
import Potato from '/components/potato';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

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
   
        <h1 className='mb-3 font-sans text-4xl italic'>Hi! I&apos;m Sunwoo</h1> 
        <p className='font-sans'>My name means giver of valuables.</p> 
        <p className='font-sans'>I&apos;m a full stack developer currently working on building a more authentic web.</p>
        <p className='font-sans'>In my free time I like to cook hearty meals like this one.</p>
  <Potato/>
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


  <ul className='pt-4 ml-5 mr-5 list-none sm:ml-20 sm:mr-20'>
  <li>
<span className='p-1 text-lg rounded bg-sky-200 '>philosophy</span> <span>➡</span> <span className='p-1 text-lg bg-pink-200 rounded'>symsys</span>
<p className='pt-3'>I studied philosophy at Stanford. I chose it because I liked it and was reasonably good at it.
I decided against philosophy academia, which naturally made me consider law school. I was able to get accepted to Harvard Law School <Link href='https://hls.harvard.edu/why-jdp/' className='underline underline-offset-2 text-cyan-700'>as a junior</Link>  in college.
This allowed me to take more risks and explore anything I found remotely interesting.</p>
<p>After building a <Link href='/' className='underline underline-offset-2 text-cyan-700'>social network for queer womxn at Stanford </Link>, a project that went viral &#40;then crashed&#41;, I was hooked. I decided I wanted to work with like-minded people to solve problems with technology.
I soon realized that nontechnical majors were treated like second class citizens in the startup space. I decided to build a strong technical foundation that can complement my soft skills.</p>
<p>Luckily, <Link href='http://www.symsyssociety.org/whatissymsys' className='underline underline-offset-2 text-cyan-700'>Stanford&#39; Symbolic Systems Program</Link> was perfect for this. I finished my masters in Symbolic Systems in 2021, focusing on artificial intelligence and consciousness.</p>
</li>
<li>
<span className='p-1 text-lg bg-pink-200 rounded'>symsys</span> <span>➡</span> <span className='p-1 text-lg rounded bg-emerald-200'>founder</span>
<p className='pt-2'>I studied philosophy at Stanford. I</p>
</li>

<li>
<span className='p-1 text-lg rounded bg-emerald-200 '>first time founder</span> <span>➡</span> <span className='p-1 text-lg bg-pink-200 rounded'>second time founder</span>
<p className='pt-2'>I studied philosophy at Stanford.</p>
</li>




</ul>


</div>
      


      
    </>
  )
}
