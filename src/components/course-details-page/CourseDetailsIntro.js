import React from 'react';

const CourseDetailsIntro = () => {
    return (
        <div className='course-details-intro'>
            <h1 className='course-details-content__title text-3xl font-bold mb-5'>The Complete Chinese for Beginner</h1>
                
            <p className="course-details-content__desc text-lg mb-5">Learn Chinese like a Professional Start from the basics and go all the way to understand and communicate with Chinese people</p>
            
            <div className="course-details-content__rating mb-5">
                <span className="course-details-content__rating-number font-bold mr-1">4.9</span>
                <span className="course-details-content__rating-icon text-[#eed43d] text-sm mr-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                </span>
                <span className="course-details-content__rating-review mr-3 underline">(500,000 ratings)</span>
                <span className="course-details-content__number-student underline">2,000,000 students</span>
            </div>
            
            <p className="course-details-content__author text-sm mb-5">Created by <span className='course-details-content__author-name underline'>Dr Phanh</span></p>
            
            <div className="course-details-content__other-info text-sm">
                <span className="course-details-content__created-date mr-5"><i class="fa-solid fa-calendar"></i> Lasted updated 4/2024</span>
                <span className="course-details-content__teaching-language mr-5"><i class="fa-solid fa-globe"></i> English</span>
                <span className="course-details-content__support-language"><i class="fa-solid fa-closed-captioning"></i> English, Vietnamese</span>
            </div>
        </div>
    );
};

export default CourseDetailsIntro;