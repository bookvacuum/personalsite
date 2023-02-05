import { BoxGeometry } from 'three';
import Tag from '/components/tag';

 export default function Projects() {

    return (
<>
        <div className='items-center h-full px-2 mx-auto text-center bg-fuchsia-50 sm:px-5'>
      <ul>
     <li>
     <h3 className='pt-5 font-bold'>AI Chatbot that answers developer questions</h3>
          <p className='pt-1 text-sm'>Built before the days of ChatGPT, available as a web app and slackbot. 
          In this demo, the bot answers questions about python pandas and provides additional resources</p>

    <video src={require('/public/chatbot.mp4')} autoPlay={true} loop muted width={500}
      height={500} className={`mx-auto drop-shadow`}/>
      <div className='flex flex-wrap justify-center pt-2'>
        <Tag props={{name: 'Node.js', color: 'indigo'}}/>
        <Tag props={{name: 'Javascript', color: 'yellow'}}/>
        <Tag props={{name: 'SlackAPI', color: 'emerald'}}/>
    </div>
</li>
    </ul>   
       </div> 
</>


    )
 }
