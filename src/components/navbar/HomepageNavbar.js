import React from 'react';

const HomepageNavbar = () => {
    return (
        <div className='homepage-navbar fixed w-full h-[100px] z-10 flex items-center justify-between px-12 py-6'>
            <div className="homepage-navbar__left">
                <ul className="homepage-navbar__nav-list flex items-center justify-between">
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__logo-link font-bold text-2xl">iLinguist</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__learn-link">Learn</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__courses-link">Courses</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__community-link">Community</a>
                    </li>
                </ul>
            </div>
            <div className="homepage-navbar__right">
                <ul className="homepage-navbar__btn-list flex items-center">
                    <li className="homepage-navbar__btn-item">
                        <button className='homepage-navbar__login-btn border-solid border-[1px] border-[#667abe]'>Login</button>
                    </li>
                    <li className="homepage-navbar__btn-item">
                        <button className='homepage-navbar__signup-btn bg-[#667abe] text-white'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomepageNavbar;