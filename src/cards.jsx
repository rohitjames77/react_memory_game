import { useState } from 'react';

import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, CardEight } from './child_cards';

export default function Cards() {
  const [srcUrlArr, setSrcUrlArr] = useState([]);
  const [srcTitleArr, setSrcTitleArr] = useState([]);
  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col gap-4 h-[80vh] w-[90vw]"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <CardOne
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardTwo
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardThree
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardFour
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <CardFive
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardSix
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardSeven
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
        <CardEight
          srcUrlArr={srcUrlArr}
          setSrcUrlArr={setSrcUrlArr}
          srcTitleArr={srcTitleArr}
          setSrcTitleArr={setSrcTitleArr}
        />
      </div>
    </div>
  );
}
