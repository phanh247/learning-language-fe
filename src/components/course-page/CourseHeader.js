import React from 'react';
import ChineseCourseDiscountBanner from '../../images/chinese-course-disocunt-banner.svg';


const CourseHeader = () => {
    
    return (
        <div className='course-header'>
            <div className="course-header__container">
                <div className="course-header__wrapper flex ">
                    <div className="course-header__item">
                        <img src={ChineseCourseDiscountBanner} alt="" className='' />
                    </div>
                    <div className="course-header__item">
                        <img src={ChineseCourseDiscountBanner} alt="" className='' />
                    </div>
                    <div className="course-header__item">
                        <img src={ChineseCourseDiscountBanner} alt="" className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseHeader;