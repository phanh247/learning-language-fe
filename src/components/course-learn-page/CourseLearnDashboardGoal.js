import React from 'react';

const CourseLearnDashboardGoal = () => {
    return (
        <div className='course-learn-dashboard-goal shadow-lg w-1/6 px-5 py-10 h-screen text-left'>
            <div className="dashboard-goal__schedule">
                <h4 className='schedule-title font-bold mb-2'>Schedule</h4>
                <p className='text-sm'>Start date: April 19, 2024</p>
                <p className='text-sm'>Estimated end date: June 9, 2024</p>
            </div>
            <hr className='my-5' />
            <div className="dashboard-goal__upcoming-event">
                <h4 className='upcoming-title font-bold mb-2'>Upcoming</h4>
            </div>
        </div>
    );
};

export default CourseLearnDashboardGoal;