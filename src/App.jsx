import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import DieGrid from "./components/DieGrid";
import Button from "./components/Button";

function App() {
  const [dice, setDice] = useState(startingDice());
  const [tenzies, setTenzies] = useState(false);
  const [buttonText, setButtonText] = useState("Roll");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const firstValue = dice[0].value;
    if (dice.every((die) => die.value === firstValue && die.isHeld)) {
      setTenzies(true);
      setButtonText("New Game");
    }
  }, [dice]);

  const restartGame = () => {
    setDice(startingDice());
    setTenzies(false);
    setButtonText("Roll");
  };

  function getRandomDieValue() {
    return Math.ceil(Math.random() * 6);
  }

  function startingDice() {
    return Array.from({ length: 10 }, () => ({
      value: getRandomDieValue(),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const handleClick = () => {
    if (tenzies) {
      restartGame();
    }
    setIsAnimating(true);
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: getRandomDieValue() }
      )
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const holdDie = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  return (
    <main className="w-72 h-4/5 bg-pyramids bg-bottom rounded-3xl my-32 mx-auto p-10 flex flex-col justify-center items-center gap-5 md:w-1/2 md:gap-8 lg:w-2/3 lg:gap-12">
      <h1 className="text-4xl font-black text-brand-800 md:text-5xl lg:text-7xl">Tenzies</h1>
      <p className="max-w-prose text-balance text-center text-brand-50 bg-brand-400 py-5 rounded-lg shadow-lg font-medium">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <DieGrid
        dice={dice}
        holdDie={holdDie}
        tenzies={tenzies}
        isAnimating={isAnimating}
      />🫰
      <Button
        onClick={handleClick}
        buttonText={buttonText}
      />
    </main>
  );
}

export default App;
