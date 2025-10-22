
export function Child_Card({
  srcUrlArr,
  createShuffledSrcArr,
  setSrcUrlArr,
  srcObjImg,
  srcObjTitle,
  id,
  scoreCounter,
  setScoreCounter,
  clickedImg,
  setClickedImg,
  setVisible,

}) {


  const handleOnClick = (event) => {
    event.preventDefault()
    setSrcUrlArr(createShuffledSrcArr(srcUrlArr));
    let eventTargetSrc = event.target.src;
if (clickedImg === eventTargetSrc){
  setVisible(true);
}else{
  setClickedImg(eventTargetSrc)
  setScoreCounter(scoreCounter+1)
}

  };

  return (
    <>
      <div id={id} className="border-2 border-white flex-1 flex flex-col items-center cursor-pointer">
        <img id="card-1-img" className="flex-4 object-contain " src={srcObjImg} onClick={handleOnClick} />
        <h2 id="card-1-title" className="font-sans text-4xl flex-1">
          {srcObjTitle}
        </h2>
      </div>
    </>
  );
}
