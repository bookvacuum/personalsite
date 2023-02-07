import Tag from '/components/tag';
import Link from 'next/link';

export default function Contact() {

    return (
        <>
        <div className="px-5 pt-10 mx-auto sm:px-40">
           
            <p>Here are some things I get asked a lot about:</p>
            <div className='flex-wrap sm:w-3/4'>
            <Tag props={{name: 'Early stage founder experience', color: 'bg-amber-200'}}/>
            <Tag props={{name: 'Biotech outsourcing', color: 'bg-emerald-200'}}/>
             <Tag props={{name: 'Stanford Symbolic Systems', color: 'bg-blue-200'}}/>
             <Tag props={{name: 'Best Korean food in the Bay', color: 'bg-pink-200'}}/>
            <Tag props={{name: 'Law school', color: 'bg-slate-200'}}/>
            <Tag props={{name: 'The future of AI', color: 'bg-fuchsia-200'}}/>
            <Tag props={{name: 'Raising venture capital', color: 'bg-indigo-200'}}/>
            </div>

            <p className='pt-5'>Here are some things I want to connect with more people about:</p>
            <div className='flex-wrap'>
            <Tag props={{name: 'FPS gaming', color: 'bg-sky-200'}}/>
            <Tag props={{name: 'Playing squash in the Bay Area', color: 'bg-yellow-200'}}/>
            <Tag props={{name: 'Digital humanities', color: 'bg-orange-200'}}/>
            <Tag props={{name: 'Inclusive UI/UX', color: 'bg-green-200'}}/>
            <Tag props={{name: 'International founders', color: 'bg-red-200'}}/>

            </div>         
             <p className='pt-3 pb-0'>I&apos;m generally open to chatting about anything as long as you are not trying to sell me something. You can reach me at <br></br>
    <span className='underline underline-offset-2'>Lsunwoo0000@gmail.com</span>,
       <span> <Link className="underline underline-offset-2 text-cyan-700" href='https://twitter.com/SunwooLee__'>Twitter</Link></span>, or
       <span> <Link className="underline underline-offset-2 text-cyan-700" href='https://www.linkedin.com/in/sunwoo-lee-215a92126/'>Linkedin</Link></span></p>

           
        </div>
        </>

    )

}