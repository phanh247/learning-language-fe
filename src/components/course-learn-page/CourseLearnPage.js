import React from 'react';
import CourseLearnNavbar from '../navbar/CourseLearnNavbar';
import CourseLearnDashboard from './CourseLearnDashboard';
import CourseLearnSidebar from '../side-navbar/CourseLearnSidebar';
import CourseLearnContent from './CourseLearnContent';

const CourseLearnPage = () => {
    
    return (
        <div className='course-learn'>
            <CourseLearnNavbar />
            {/* <CourseLearnDashboard /> */}
            <div className="course-learn__container flex">
                <CourseLearnSidebar />
                <CourseLearnContent />
            </div>
        </div>
    );
};

export default CourseLearnPage;