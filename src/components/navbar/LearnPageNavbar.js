import React from 'react';
import ChinaFlag from '../../images/china-flag.svg';
import Diamond from '../../images/diamond.svg';
import Heart from '../../images/heart.svg';
import Energy from '../../images/energy.svg';
import User from '../../images/user.svg';
import JapanFlag from '../../images/japan-flag.svg';
import SpainFlag from '../../images/spain-flag.svg';

const LearnPageNavbar = () => {
    return (
        <div className='learn-page-navbar w-5/6 absolute right-0'>
            <ul className="learn-page-navbar__nav-list flex items-center justify-end px-12 py-6">
                <li className="learn-page-navbar__nav-item relative">
                    <img src={ChinaFlag} alt="" />
                    <div className="learn-page-navbar__flag-list-container">
                        <ul className="learn-page-navbar__flag-list">
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    <img src={JapanFlag} alt="" /> 
                                </a>
                            </li>
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    <img src={SpainFlag} alt="" />
                                </a>
                            </li>
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={Diamond} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={Heart} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={Energy} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={User} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default LearnPageNavbar;