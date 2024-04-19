import React from 'react';
import RecommendedCourseCard from './RecommendedCourseCard';

const RecommendedCourseList = () => {
    return (
        <div className='recommended-course-list'>
            <h2 className='recommended-course-list__title font-bold text-2xl mb-5 text-left'>Recommended courses for you</h2>

            <div className="recommended-course-list__list grid grid-cols-5 gap-x-3 gap-y-3">
                <RecommendedCourseCard />
                <RecommendedCourseCard />
                <RecommendedCourseCard />
                <RecommendedCourseCard />
                <RecommendedCourseCard />
            </div>
            
        </div>
    );
};

export default RecommendedCourseList;