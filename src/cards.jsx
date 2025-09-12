import { useState } from 'react';

import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, CardEight } from './child_cards';

export default function Cards() {
  const [srcUrlArr, setSrcUrlArr] = useState([]);
  const [srcTitleArr, setSrcTitleArr] = useState([]);

  const handleFetchedImg = (newResponse) => {
    setSrcUrlArr((srcUrlArr) => {
      if (srcUrlArr.length === 0) {
        return [...srcUrlArr, newResponse];
      }
      if (srcUrlArr.find((element) => element === newResponse)) {
        return srcUrlArr;
      }
      return [...srcUrlArr, newResponse];
    });
  };

  const handleFetchedTitle = (newResponse) => {
    setSrcTitleArr((srcTitleArr) => {
      if (srcTitleArr.length === 0) {
        return [...srcTitleArr, newResponse];
      }
      if (srcTitleArr.find((element) => element === newResponse)) {
        return srcTitleArr;
      }

      return [...srcTitleArr, newResponse];
    });
  };

  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col gap-4 h-[80vh] w-[90vw]"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <CardOne
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardTwo
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardThree
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardFour
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <CardFive
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardSix
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardSeven
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
        <CardEight
          srcUrlArr={srcUrlArr}
          handleFetchedImg={handleFetchedImg}
          srcTitleArr={srcTitleArr}
          handleFetchedTitle={handleFetchedTitle}
        />
      </div>
    </div>
  );
}
