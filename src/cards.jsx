import { useEffect, useState } from 'react';

import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, CardEight } from './child_cards';

export default function Cards() {
  const [srcUrlArr, setSrcUrlArr] = useState([]);
  useEffect(() => console.log(srcUrlArr));
  const urlArr = [
    'https://tenor.googleapis.com/v2/search?q=minecraftstrider&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=minecraftblaze&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=hoglin&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=ghast&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=witherstorm&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=minecraftwarden&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=minecraftenderman&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
    'https://tenor.googleapis.com/v2/search?q=minecraftcreeper&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
  ];
  useEffect(() => {
    
    urlArr.forEach((element) => {
      const fetchData = async () => {
        try {
          const promisedResponse = await fetch(element);
          const promisedResult = await promisedResponse.json();
          console.log(promisedResult);

          let imgTitleSrc = {
            img: promisedResult.results[0].media_formats.mediumgif.url,
            title: promisedResult.results[0].tags[0],
          };

          setSrcUrlArr((prevArr) => {
            if (prevArr.some((e) => e.img === imgTitleSrc.img)) return prevArr;
            return [...prevArr, imgTitleSrc];
          });
        } catch (error) {
          console.log('Error:', error);
        }
      };
      fetchData();
    });
  }, []);
  
  const giveRandomNumArr = () => {
    const randomNumArr = [];
    randomNumArr.map(() => {
      const randomNum = Math.floor(Math.random() * 8);

      randomNumArr.length === 0 ? randomNumArr.push(randomNum) : null;
      randomNumArr.find((element) => {
        element !== randomNum;
      })
        ? randomNumArr.push(randomNum)
        : null;
    });

    return randomNumArr;
  };

  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col gap-4 h-[80vh] w-[90vw]"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <CardOne srcUrlArr={srcUrlArr} />
        <CardTwo srcUrlArr={srcUrlArr} />
        <CardThree srcUrlArr={srcUrlArr} />
        <CardFour srcUrlArr={srcUrlArr} />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <CardFive srcUrlArr={srcUrlArr} />
        <CardSix srcUrlArr={srcUrlArr} />
        <CardSeven srcUrlArr={srcUrlArr} />
        <CardEight srcUrlArr={srcUrlArr} />
      </div>
    </div>
  );
}
