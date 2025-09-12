import { useEffect } from 'react';

export function CardOne({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
      const controller = new AbortController();

      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftstrider&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
          {
            signal: controller.signal,
          },
        );
        const promisedResult = await promisedResponse.json();

        const imgSrc1 = promisedResult.results[0].media_formats.mediumgif.url;
        const imgSrcTitle1 = promisedResult.results[0].tags[1]
        handleFetchedImg(imgSrc1);

        handleFetchedTitle(imgSrcTitle1);
      } catch (error) {
        console.log('Error in promisedResponse: ' + error);
      }
      return () => {
        controller.abort();
      };
    };

    fetchImages();
  }, []);
console.log('source array  in card 1 :' + srcUrlArr.length);
  return (
    <>
      <div id="card-1" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-1-img" className="flex-5 bg-cover " src={srcUrlArr[0]}></img>
        <h2 id="card-1-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[0]}
        </h2>
      </div>
    </>
  );
}

export function CardTwo({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {


    const fetchImages = async () => {
     const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftblaze&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();

        const imgSrc2 = promisedResult.results[0].media_formats.mediumgif.url;
        const imgSrcTitle2 = promisedResult.results[0].tags[0]
        handleFetchedImg(imgSrc2);
        handleFetchedTitle(imgSrcTitle2);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };
    };



    fetchImages();
  }, []);
  console.log('source array  in card2' + srcUrlArr.length);
  return (
    <>
      <div id="card-2" className="border-2 border-white flex-1 flex flex-col items-center  ">
        <img id="card-2-img" className="flex-5 bg-cover bg-center bg-no-repeat" src={srcUrlArr[1]}></img>
        <h2 id="card-2-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[1]}
        </h2>
      </div>
    </>
  );
}

export function CardThree({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
       const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=hoglin&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc3 = promisedResult.results[1].media_formats.mediumgif.url;
        const imgSrcTitle3 = promisedResult.results[1].tags[1]
        handleFetchedImg(imgSrc3);
        handleFetchedTitle(imgSrcTitle3);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };


    };
    fetchImages();
  }, []);

  console.log('source array  in card3' + srcUrlArr.length);
  return (
    <>
      <div id="card-3" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-3-img" className="flex-5" src={srcUrlArr[2]}></img>
        <h2 id="card-3-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[2]}
        </h2>
      </div>
    </>
  );
}

export function CardFour({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  
  useEffect(() => {
    const fetchImages = async () => {
   const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=ghast&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc4 = promisedResult.results[0].media_formats.mediumgif.url;
        const imgSrcTitle4 = promisedResult.results[0].tags[1]
        handleFetchedImg(imgSrc4);
        handleFetchedTitle(imgSrcTitle4);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };


    };
    fetchImages();
  }, []);
  console.log('source array  in card4' + srcUrlArr.length);
  return (
    <>
      <div id="card-4" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-4-img" className="flex-5" src={srcUrlArr[3]}></img>
        <h2 id="card-4-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[3]}
        </h2>
      </div>
    </>
  );
}
export function CardFive({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
       const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=witherstorm&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc5 = promisedResult.results[2].media_formats.mediumgif.url;
        const imgSrcTitle5 = promisedResult.results[2].tags[0]
        handleFetchedImg(imgSrc5);
        handleFetchedTitle(imgSrcTitle5);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }

      return () => {
        controller.abort();
      };



    };
    fetchImages();
  }, []);
  console.log('source array  in card 5' + srcUrlArr.length);

  return (
    <>
      <div id="card-5" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-5-img" className="flex-5" src={srcUrlArr[4]}></img>
        <h2 id="card-5-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[4]}
        </h2>
      </div>
    </>
  );
}
export function CardSix({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
      const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftwarden&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc6 = promisedResult.results[1].media_formats.mediumgif.url;
        const imgSrcTitle6 = promisedResult.results[0].tags[0]
        handleFetchedImg(imgSrc6);
        handleFetchedTitle(imgSrcTitle6);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };



    };
    fetchImages();
  }, []);

  console.log('source array  in card 6' + srcUrlArr.length);
  return (
    <>
      <div id="card-6" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-6-img" className="flex-5" src={srcUrlArr[5]}></img>
        <h2 id="card-6-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[5]}
        </h2>
      </div>
    </>
  );
}
export function CardSeven({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
      const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftenderman&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc7 = promisedResult.results[0].media_formats.mediumgif.url;
        const imgSrcTitle7 = promisedResult.results[0].tags[0]
        handleFetchedImg(imgSrc7);
        handleFetchedTitle(imgSrcTitle7);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };



    };
    fetchImages();
  }, []);

  console.log('source array  in card7' + srcUrlArr.length);
  return (
    <>
      <div id="card-7" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-7-img" className="flex-5" src={srcUrlArr[6]}></img>
        <h2 id="card-7-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[6]}
        </h2>
      </div>
    </>
  );
}
export function CardEight({ srcUrlArr, handleFetchedImg, srcTitleArr, handleFetchedTitle }) {
  useEffect(() => {
    const fetchImages = async () => {
       const controller = new AbortController();
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftcreeper&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
          {
            signal: controller.signal,
          },


        );
        const promisedResult = await promisedResponse.json();
        const imgSrc8 = promisedResult.results[0].media_formats.mediumgif.url;
        const imgSrcTitle8 = promisedResult.results[0].tags[0]
        handleFetchedImg(imgSrc8);
        handleFetchedTitle(imgSrcTitle8);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
      return () => {
        controller.abort();
      };


    };
    fetchImages();
  }, [handleFetchedImg,handleFetchedTitle]);

  console.log('source array  in card 8' + srcUrlArr.length);

  return (
    <>
      <div id="card-8" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-8-img" className="flex-5" src={srcUrlArr[7]}></img>
        <h2 id="card-8-title" className="font-sans text-4xl flex-1 ">
          {srcTitleArr[7]}
        </h2>
      </div>
    </>
  );
}
