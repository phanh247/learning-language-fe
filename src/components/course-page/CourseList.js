import React from 'react';
import CourseFilter from './CourseFilter';
import CourseListContent from './CourseListContent';

const CourseList = () => {
    return (
        <div className='course-list flex'>
            <CourseFilter />
            <CourseListContent />
        </div>
    );
};

export default CourseList;