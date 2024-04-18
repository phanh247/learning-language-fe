import React from 'react';
const LearnPageNavbar = () => {
    return (
        <div className='learn-page-navbar w-5/6 absolute right-0'>
            <ul className="learn-page-navbar__nav-list flex items-center justify-end px-12 py-6">
                <li className="learn-page-navbar__nav-item learn-page-nav__course relative">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415316/Phanh/china-flag_kcgdqi.svg'} alt="" />
                    <div className="learn-page-navbar__flag-list-container c-shadow">
                        <ul className="learn-page-navbar__flag-list">
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415327/Phanh/japan-flag_q0f5ua.svg'} alt="" /> 
                                    <span className='block'>Japanese</span>
                                </a>
                            </li>
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415336/Phanh/spain-flag_awcf9g.svg'} alt="" />
                                    <span className='block'>Spanish</span>
                                </a>
                            </li>
                            <li className="learn-age-navbar__flag-item">
                                <a href="">
                                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415334/Phanh/plus_z4syso.svg'} alt="" />
                                    <span className='block text-[14px]'>Add new course</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415334/Phanh/plus_z4syso.svg'} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415323/Phanh/heart_mbhet8.svg'} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415318/Phanh/energy_h56vul.svg'} alt="" />
                </li>
                <li className="learn-page-navbar__nav-item">
                    <img src={'https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415345/Phanh/user_xi4apw.svg'} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default LearnPageNavbar;