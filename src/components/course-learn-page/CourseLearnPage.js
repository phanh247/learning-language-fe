import React from 'react';
import CourseLearnNavbar from '../navbar/CourseLearnNavbar';
import CourseLearnDashboard from './CourseLearnDashboard';

const CourseLearnPage = () => {
    
    return (
        <div className='course-learn'>
            <CourseLearnNavbar />
            <CourseLearnDashboard />
        </div>
    );
};

export default CourseLearnPage;