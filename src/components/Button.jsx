const Button = ({ text, onClick }) => {

  return (
    <button className="bg-accent py-2 px-8 rounded-3xl text-brand-50 font-bold text-2xl hover:scale-105 hover:text-brand-100 md:text-3xl lg:text-4xl" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;