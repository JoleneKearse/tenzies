import Die from "./Die"

const DieGrid = ({ dice, holdDie }) => {
  return (
    <article className="grid grid-cols-5 grid-rows-[auto_auto] gap-10 mx-auto mb-6 justify-items-center items-center">
      {dice.map((die) => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDie={holdDie} id={die.id} />
      ))}
    </article>
  )
}

export default DieGrid