import { useEffect } from 'react';
import Cat from '/public/cat2.glb';

const loading = () => {
  return(
    <div className='p-5 bg-white'></div>
  )
}


const Potato = () => {

  useEffect(() => { import('@google/model-viewer').catch(console.error); }, [])

  return(
  <model-viewer
    src= {Cat}
    poster={loading}
    alt="A 3D model of ramen"
    shadow-intensity="0"
    auto-rotate
  ></model-viewer>
  )
  }

export default Potato;