import React from 'react';

const CoursePageNavbar = () => {
    return (
        <div className='course-page-navbar'>
            <ul className="course-page-navbar__list flex justify-between items-center px-10 py-5">
                <li className="course-page-navbar__list-item">
                    <a href="" className='course-page-navbar__logo-link'>iLinguist</a>
                </li>
                <li className="course-page-navbar__list-item">
                    Categories
                </li>
                <li className="course-page-navbar__list-item">
                    <input type="search" name="" id="" placeholder='Search for courses' className='border-x border-y p-3 rounded-xl ' />
                </li>
                <li className="course-page-navbar__list-item">
                    <a href="" className="course-page-navbar__teaching-link">Teaching on iLinguist</a>
                </li>
                <li className="course-page-navbar__list-item">
                    <a href="" className='course-page-navbar__cart-link'><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                <li className="homepage-navbar__btn-item">
                        <button className='homepage-navbar__login-btn border-solid border-[1px] border-[#667abe] py-[10px] px-[30px] rounded-[50px] my-0 mx-auto w-[120px]'>Login</button>
                </li>
                <li className="homepage-navbar__btn-item">
                    <button className='homepage-navbar__signup-btn bg-[#667abe] text-white py-[10px] px-[30px] rounded-[50px] my-0 mx-auto w-[120px]'>Sign Up</button>
                </li>
            </ul>
        </div>
    );
};

export default CoursePageNavbar;