export default function Score({ scoreCounter, setScoreCounter }) {
  return (
    <div id="score-container" className=" font-sans row-start-1 col-start-8 col-end-11" >
      <h1 id="score" className=" text-lg text-gray-50">
        {' Current Score :' + scoreCounter}
      </h1>
    </div>
  );
}
