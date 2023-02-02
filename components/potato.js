import Potatoyes from '/public/3dPotato.glb';
import { useEffect } from 'react';
import bellpepper from '/public/bellPepper.glb';
import Cat from '/public/cat2.glb';



const Potato = () => {

  useEffect(() => { import('@google/model-viewer').catch(console.error); }, [])

  return(
  <model-viewer
    src= {Cat}
    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
    alt="A 3D model of ramen"
    shadow-intensity="0"
    auto-rotate
    ar
  ></model-viewer>
  )
  }

export default Potato;