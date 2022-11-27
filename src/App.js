import React, { useState } from "react";


const App = () => {
  const[counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleClickMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center mt-10 mb-5 text-5xl "> {counter} </div>
      <button className="border-4 border-blue-700 bg-white hover:bg-amber-400 w-60 h-30 mb-2 text-5xl " onClick={handleClick}>Plus</button>
      <button className="border-4 border-amber-400 bg-white hover:bg-blue-700 w-60 h-30 text-5xl" onClick={handleClickMinus}>Minus</button>
    </div>
  )
}

export default App
