import React from 'react';
import CourseLearnDashboardSidebar from '../side-navbar/CourseLearnDashboardSidebar';
import CourseLearnDashboardContent from './CourseLearnDashboardContent';
import CourseLearnDashboardGoal from './CourseLearnDashboardGoal';

const CourseLearnDashboard = () => {
    return (
        <div className='course-learn-dashboard flex justify-between'>
            <CourseLearnDashboardSidebar />
            <CourseLearnDashboardContent />
            <CourseLearnDashboardGoal />
        </div>
    );
};

export default CourseLearnDashboard;