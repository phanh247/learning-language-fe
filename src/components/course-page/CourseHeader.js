import React from 'react';
import ChineseCourseBanner from '../../images/chinese-course-banner.svg';

const CourseHeader = () => {
    return (
        <div className='course-header'>
            <div className="course-header__container h-[350px] overflow-hidden relative top-[100px]">
                <img src={ChineseCourseBanner} alt="" className='absolute -top-[9999px] -bottom-[9999px] -left-[9999px] -right-[9999px] m-auto' />
            </div>
        </div>
    );
};

export default CourseHeader;