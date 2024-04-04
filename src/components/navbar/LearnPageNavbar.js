import React from 'react';
import ChinaFlag from '../../images/china-flag.svg';
import Diamond from '../../images/diamond.svg';
import Heart from '../../images/heart.svg';
import Energy from '../../images/energy.svg';
import User from '../../images/user.svg';

const LearnPageNavbar = () => {
    return (
        <div className='learn-page-navbar'>
            <ul className="learn-page-navbar__nav-list flex items-center justify-end px-12 py-6">
                <li className="learn-page-navbar__nav-item">
                    <img src={ChinaFlag} alt="" />
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