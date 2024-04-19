import React from 'react';

const CourseDetailsCertification = () => {
    return (
        <div className='course-details-certification border rounded-xl text-left p-4 relative'>
            <h2 className='course-details-goal__title font-bold text-xl mb-5'>Earn a career certificate</h2>
            <p className='text-sm mb-3'>Add this credential to your LinkedIn profile, resume, or CV</p>
            <p className='text-sm'>Share it on social media and in your performance review</p>
            <div className="course-details-certification__img">
                <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713500192/Phanh/iLinguist-certificate_rlg3n9.png" alt="" className='w-1/4 shadow-xl absolute top-1/2 right-[50px] -translate-y-1/2' />
            </div>
        </div>
    );
};

export default CourseDetailsCertification;