import { useEffect, useState } from 'react';
import { Child_Card } from './child_cards';

export default function Cards({ scoreCounter, setScoreCounter, setClickedImg, clickedImg, setVisible }) {
  const [srcUrlArr, setSrcUrlArr] = useState([]);

  const urlArr = [
    'https://tenor.googleapis.com/v2/search?q=minecraftstrider&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=minecraftblaze&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=hoglin&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=ghast&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=witherstorm&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=minecraftwarden&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=minecraftenderman&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
    'https://tenor.googleapis.com/v2/search?q=minecraftcreeper&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
  ];
  useEffect(() => {
    urlArr.forEach((element) => {
      const fetchData = async () => {
        try {
          const promisedResponse = await fetch(element);
          const promisedResult = await promisedResponse.json();

          let imgTitleSrc = {
            img: promisedResult.results[1].media_formats.mediumgif.url,
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

  let createShuffledSrcArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };
  useEffect(() => {
    createShuffledSrcArr([1, 2, 3, 4, 5, 6]);
  }, []);

  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col gap-4 h-[30vh] w-[60vw]"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[0]?.img}
          srcObjTitle={srcUrlArr[0]?.title}
          id={'Card_1'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[1]?.img}
          srcObjTitle={srcUrlArr[1]?.title}
          id={'Card_2'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[2]?.img}
          srcObjTitle={srcUrlArr[2]?.title}
          id={'Card_3'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[3]?.img}
          srcObjTitle={srcUrlArr[3]?.title}
          id={'Card_4'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[4]?.img}
          srcObjTitle={srcUrlArr[4]?.title}
          id={'Card_5'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[5]?.img}
          srcObjTitle={srcUrlArr[5]?.title}
          id={'Card_6'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[6]?.img}
          srcObjTitle={srcUrlArr[6]?.title}
          id={'Card_7'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[7]?.img}
          srcObjTitle={srcUrlArr[7]?.title}
          id={'Card_8'}
          scoreCounter={scoreCounter}
          setScoreCounter={setScoreCounter}
          setClickedImg={setClickedImg}
          setVisible={setVisible}
          clickedImg={clickedImg}
        />
      </div>
    </div>
  );
}
