import React from 'react';
import LearnIcon from '../../images/learn-menu-icon.svg';
import ExerciseIcon from '../../images/exercise-menu-icon.svg';
import ReviewIcon from '../../images/review-menu-icon.svg';
import LeaderBoard from '../../images/leaderboard-menu-icon.svg';
import MoreIcon from '../../images/more-menu-icon.svg';


const LearnPageSideNavbar = () => {
    return (
        <div className='learn-page-side-navbar w-1/6 bg-[#667abe] h-screen z-10'>
            <ul className='learn-page-side-nav__list'>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link text-white text-2xl my-0 mx-auto'>
                        iLinguist
                    </a>
                    
                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={LearnIcon} alt="" />
                        <span className='text-white'>LEARN</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={ExerciseIcon} alt="" />
                        <span className='text-white'>EXERCISE</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={ReviewIcon} alt="" />
                        <span className='text-white'>REVIEW</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={LeaderBoard} alt="" />
                        <span className='text-white'>LEADERBOARD</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={MoreIcon} alt="" />
                        <span className='text-white'>MORE</span>
                    </a>

                </li>
            </ul>
        </div>
    );
};

export default LearnPageSideNavbar;