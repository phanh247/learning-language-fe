import React from 'react';
import '../home-page/Homepages.css';
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
        <div className='course-selection px-[7%] py-[3%] h-screen'>
            <h2 className='course-selection__title text-3xl mb-20 font-bold'>Which <span className='text-[#667abe]'>language</span> do you want to learn?</h2>
            
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <a href="#" className="group">
                    <div className="">
                        <img src={UKFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">English</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={ChinaFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">Chinese</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={JapanFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">Japanese</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={KoreaFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">Korean</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={SpainFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">Spanish</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={GermanyFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">German</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={FranceFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">French</h3>
                </a>
                <a href="#" className="group">
                    <div className="">
                        <img src={RussiaFlag} alt="UK circle flag" className="h-full w-1/3 object-cover object-center group-hover:opacity-75 my-0 mx-auto" />
                    </div>
                    <h3 className="text-base font-semibold">Russian</h3>
                </a>
            </div>
        </div>
    );
};

export default CourseSelection;