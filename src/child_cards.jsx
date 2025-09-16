export function CardOne({ srcUrlArr }) {

const handleOnClick =()=>{


  
}

  return (
    <>
      <div id="card-1" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-1-img" className="flex-5 bg-cover " src={srcUrlArr[0]?.img}></img>
        <h2 id="card-1-title" className="font-sans text-4xl flex-1 ">
          {srcUrlArr[0]?.title}
        </h2>
      </div>
    </>
  );
}

export function CardTwo({ srcUrlArr }) {
  return (
    <>
      <div id="card-2" className="border-2 border-white flex-1 flex flex-col items-center  ">
        <img id="card-2-img" className="flex-5 bg-cover bg-center bg-no-repeat" src={srcUrlArr[1]?.img}></img>
        <h2 id="card-2-title" className="font-sans text-4xl flex-1 ">{srcUrlArr[1]?.title}</h2>
      </div>
    </>
  );
}

export function CardThree({ srcUrlArr }) {
  return (
    <>
      <div id="card-3" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-3-img" className="flex-5" src={srcUrlArr[2]?.img}></img>
        <h2 id="card-3-title" className="font-sans text-4xl flex-1 ">
          {srcUrlArr[2]?.title}
        </h2>
      </div>
    </>
  );
}

export function CardFour({ srcUrlArr }) {
  return (
    <>
      <div id="card-4" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-4-img" className="flex-5" src={srcUrlArr[3]?.img}></img>
        <h2 id="card-4-title" className="font-sans text-4xl flex-1 ">
          {srcUrlArr[3]?.title}
        </h2>
      </div>
    </>
  );
}
export function CardFive({ srcUrlArr }) {
  return (
    <>
      <div id="card-5" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-5-img" className="flex-5" src={srcUrlArr[4]?.img}></img>
        <h2 id="card-5-title" className="font-sans text-4xl flex-1 ">
          {srcUrlArr[4]?.title}
        </h2>
      </div>
    </>
  );
}
export function CardSix({ srcUrlArr }) {
  return (
    <>
      <div id="card-6" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-6-img" className="flex-5" src={srcUrlArr[5]?.img}></img>
        <h2 id="card-6-title" className="font-sans text-4xl flex-1 ">{srcUrlArr[5]?.title}</h2>
      </div>
    </>
  );
}
export function CardSeven({ srcUrlArr }) {
  return (
    <>
      <div id="card-7" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-7-img" className="flex-5" src={srcUrlArr[6]?.img}></img>
        <h2 id="card-7-title" className="font-sans text-4xl flex-1 ">{srcUrlArr[6]?.title}</h2>
      </div>
    </>
  );
}
export function CardEight({ srcUrlArr }) {
  return (
    <>
      <div id="card-8" className="border-2 border-white flex-1 flex flex-col items-center ">
        <img id="card-8-img" className="flex-5" src={srcUrlArr[7]?.img}></img>
        <h2 id="card-8-title" className="font-sans text-4xl flex-1 ">{srcUrlArr[7]?.title}</h2>
      </div>
    </>
  );
}
