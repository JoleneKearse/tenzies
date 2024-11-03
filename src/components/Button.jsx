const Button = ({ onClick }) => {

  return (
    <button className="bg-brand-500 py-2 px-8 rounded-3xl text-brand-200 font-bold text-2xl hover:bg-brand-700 md:text-3xl lg:text-4xl" onClick={onClick}>
      Roll
    </button>
  )
}

export default Button