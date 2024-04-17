import React from 'react';
import '../course-page/CoursePage.css';
import HomepageNavbar from '../navbar/HomepageNavbar';
import CourseList from './CourseList';
import CourseHeader from './CourseHeader';
import CoursePageNavbar from '../navbar/CoursePageNavbar';

const CourseHomepage = () => {
    return (
        <div className='course-homepage'>
            <CoursePageNavbar />
            <CourseHeader />
            <CourseList />
        </div>
    );
};

export default CourseHomepage;