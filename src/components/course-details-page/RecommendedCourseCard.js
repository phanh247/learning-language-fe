import React from 'react';

const RecommendedCourseCard = () => {
    return (
        <div className='recommended-course-card rounded-xl border rounded-xl overflow-hidden'>
            <div className="recommended-course-card__header">
                <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713502375/Phanh/chinese-for-hsk-1-course_lglezi.svg" alt="" />
            </div>
            
            <div className="recommended-course-card__body p-3 text-left">
                <div className="recommended-course-card__author">
                    <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713502010/Phanh/peking-university-logo_a9df8x.svg" alt="" className='recommended-course-card__avatar w-6 h-6 inline-block mr-2' />
                    <span className='recommended-course-card__author-name text-sm'>Peking University</span>
                </div>
                <h4 className="recommended-course-card__title font-bold text-lg mt-5 line-clamp-2">Chinese for HSK 1</h4>
            </div>
        </div>
    );
};

export default RecommendedCourseCard;