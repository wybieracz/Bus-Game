import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Cards.css';
import { figures } from '../../consts/Figures';

const Cards = ({ deck, handleClick }) => {
    return (
        <div className='cards'>
            { figures.map((e, i) => {
                return <Card key={i} id={i} figure={e} disabled={deck[i] === 0} handleClick={handleClick} />
            })}
        </div>
    )
}

export default Cards;