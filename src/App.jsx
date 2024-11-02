import { useState } from "react";

import { nanoid } from "nanoid";
import DieGrid from "./components/DieGrid";
import Button from "./components/Button";

function App() {
  const [dice, setDice] = useState(randomDice());
  function randomDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  };
  const holdDie = (id) => {
    // setDice((prevDice) =>
    //   prevDice.map((die) =>
    //     die.id === id ? { ...die, isHeld: !die.isHeld } : die
    //   )
    // );
    console.log("clicked");
    console.log(dice.id);
  }

  return (
    <main className="w-5/6 h-5/6 bg-brand-100 rounded-3xl my-32 mx-auto p-10 flex flex-col justify-center items-center">
      <h1 className="text-9xl">Tenzies</h1>
      <DieGrid dice={dice} holdDie={holdDie} />
      <Button setDice={setDice} randomDice={randomDice} />
    </main>
  )
}

export default App
