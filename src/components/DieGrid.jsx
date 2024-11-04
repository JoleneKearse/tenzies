import Die from "./Die"
import ConfettiExplosion from "react-confetti-explosion";

const DieGrid = ({ dice, holdDie, tenzies }) => {
  return (
    <article className="grid grid-cols-5 grid-rows-[auto_auto] gap-10 mx-auto mb-6 justify-items-center items-center">
      {dice.map((die) => (
        <Die
          key={die.id}
          value={die.value}
          isHeld={die.isHeld}
          holdDie={holdDie}
          id={die.id}
        />
      ))}
      {tenzies &&
        <ConfettiExplosion
          force={.8}
          duration={3000}
          particleCount={250}
          height={'300vh'}
          width={1600}
          colors={
            [
              "#481CA6",
              "#b9008e",
              "#f42c6c",
              "#ff774f",
              "#ffba49",
              "#f9f871",
              "#00d2b1",
              "#885EE4"

            ]}
        />}
    </article>
  )
}

export default DieGrid