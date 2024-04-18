import React from 'react';
import '../learn-pages/LearnPages.css';
import { useNavigate } from "react-router-dom";



const ChoosePathPage = () => {
    const navigate = useNavigate();
    const redirect =()=>{
        navigate("/learn");
    }
    
    return (
        <div className='choose-path-page h-screen relative'>
            <div className="choose-path-page__content c-center">
                <div className="choose-path-page__title text-3xl font-bold mb-10">
                    Choose your path
                </div>
                <div className="choose-path-page__buttons-container flex justify-between items-center">
                        <div className="choose-path-page__button"  onClick={redirect}>
                            <a href="" className='choose-path-page__btn-link'>
                                <img className='choose-path-page__btn-img' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415318/Phanh/choose-path-1_pufcul.svg'} alt="" />
                                <p className='choose-path-page__btn-main-text text-xl font-bold mb-2' >Learn Chinese for the first time</p>
                                <p>Start from scratch!</p>
                            </a>
                        </div>
                    
                        <div className="choose-path-page__button">
                            <a href="" className="choose-path-page__btn-link">
                                <img className='choose-path-page__btn-img' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415316/Phanh/choose-path-2_dwu1c4.svg'} alt="" />
                                <p className='choose-path-page__btn-main-text text-xl font-bold mb-2'>Already known some Chinese?</p>
                                <p>Check your level here!</p>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosePathPage;