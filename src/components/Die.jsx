const Die = ({ value, isHeld, id, holdDie }) => {
  const handleClick = (e) => {
    holdDie(e.target.id);
  };

  return (
    <button className={`rounded-lg w-11 h-11 shadow-xl text-xl font-semibold border-b-4  border-r-2 border-slate-200 lg:w-16 lg:h-16 ${isHeld ? "bg-accent" : "bg-brand-200"}`} id={id}
    onClick={handleClick}>
      {value}
    </button>
  )
}

export default Die