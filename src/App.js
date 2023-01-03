import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation]=useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  
    
  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if(treasureLocation === clickedSquare){
      updateBoard[treasureLocation] = "💎"
      setBoard(updateBoard)
    }
    else if (bombLocation === clickedSquare) {
      updateBoard[bombLocation] = "💣"
      setBoard(updateBoard)
    }
    else
    updateBoard[clickedSquare] = "🌲"
    setBoard(updateBoard)
  } 

  
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return (
          <Square square = {square} 
          index = {index} 
          handleGamePlay={handleGamePlay} />    
          
        )
      })}
      </div>


      
    </>
  )
}

export default App
