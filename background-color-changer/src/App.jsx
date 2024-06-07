import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("cyan");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-orange-100 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setColor("black");
            }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-black hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            type="button"
            onClick={() => {
              setColor("red");
            }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red-500 hover:bg-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => {
              setColor("green");
            }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-500 hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => {
              setColor("blue");
            }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-blue-500 hover:bg-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
