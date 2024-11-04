const Die = ({ value, isHeld, id, holdDie, isAnimating }) => {
  const handleClick = () => {
    holdDie(id);
  };
  const setBackgroundImage = (value) => {
    switch (value) {
      case 1:
        return "bg-die1white";
      case 2:
        return "bg-die2white";
      case 3:
        return "bg-die3white";
      case 4:
        return "bg-die4white";
      case 5:
        return "bg-die5white";
      case 6:
        return "bg-die6white";
    }
  };
  const setHeldBackgroundImage = (value) => {
    switch (value) {
      case 1:
        return "bg-die1black";
      case 2:
        return "bg-die2black";
      case 3:
        return "bg-die3black";
      case 4:
        return "bg-die4black";
      case 5:
        return "bg-die5black";
      case 6:
        return "bg-die6black";
    }
  };

  return (
    <button
      className={`rounded-lg w-11 h-11 shadow-2xl text-xl font-semibold bg-center bg-cover lg:w-16 lg:h-16 ${isHeld ? setHeldBackgroundImage(value) : setBackgroundImage(value)} ${isAnimating && !isHeld ? "animate-scale" : ""}`}
      id={id}
      onClick={handleClick}
      aria-label={`Die with a value of ${value}`}
    >
      <span className="sr-only">{value}</span>
    </button>
  )
}

export default Die;