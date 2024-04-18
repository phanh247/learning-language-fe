import React from 'react';
import CourseDetailsIntro from './CourseDetailsIntro';
import CourseDetailsGoal from './CourseDetailsGoal';
import CourseDetailsLessonList from './CourseDetailsLessonList';

const CourseDetailsContent = () => {
    return (
        <div className='course-details-content w-3/4'>
            <div className="course-details-content__intro text-left">
                <CourseDetailsIntro />
            </div>
            
            <div className="course-details-content__goal">
                <CourseDetailsGoal />
            </div>

            <div className="course-details-content__lessons-list">
                <CourseDetailsLessonList />
            </div>
        </div>
    );
};

export default CourseDetailsContent;