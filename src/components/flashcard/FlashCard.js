import React, { useState, useEffect } from 'react';
import FrontCard from './FrontCard';
import '../flashcard/Flashcard.css';
import BackCard from './BackCard';
import FlashcardHeader from './FlashcardHeader';
import FlashcardFooter from './FlashcardFooter';
import axios from 'axios';

// const getFlashCard = () => {
//     return axios
//     .get('http://localhost:8080/English/card-3')
//     .then((response) =>  {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

const FlashCard = () => {
    // 1. enabling state: useState(initialize value)
    // 2. initializing value: useState(false) -> boolean, number, string, undefined, null, object, array
    // 3. reading state: const a = useState(false)
    // 4. updating state: [false, f] f-> update state

    const [showBackCard, setShowBackCard] = useState(false);
    const toggleShowButton = () => {
        setShowBackCard(prevState => !prevState);
    }

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        axios
        .get('http://localhost:8080/English/card-3')
        .then(function (response) {
            console.log(response.data)
            setCardData(response.data);
        
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    return (
        <div className='flashcard flex flex-col justify-between items-stretch'>
            <FlashcardHeader />
            {showBackCard ? <BackCard cardData={cardData} /> : <FrontCard cardData={cardData} />}
            <FlashcardFooter toggleShowButton={toggleShowButton} />
        </div>
    );
};

export default FlashCard;