const Button = ({ setDice, randomDice }) => {
  const handleClick  = () => {
    setDice(randomDice());
  };

  return (
    <button className="bg-brand-500 py-2 px-8 rounded-3xl text-brand-200 font-bold text-3xl hover:bg-brand-700" onClick={handleClick}>
      Roll
    </button>
  )
}

export default Button