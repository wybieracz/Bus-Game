import React, { useState, useEffect } from 'react';
import './Slot.css';

const Slot = ({ value, figure, active }) => {
    return (
        <div className={`slot${value !== null ? "" : " empty"}${active ? " active" : ""}`}>
            {figure ? figure : ""}
        </div>
    )
}

export default Slot;