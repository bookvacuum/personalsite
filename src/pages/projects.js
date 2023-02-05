import { BoxGeometry } from 'three';
import Tag from '/components/tag';
import YoutubeVideo from '/components/youtube';
import Image from 'next/image';
import quitnow from '/public/quitnow.png';

 export default function Projects() {

    return (
<>
        <div className='items-center h-full px-2 mx-auto text-center bg-fuchsia-50 sm:px-5'>
      <ul>
     <li>
     <h3 className='pt-5 pb-1 font-bold'>AI Chatbot that answers developer questions</h3>
          <p className='pt-1 text-sm'>Built before the days of ChatGPT, available as a web app and slackbot. 
          In this demo, the bot answers questions about python pandas and provides additional resources</p>

    <video src={require('/public/chatbot.mp4')} autoPlay={true} loop muted width={500}
      height={500} className={`mx-auto drop-shadow`}/>
      
</li>
  <li>
     <h3 className='pt-5 pb-1 font-bold'>Smart contract for ethSF </h3>
          <p className='pt-1 text-sm'>Built before the days of ChatGPT, available as a web app and slackbot. 
          In this demo, the bot answers questions about python pandas and provides additional resources</p>
          <Image src={quitnow} className = "w-[500px] mx-auto" alt="landing page of Quit Now"/>

</li>
<li>
    <h3 className='pt-5 pb-1 font-bold'>Social media for queer womxn</h3>
          <p className='pt-1 text-sm'>Built by a team of almost 10 Stanford students, Queer Chart represents relationships between users with graphs. In-app chatting and a feed of posts are also available. 
          Although this project had the best intentions, it made a big mistake of promising to be a safe space for queers at the beta stage when a lot of the things were actively under development.</p> 
<div className='mx-auto'>
<YoutubeVideo/>
</div>

</li>
    </ul>   
       </div> 
</>


    )
 }
