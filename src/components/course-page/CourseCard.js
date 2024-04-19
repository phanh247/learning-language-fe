import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    return (
        <div className="card w-4/5 shadow-md rounded-xl overflow-hidden cursor-pointer">
            <Link to="/course-details">
                <div className="card-header relative">
                    <img src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713427683/Phanh/beginner-chinese-course_tvxxhu.svg" alt="" className='' />
                    <div className="card-label best-seller-label absolute top-0">BEST SELLER</div>
                </div>
                
                <div className="card-content p-2">
                    <h4 className="card-title font-bold text-lg text-left">The Complete Chinese for Beginner</h4>
                    <div className="card-info flex justify-between items-center">
                        <div className="card-info-detailed mr-2">
                            <div className="card-tags text-left">
                                <span className="beginner-tag">beginner</span>
                                <span className='language-tag'>chinese</span>
                            </div>
                            <p className="card-desc mt-2 line-clamp-2 text-left text-sm">You will learn about basic vocabulary, grammar, sentences, and phonetics</p>
                            <p className="card-author mt-1 text-left text-sm text-gray-600">Dr Phanh</p>
                            <p className="card-rating text-[#eed43d] text-left">
                                    <span className='card-rating-number font-bold text-black mr-1'>4.9</span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star-half-stroke"></i>
                                    <span className='card-rating-number text-xs text-black ml-1'>(99,999)</span>
                            </p>
                            <p className="card-date text-left text-xs mt-2">April 18, 2024</p>
                        </div>

                        <div className="card-price ml-2">
                            <div className="card-old-price text-gray-600 line-through">$99.99</div>
                            <div className="card-discounted-price text-2xl font-bold">$9.99</div>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    );
};

export default CourseCard;