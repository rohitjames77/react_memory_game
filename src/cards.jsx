import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, CardSeven, CardEight } from './child_cards';

export default function Cards({ scoreCounter, setScoreCounter }) {
  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col 
gap-4"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <CardFive />
        <CardSix />
        <CardSeven />
        <CardEight />
      </div>
    </div>
  );
}
