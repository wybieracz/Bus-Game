import './App.css';
import React, { useCallback, useState, useEffect } from "react";
import Board from './components/Board/Board';
import Cards from './components/Cards/Cards';
import Prediction from './components/Prediction/Prediction';
import { cardClick } from './AppUtils';

export default function App() {
  const [deck, setDeck] = useState(new Array(13).fill(4));
  const [board, setBoard] = useState(new Array(5).fill(null));
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(true);

  const handleCardClick = useCallback((id) => {
    cardClick(id, deck, setDeck, board, setBoard, position, setPosition, direction, setDirection);
  }, [deck, board, position, direction]);
 
  return (
    <div className="App">
      <h2>The Bus Game Prediction</h2>
      <Board board={board} position={position} active={position} />
      <Prediction deck={deck} board={board} position={position}/>
      <Cards deck={deck} handleClick={handleCardClick}/>
      <div className='buttons'>
        <button className='reset' onClick={() => { setPosition(0); setDirection(true) }}>Reset position</button>
        <button className='reset' onClick={() => { setPosition(0); setDirection(true); setDeck(new Array(13).fill(4)); setBoard(new Array(5).fill(null)) }}>
          Reset deck
        </button>
      </div>
      
    </div>
  );
}
