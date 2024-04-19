import React from 'react';
import CoursePageNavbar from '../navbar/CoursePageNavbar';
import CourseDetailsSidebar from './CourseDetailsSidebar';
import CourseDetailsContent from './CourseDetailsContent';
import RecommendedCourseList from './RecommendedCourseList';
import Footer from '../landing-page/Footer';

const CourseDetailsPage = () => {
    return (
        <div className='course-details-page'>
            <CoursePageNavbar />
            
            <div className="course-details-page__body px-[7%] py-[3%]">
                <div className="course-details-page__content-container flex">
                    <CourseDetailsContent />
                    <CourseDetailsSidebar />
                </div>

                <div className="course-details-page__recommended-courses mb-20">
                    <RecommendedCourseList />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CourseDetailsPage;