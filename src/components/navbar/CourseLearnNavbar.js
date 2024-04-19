import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const CourseLearnNavbar = () => {
    const navigate = useNavigate();
    return (
        <div className='course-learn-navbar flex justify-between items-center px-10 py-5 h-[80px] bg-[#eed43d]'>
            <div className="course-learn-navbar__left">
                <Link to="/" className="course-page-navbar__logo-link">
                <img
                    src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713419249/Phanh/ilinguist-logo_ddc4w7.svg"
                    alt=""
                    className="w-[150px]"
                />
                </Link>
            </div>

            <div className="course-learn-navbar__middle">
                <input
                type="search"
                name=""
                id=""
                placeholder="Search in course"
                className="border-x border-y p-3 rounded-xl w-[500px]"
                />
            </div>

            <div className="course-learn-navbar__right">
                <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415345/Phanh/user_xi4apw.svg" alt="" className='user-avatar inline-block w-11 h-11 mr-1' />
                <span className='user-name mr-2'>Phanh</span>
                <span className='user-nav'><i class="fa-solid fa-angle-down"></i></span>
            </div>
        </div>
    );
};

export default CourseLearnNavbar;