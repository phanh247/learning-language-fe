import React from 'react';
import '../flashcard/Flashcard.css';

// done
const FrontCard = ({ cardData }) => {
    return (
        <div className='front-card front-card__content flashcard-content'>
            {cardData && (
                <p className='text-5xl mx-auto my-0'>{cardData.term}</p>
            )}
        </div>
    );
};

export default FrontCard;