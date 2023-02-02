import Head from 'next/head';
import Image from 'next/image';
import profile from '/public/profilepic.jpg';
import dynamic from 'next/dynamic';
import Potato from '/components/potato';

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
      
      <Image alt="image of me" className='pb-7' src={profile}></Image>

     <div className='pl-5 pr-5 text-center'> 
   
        <h1 className='mb-3 font-sans text-4xl italic'>Hi! I&apos;m Sunwoo</h1> 
        <p className='font-sans'>My name means giver of valuables</p> 
        <p className='font-sans'>I&apos;m a full stack developer currently working on building a more authentic web</p>
        <p className='font-sans'>I graduated from </p>


   <Potato/>
      </div>
     
      
    </>
  )
}
