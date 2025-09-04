import { useState } from 'react';
import dragonWallpaper from './assets/fantastic-detailed-dragon.jpg'

function MainPage() {
  const [scoreCounter, setScoreCounter] = useState(0);
  const [bestScoreCounter, setBestScoreCounter] = useState(0);

  return <div className='h-[100vh] w-[100vw]'>
<img className='h-full w-full' src={dragonWallpaper}></img>









  </div>;
}

export default MainPage;
