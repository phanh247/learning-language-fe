import React from 'react';
import CourseLearnSyllabusAccordion from '../course-learn-page/CourseLearnSyllabusAccordion';

const CourseLearnDashboardSidebar = () => {
    return (
        <div className='course-learn-dashboard-sidebar text-left w-1/6 px-5 py-10 h-screen shadow-lg bg-[#667abe]'>
            
            <div className="dashboard-sidebar__lesson">
                <CourseLearnSyllabusAccordion />
            </div>
            
            <div className="dashboard-sidebar__grade p-4 border-b cursor-pointer">
                Grades
            </div>

            <div className="dashboard-sidebar__note p-4 border-b cursor-pointer">
                Note
            </div>

            <div className="dashboard-sidebar__forum p-4 cursor-pointer">
                Discussion forum
            </div>
            
        </div>
    );
};

export default CourseLearnDashboardSidebar;