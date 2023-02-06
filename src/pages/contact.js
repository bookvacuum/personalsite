import Tag from '/components/tag';
import Link from 'next/link';

export default function Contact() {

    return (
        <>
        <div className="px-5 pt-10 mx-auto text-center">
           
            <p>Here are some things I get asked a lot about:</p>
            <div className='flex-wrap'>
            <Tag props={{name: 'Early stage founder experience', color: 'bg-amber-200'}}/>
            <Tag props={{name: 'Biotech outsourcing', color: 'bg-emerald-200'}}/>
             <Tag props={{name: 'Stanford Symbolic Systems', color: 'bg-blue-200'}}/>
             <Tag props={{name: 'Best Korean food in the Bay', color: 'bg-pink-200'}}/>
            <Tag props={{name: 'Law school', color: 'bg-slate-200'}}/>
            <Tag props={{name: 'The future of AI', color: 'bg-fuchsia-200'}}/>
            <Tag props={{name: 'Raising venture capital', color: 'bg-indigo-200'}}/>
            </div>

            <p>Here are some things I want to talk more about</p>
            <div className='flex-wrap'>
            <Tag props={{name: 'FPS gaming', color: 'bg-sky-200'}}/>
            <Tag props={{name: 'Digital humanities', color: 'bg-orange-200'}}/>
            <Tag props={{name: 'Women in tech', color: 'bg-green-200'}}/>

             <p>I&apos; generally open to chatting as long as you are not trying to sell me something. You can reach me at...</p>
    <p>Lsunwoo0000@gmail.com</p>
       <p> <Link className="underline underline-offset-2 text-cyan-700" href='https://twitter.com/SunwooLee__'>Twitter</Link></p>
       <p> <Link className="underline underline-offset-2 text-cyan-700" href='https://www.linkedin.com/in/sunwoo-lee-215a92126/'>Linkedin</Link></p>

            </div>
        </div>
        </>

    )

}