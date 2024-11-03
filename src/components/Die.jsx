const Die = ({ value, isHeld, id, holdDie }) => {
  const handleClick = () => {
    holdDie(id);
  };

  return (
    <button
      className={`rounded-lg w-11 h-11 shadow-xl text-xl font-semibold border-b-4 border-r-2 lg:w-16 lg:h-16 ${isHeld ? "bg-accent border-brand-500" : "bg-brand-200 border-slate-200"}`}
      id={id}
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default Die