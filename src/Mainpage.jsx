import { useState } from 'react';
import Score from './score';
import Cards from './cards';
function MainPage() {
  const [scoreCounter, setScoreCounter] = useState(0);

  return (
    <div className="h-screen w-screen bg-[url(./assets/fantastic-detailed-dragon.jpg)] bg-cover grid grid-rows-10 grid-cols-10 relative font-sans">
      <h1 id='Game-title' className='row-start-1 col-start-1 col-end-4 text-xl font-sans'>Memorize The Dragons </h1>
      <Score scoreCounter={scoreCounter} />
      <h1 className=" font-sans text-2xl text-gray-50 row-start-2 col-start-3 col-end-11 " id="Result">
        {'Round Over Best Score is  :' + { scoreCounter }}
      </h1>
      <Cards scoreCounter={scoreCounter} setScoreCounter={setScoreCounter} />
    </div>
  );
}

export default MainPage;
