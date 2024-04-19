import React from 'react';
import CourseDetailsIntro from './CourseDetailsIntro';
import CourseDetailsGoal from './CourseDetailsGoal';
import CourseDetailsLessonList from './CourseDetailsLessonList';
import CourseDetailsCertification from './CourseDetailsCertification';

const CourseDetailsContent = () => {
    return (
        <div className='course-details-content w-4/6'>
            <div className="course-details-content__intro text-left mb-20">
                <CourseDetailsIntro />
            </div>
            
            <div className="course-details-content__goal mb-20">
                <CourseDetailsGoal />
            </div>

            <div className="course-details-content__certificate mb-20">
                <CourseDetailsCertification />
            </div>

            <div className="course-details-content__lessons-list mb-20">
                <CourseDetailsLessonList />
            </div>

            <div className="course-details-content__requirement mb-20 text-left">
                <h2 className='course-details-goal__title font-bold text-xl mb-5'>Requirements</h2>
                <ul className="requirement-list list-disc ml-5">
                    <li className="requirement-item">
                        Access to a computer with an internet connection.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CourseDetailsContent;