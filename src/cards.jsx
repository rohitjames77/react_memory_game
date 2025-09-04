export default function Cards({ scoreCounter, setScoreCounter }) {
  return (
    <div
      id="card-parent-container"
      className=" row-start-3 row-end-10 col-start-2 col-end-10 flex flex-col 
gap-4"
    >
      <div id="card-container1" className=" flex flex-row flex-1 gap-4">
        <div id="card-1" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-1-img" className="flex-5"></img>
          <h2 id="card-1-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-2" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-2-img" className="flex-5"></img>
          <h2 id="card-2-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-3" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-3-img" className="flex-5"></img>
          <h2 id="card-3-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-4" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-4-img" className="flex-5"></img>
          <h2 id="card-4-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
      </div>
      <div id="card-container2" className=" flex flex-row flex-1 gap-4">
        <div id="card-5" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-5-img" className="flex-5"></img>
          <h2 id="card-5-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-6" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-6-img" className="flex-5"></img>
          <h2 id="card-6-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-7" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-7-img" className="flex-5"></img>
          <h2 id="card-7-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
        <div id="card-8" className="border-2 border-white flex-1 flex flex-col items-center ">
          <img id="card-8-img" className="flex-5"></img>
          <h2 id="card-8-title" className="font-sans text-4xl flex-1 ">
            {'SYRAX'}
          </h2>
        </div>
      </div>
    </div>
  );
}
