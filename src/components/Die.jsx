const Die = ({ value, isHeld, id, holdDie }) => {
  const handleClick = () => {
    console.log("clicked");
    // holdDie();
  };

  return (
    <button className={`rounded-lg w-16 h-16 shadow-xl text-xl font-semibold ${isHeld ? "bg-accent" : "bg-brand-200"}`} id={id}
    onClick={handleClick}>
      {value}
    </button>
  )
}

export default Die