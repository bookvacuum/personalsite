import { BoxGeometry, Line } from 'three';
import Tag from '/components/tag';
import React, {useCallback} from 'react';
import YoutubeVideo from '/components/youtube';
import Image from 'next/image';
import quitnow from '/public/quitnow.png';
import Link from 'next/link';


 export default function Projects() {

    return (
<>
        <div className='items-center min-h-screen px-2 pb-40 mx-auto text-center bg-fuchsia-50 sm:px-5'>
            <h1 className='pt-10 pb-5 text-2xl'>Exciting things coming soon...</h1>
  <iframe src="https://giphy.com/embed/E6jscXfv3AkWQ" width="100%" height="100%" style={{position:"relative"}} class="giphy-embed" allowFullScreen></iframe>


      <ul>
        <h1 className='pt-10 text-2xl'>Previous projects</h1>
     <li>
     <h3 className='pt-3 pb-1 font-bold'>AI Chatbot that answers developer questions</h3>
          <p className='pt-1 text-sm'>Built before the days of ChatGPT, available as a web app and slackbot. 
          In this demo, the bot answers questions about Python pandas and provides additional resources</p>


 <video src={require('/public/chatbot.mp4')} autoPlay={true} loop muted width={800}
      height={800} className={`mx-auto justify-center drop-shadow`}/>

</li>
  <li>
     <h3 className='pt-5 pb-1 font-bold'>Smart contract for ethSF</h3>
          <p className='pt-[2px] pb-3 text-sm'>GoFundMe for people quitting their jobs, powered by web3 wallet infrastructure. Automatically creates wallet for users. $1200 prize winner at ETHSF</p>
           <Link className='p-2 mb-3 rounded bg-violet-200 hover:bg-violet-500' href='https://meek-smakager-d79825.netlify.app/'>Try it on laptop</Link>

          <Image src={quitnow} className = "w-[500px] mx-auto pt-3" alt="landing page of Quit Now"/>


</li>
<li>
    <h3 id="section" className='pt-5 pb-1 font-bold'>Social media for queer womxn</h3>
          <p className='pt-1 text-sm'>Built by a team of almost 10 Stanford students, Queer Chart represents relationships between users with graphs. In-app chatting and a feed of posts are also available. 
          Although this project had the best intentions, it made a big mistake of promising to be a safe space for queers at the beta stage when a lot of the things were actively under development.
          You can read more about the incident <Link className='underline text-cyan-600 underline-offset-2 decoration-cyan-600' href='https://stanforddaily.com/2019/11/19/queer-chart-startup-exposes-student-data/'>here</Link> and <Link className='underline text-cyan-600 underline-offset-2 decoration-cyan-600' href='https://stanforddaily.com/2019/11/19/the-foho-a-queer-startup-and-the-twisting-of-truth/'>here</Link>. </p> 

            <Link className='p-2 rounded bg-violet-200 hover:bg-violet-500' href='https://queerchart.com/'>Go to live site</Link>
<div className='mx-auto'>
<YoutubeVideo/>
</div>

</li>
    </ul>   
    </div>
</>

    )
 }
