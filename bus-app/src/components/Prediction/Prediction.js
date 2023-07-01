import React, { useState, useEffect } from 'react';
import './Prediction.css'
import { checkBoard, calculateProbability } from './PredictionUtils';

const Prediction = ({ deck, board, position }) => {

    const isBoardFilled = checkBoard(board);
    const [high, equal, low] = isBoardFilled ? calculateProbability(deck, board, position) : [null, null, null];
    return (
        <div className='prediction'>
            <div className='text'>
                <p style={{color: '#ec6264'}}>High bet: ~{high !== null ? high.toFixed(1) : ''}%</p> |
                <p style={{color: '#ffffff'}}>Equal bet: ~{equal !== null ? equal.toFixed(1) : ''}%</p> |
                <p style={{color: '#ffce54'}}>Low bet: ~{low !== null ? low.toFixed(1) : ''}%</p></div>
            <div className='bar'>
                { high && high > 0 ? <div className='part high' style={{width: `${high}%`}} /> : null }
                { equal && equal > 0 ? <div className='part equal' style={{width: `${equal}%`}} /> : null }
                { low && low > 0 ? <div className='part low' style={{width: `${low}%`}} /> : null }
            </div>
        </div>
    )
}

export default Prediction