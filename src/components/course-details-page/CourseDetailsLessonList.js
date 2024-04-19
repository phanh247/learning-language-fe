import React from 'react';
import LessonListAccordion from './LessonListAccordion';

const CourseDetailsLessonList = () => {
    return (
        <div className='course-details-lesson-list text-left'>
            <h2 className='course-details-lesson-list__title font-bold text-2xl mb-5'>Course content</h2>

            <LessonListAccordion />
        </div>
    );
};

export default CourseDetailsLessonList;