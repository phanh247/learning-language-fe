import React from 'react';
import "../flashcard/Flashcard.css";

const FlashcardHeader = () => {
    return (
        <div className='flashcard-header p-3'>
            <button className='c-button rounded-full'><i className="fa-solid fa-xmark"></i></button>
        </div>
    );
};

export default FlashcardHeader;