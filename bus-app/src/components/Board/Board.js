import React, { useState, useEffect } from 'react';
import Slot from '../Slot/Slot';
import { figures } from '../../consts/Figures';
import './Board.css';

const Board = ({ board, active }) => {
    return (
        <div className='board'>
            { board.map((e, i) => {
                return <Slot key={i} value={e} figure={figures[e]} active={active === i} />
            })}
        </div>
    )
}

export default Board;