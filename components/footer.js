import github from '/public/github-mark.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    

    return(
        <div className="justify-center h-32 text-center bg-purple-300 sm:h-48">
            <Link href='https://github.com/bookvacuum/personalsite' className='relative text-sm rounded top-12 sm:top-20'>The code for this website lives here<Image className="inline-flex ml-1" src={github} alt="github" width="20" height="20" /></Link>
        </div>

    )
}

