import React, { useState } from 'react';
import "../flashcard/Flashcard.css";

const FlashcardFooter = ({ toggleShowButton }) => {
    
    return (
        <div className='flashcard-footer navigation bg-[#99bc85] flex justify-between items-center p-3 rounded-br-[5px] rounded-bl-[5px]'>
            <button className='c-button'>Prev</button>
            <button className='c-button' onClick={toggleShowButton}>Show</button>
            <button className='c-button'>Next</button>
        </div>
    );
};

export default FlashcardFooter;