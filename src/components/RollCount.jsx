import React from 'react'

const RollCount = ({ tenzies, rollCount }) => {
  return (
    <article>
      {tenzies && <p className="text-center text-2xl text-balance text-center text-brand-50 bg-brand-400 py-5 px-7 rounded-lg shadow-lg font-medium">You got tenzies in {rollCount} rolls!</p>}
    </article>
  )
}

export default RollCount