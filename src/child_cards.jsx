// import { useEffect } from "react";
export function Child_Card({ srcUrlArr ,createShuffledSrcArr,setSrcUrlArr,srcObjImg,srcObjTitle}) {
const handleOnClick = () => {
  setSrcUrlArr(createShuffledSrcArr(srcUrlArr));
};


  return (
    <>
      <div
        id="card-1"
        className="border-2 border-white flex-1 flex flex-col items-center cursor-pointer"
        onClick={handleOnClick}
      >
        <img id="card-1-img" className="flex-5 bg-cover" src={srcObjImg} />          
        <h2 id="card-1-title" className="font-sans text-4xl flex-1">
          {srcObjTitle}
        </h2>
      </div>
    </>
  );
}


