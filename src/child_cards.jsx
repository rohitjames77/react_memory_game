import { useEffect } from 'react';

export function CardOne({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftstrider&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=2',
        );
        const promisedResult = await promisedResponse.json();
        console.log(promisedResult);
return promisedResult;
        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);

  return (
    <>
      <div id="card-1" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-1-img" className="flex-5"></img>
        <h2 id="card-1-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}

export function CardTwo({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftblaze&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
return promisedResult;
        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-2" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-2-img" className="flex-5"></img>
        <h2 id="card-2-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}

export function CardThree({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecrafthoglin&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
return promisedResult;
        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-3" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-3-img" className="flex-5"></img>
        <h2 id="card-3-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}

export function CardFour({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftghast&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
        return promisedResult;

        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-4" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-4-img" className="flex-5"></img>
        <h2 id="card-4-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}
export function CardFive({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftzombiepiglin&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
return promisedResult;

        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-5" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-5-img" className="flex-5"></img>
        <h2 id="card-5-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}
export function CardSix({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftwitherskeleton&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
        return promisedResult;

        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-6" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-6-img" className="flex-5"></img>
        <h2 id="card-6-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}
export function CardSeven({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftenderman&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
return promisedResult;

        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-7" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-7-img" className="flex-5"></img>
        <h2 id="card-7-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}
export function CardEight({ srcUrlArr, setSrcUrlArr }) {
  (useEffect(() => {
    const fetchImages = async () => {
      try {
        const promisedResponse = await fetch(
          'https://tenor.googleapis.com/v2/search?q=minecraftskeleton&key=AIzaSyDzHHxZeWLb7pVTml_arg_-qAvqqba7XL4&limit=4',
        );
        const promisedResult = await promisedResponse.json();
        return promisedResult;

        //  setpromisedResults(promisedResults.push(promisedResult))
        //  console.log(promisedResults);
      } catch (error) {
        console.log('Error in promisedResponse : ' + error);
      }
    };
    fetchImages();
  }),
    []);
  return (
    <>
      <div id="card-8" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-8-img" className="flex-5"></img>
        <h2 id="card-8-title" className="font-sans text-4xl flex-1 ">
          {'SYRAX'}
        </h2>
      </div>
    </>
  );
}
