import React from 'react';
import '../course-page/CoursePage.css';
import CourseHeader from './CourseHeader';
import CoursePageNavbar from '../navbar/CoursePageNavbar';
import CourseFilter from './CourseFilter';
import CourseListContent from './CourseListContent';
import Footer from '../landing-page/Footer';

const CourseHomepage = () => {
    return (
        <div className='course-homepage'>
            <CoursePageNavbar />
            <CourseHeader />
            <div className="body flex">
                <CourseFilter />
                <CourseListContent />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default CourseHomepage;