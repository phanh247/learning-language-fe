import React from 'react';


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
                        <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415329/Phanh/learn-icon_vaxfmi.png'} alt="" />
                        <span className='text-white'>LEARN</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415320/Phanh/exercise-menu-icon_u2vf6o.svg'} alt="" />
                        <span className='text-white'>EXERCISE</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415335/Phanh/review-menu-icon_stwstg.svg'} alt="" />
                        <span className='text-white'>REVIEW</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415328/Phanh/leaderboard-menu-icon_yxwoul.svg'} alt="" />
                        <span className='text-white'>LEADERBOARD</span>
                    </a>

                </li>
                <li className='learn-page-side-nav__item'>
                    <a href="" className='learn-page-side-nav__link'>
                        <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415333/Phanh/more-menu-icon_ekmu7d.svg'} alt="" />
                        <span className='text-white'>MORE</span>
                    </a>

                </li>
            </ul>
        </div>
    );
};

export default LearnPageSideNavbar;