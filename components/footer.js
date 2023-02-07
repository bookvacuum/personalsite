import github from '/public/github-mark.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    

    return(
        <div className="justify-center h-full text-right bg-purple-300">
            <div className='pt-5 pb-5'>
           <Link href='https://www.linkedin.com/in/sunwoo-lee-215a92126/' className='block p-1 pr-5 text-zinc-700'>Linkedin</Link>
           <Link href='https://twitter.com/SunwooLee__' className='block p-1 pr-5 text-zinc-700'>Twitter</Link>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <br></br>
            <Link href='https://github.com/bookvacuum/personalsite' className='block pr-5 text-zinc-700'>The code for this website lives here<Image className="inline-flex ml-1" src={github} alt="github" width="20" height="20" /></Link>
        </div>
        </div>

    )
}

