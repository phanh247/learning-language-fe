import React from 'react';
import CoursePageNavbar from '../navbar/CoursePageNavbar';
import CourseDetailsSidebar from './CourseDetailsSidebar';
import CourseDetailsContent from './CourseDetailsContent';

const CourseDetailsPage = () => {
    return (
        <div className='course-details-page'>
            <CoursePageNavbar />
            <div className="course-details-page__content-container flex px-[7%] py-[3%]">
                <CourseDetailsContent />
                <CourseDetailsSidebar />
            </div>
        </div>
    );
};

export default CourseDetailsPage;