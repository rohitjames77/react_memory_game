import { useState } from 'react';
import Score from './score';
import Cards from './cards';
function MainPage() {
  const [scoreCounter, setScoreCounter] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [clickedImg, setClickedImg] = useState(null);

  return (
    <div className="h-screen w-screen bg-[url(./assets/wallpaper_minecraft_nether_update_1920x1080.png)] bg-cover bg-center bg-no-repeat grid grid-rows-10 grid-cols-10 relative font-sans">
      <h1 id="Game-title" className="row-start-1 col-start-1 col-end-4 text-xl font-sans">
        Memorize The Mob
      </h1>

      {isVisible ? (
        <h1 className=" font-sans text-2xl text-gray-50 row-start-2 col-start-3 col-end-11 " id="Result">
          Round Over Best Score is :{scoreCounter}
        </h1>
      ) : (
        <Score scoreCounter={scoreCounter} />
      )}
      <Cards
        scoreCounter={scoreCounter}
        setScoreCounter={setScoreCounter}
        setClickedImg={setClickedImg}
        setVisible={setVisible}
        clickedImg={clickedImg}
      />
    </div>
  );
}

export default MainPage;
