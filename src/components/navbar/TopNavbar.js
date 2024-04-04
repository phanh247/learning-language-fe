import React from 'react';
import '../navbar/Navbar.css';
import LearnIcon from '../../images/learn-icon.png';

const TopNavbar = () => {
    

    return (
        <div className='top-navbar flex flex-col w-full text-lg'>
            <div className="top-navbar__menu">
                <img className='w-10 h-10 inline-block' src={LearnIcon} alt="" />
                <span>iLearn</span>
            </div>
            
            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={LearnIcon} alt="" />
                <span>Learn</span>
            </div>

            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={LearnIcon} alt="" />
                <span>Vocabulary</span>
            </div>

            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={LearnIcon} alt="" />
                <span>Grammar</span>
            </div>

        </div>
    );
};

export default TopNavbar;