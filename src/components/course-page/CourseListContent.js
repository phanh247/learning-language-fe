import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CourseListContent = () => {
    return (
        <div className='course-list-content w-4/5 p-[3%]'>
            <div className="course-list-content__container grid grid-cols-3 gap-x-3 gap-y-10 justify-items-center">
                <CourseCard />     
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                
            </div>
        </div>
    );
};

export default CourseListContent;