import { useState } from 'react';
import './App.css';
import get_move from './AI'

let turn = "X";

function updateTurn() {
  turn = (turn == "X") ? "O" : "X";
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    if (squares[index] != null) {
      return;
    } else {
      const newSquares = [...squares];
      newSquares[index] = turn;
      updateTurn();
      setSquares(newSquares);
      get_move(squares, 0);
    }
  }

  return (
    <>
      <div className="board-row">
        <button className="square-large" onClick={() => handleClick(0)}>{squares[0]}</button>
        <button className="square-large" onClick={() => handleClick(1)}>{squares[1]}</button>
        <button className="square-large" onClick={() => handleClick(2)}>{squares[2]}</button>
      </div>
      <div className="board-row">
        <button className="square-large" onClick={() => handleClick(3)}>{squares[3]}</button>
        <button className="square-large" onClick={() => handleClick(4)}>{squares[4]}</button>
        <button className="square-large" onClick={() => handleClick(5)}>{squares[5]}</button>
      </div>
      <div className="board-row">
        <button className="square-large" onClick={() => handleClick(6)}>{squares[6]}</button>
        <button className="square-large" onClick={() => handleClick(7)}>{squares[7]}</button>
        <button className="square-large" onClick={() => handleClick(8)}>{squares[8]}</button>
      </div>
    </>
  );
}