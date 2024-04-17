import React from 'react';
import '../home-page/Homepage.css';
import UKFlag from '../../images/england-flag-round.svg';
import ChinaFlag from '../../images/china-flag-round.svg';
import JapanFlag from '../../images/japan-flag-round.svg';
import SpainFlag from '../../images/spain-flag-round.svg';
import FranceFlag from '../../images/france-flag-round.svg';
import GermanyFlag from '../../images/germany-flag-round.svg';
import VietnamFlag from '../../images/vietnam-flag-round.svg';
import ItalyFlag from '../../images/italy-flag-round.svg';
import KoreaFlag from '../../images/korea-flag-round.svg';
import RussiaFlag from '../../images/rusia-flag-round.svg';
import BrazilFlag from '../../images/brazil-flag-round.svg';
import TaiwanFlag from '../../images/taiwan-flag-round.svg';


const CourseSelection = () => {
    return (
        <div className='course-selection px-[7%] py-[3%]'>
            <h2 className='course-selection__title text-3xl mb-20 font-bold'>Which <span className='text-[#667abe]'>language</span> do you want to learn?</h2>
            
            <div className="course-selection__grid-wrapper grid grid-cols-6 gap-x-2 gap-y-10">
                <div className="course-selection__grid-item">
                    <img src={UKFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>English</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={VietnamFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Vietnamese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={ChinaFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Simplified Chinese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={JapanFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Japanese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={KoreaFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Korean</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={TaiwanFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Traditional Chinese</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={GermanyFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>German</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={SpainFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Spanish</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={FranceFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>French</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={ItalyFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Italian</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={RussiaFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Russian</span>
                </div>
                <div className="course-selection__grid-item">
                    <img src={BrazilFlag} className='w-1/2 my-0 mx-auto cursor-pointer hover:shadow-md ' alt="" />
                    <span className='block font-bold text-lg'>Portuguese</span>
                </div>
                <div className="course-selection__grid-item">
                    
                </div>
            </div>
        </div>
    );
};

export default CourseSelection;