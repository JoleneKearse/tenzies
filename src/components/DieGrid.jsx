import { useState } from "react";
import Die from "./Die"

const DieGrid = () => {
  
  const [dice, setDice] = useState(randomDice())
  function randomDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  return (
    <article className="grid grid-cols-5 grid-rows-[auto_auto] gap-10 mx-auto my-24 justify-items-center items-center">
      {dice.map((die, index) => (
        <Die key={index} value={die} />
      ))}
    </article>
  )
}

export default DieGrid