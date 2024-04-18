import React from 'react';
import '../navbar/Navbar.css';

const TopNavbar = () => {
    

    return (
        <div className='top-navbar flex flex-col w-full text-lg'>
            <div className="top-navbar__menu">
                <img className='w-10 h-10 inline-block' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415329/Phanh/learn-icon_vaxfmi.png'} alt="" />
                <span>iLearn</span>
            </div>
            
            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415329/Phanh/learn-icon_vaxfmi.png'} alt="" />
                <span>Learn</span>
            </div>

            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415329/Phanh/learn-icon_vaxfmi.png'} alt="" />
                <span>Vocabulary</span>
            </div>

            <div className="top-navbar__learn">
                <img className='w-10 h-10 inline-block' src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415329/Phanh/learn-icon_vaxfmi.png'} alt="" />
                <span>Grammar</span>
            </div>

        </div>
    );
};

export default TopNavbar;