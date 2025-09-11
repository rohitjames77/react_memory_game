import { useState } from 'react';

import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, CardEight } from './child_cards';

export default function Cards() {
  const [srcUrlArr, setSrcUrlArr] = useState([]);

  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col 
gap-4"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <CardOne srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardTwo srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardThree srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardFour srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <CardFive srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardSix srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardSeven srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
        <CardEight srcUrlArr={srcUrlArr} setSrcUrlArr={setSrcUrlArr} />
      </div>
    </div>
  );
}
