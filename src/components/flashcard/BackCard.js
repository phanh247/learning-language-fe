import React from 'react';
import '../flashcard/Flashcard.css';

const BackCard = ({ cardData }) => {
    
    const image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjEaM6ETRFsaCy3bC-Wyhwh7rLxtwuXnBM96Z3sZHwNmMjaWZDBlj8DFzEE2Q-_n1JZmKnNhVTO6nIAVwT5ek6a_RHiWAzXH-rBVampsdesu5aXjRLXR4ILNlFptdydrxRyfNP70xaEEv8/s400/cat_kotatsu_neko.png"

    return (
        <div className='back-card flex flex-col justify-between items-stretch py-[50px]'>
            <div className="new-word text-5xl mx-auto my-0">
                {cardData.term}
            </div>
            <hr className='ml-[50px] mr-[50px] border-2' />         
            <div className="back-card__content flashcard-content">
                <div className="back-card__text text-left flex-wrap w-[60%]">
                    <p className="back-card__word-type italic">{cardData.wordType}</p>
                    <p className="back-card__ipa">{cardData.api}</p>
                    <p className='back-card__definition mt-2'>{cardData.definition}</p>
                    <p className="back-card__example italic mt-2">Example: {cardData.example}</p>
                    <p className="back-card__synonym mt-4">synonym1, synonym2</p>
                </div>

                <div className="back-card__img">
                    <img className='w-60' src={image} alt="" />
                </div>
            </div> 
        </div>
    );
};

export default BackCard;