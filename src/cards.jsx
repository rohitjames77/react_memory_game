import { useEffect, useState } from 'react';
import Chance from 'chance';
import { Child_Card } from './child_cards';

export default function Cards() {
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

  let createShuffledSrcArr = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };
  useEffect(() => {
    createShuffledSrcArr([1, 2, 3, 4, 5, 6]);
  }, []);

  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col gap-4 h-[80vh] w-[90vw]"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[0]?.img}
          srcObjTitle={srcUrlArr[0]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[1]?.img}
          srcObjTitle={srcUrlArr[1]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[2]?.img}
          srcObjTitle={srcUrlArr[2]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[3]?.img}
          srcObjTitle={srcUrlArr[3]?.title}
        />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[4]?.img}
          srcObjTitle={srcUrlArr[4]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[5]?.img}
          srcObjTitle={srcUrlArr[5]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[6]?.img}
          srcObjTitle={srcUrlArr[6]?.title}
        />
        <Child_Card
          srcUrlArr={srcUrlArr}
          createShuffledSrcArr={createShuffledSrcArr}
          setSrcUrlArr={setSrcUrlArr}
          srcObjImg={srcUrlArr[7]?.img}
          srcObjTitle={srcUrlArr[7]?.title}
        />
      </div>
    </div>
  );
}
