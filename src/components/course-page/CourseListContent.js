import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { CourseData } from '../../sample-data/CourseData';


const CourseListContent = (props) => {
    

    return (
        <div className='course-list-content w-4/5 p-[3%]'>
            <div className="course-list-content__container grid grid-cols-4 gap-x-2 gap-y-10 justify-items-center">
                {CourseData.map((item) => {
                    return (
                        <CourseCard
                        key = {item.id}
                        thumbnail = {item.thumbnail}
                        courseTitle = {item.courseName}
                        author = {item.author}
                        ></CourseCard>
                    )
                })}
                
            </div>
        </div>
        
    );
};

export default CourseListContent;