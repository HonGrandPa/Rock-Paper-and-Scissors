import React from 'react'
import { Link } from 'react-router-dom'

const Game = () => {
  return (
    <div className="max-w-lg mx-auto flex flex-col justify-center items-center min-h-screen">
      <div className="flex gap-5 mt-5 flex-wrap">
        <h2 className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-blue-300">✊</h2>
        <h2 className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-red-300">✌️</h2>
        <h3 className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-green-300">✋</h3>
      </div>
    </div>
  )
}

export default Game
