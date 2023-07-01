import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = ({ id, figure, disabled, handleClick }) => {
    return (
        <button className='card' disabled={disabled} onClick={() => handleClick(id)}>
            {figure}
        </button>
    )
}

export default Card