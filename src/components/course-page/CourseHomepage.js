import React from 'react';
import '../course-page/CoursePage.css';
import HomepageNavbar from '../navbar/HomepageNavbar';

const CourseHomepage = () => {
    return (
        <div className='course-homepage'>
            <HomepageNavbar />
            <div className="course-homepage__text-container text-white text-left mx-[10%]">
                <h1 className='course-homepage__title text-5xl font-bold mb-5'>Learn <span className='text-[#ffe81f]'>Chinese</span> and <br /> move forward</h1>
                <p className='course-homepage__intro mb-10'>Explore China culture, step closer to study, work, and live in China by start learning Chinese</p>
                <button className='homepage-btn'>Start learning <i class="fa-solid fa-angles-right"></i></button>
            </div> 
        </div>
    );
};

export default CourseHomepage;