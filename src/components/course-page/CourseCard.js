import React from 'react';
import { Link } from 'react-router-dom';


const CourseCard = (props) => {
    return (
        <div className="card w-5/6 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <Link to="/course-details">
                <div className="card-header relative">
                    <img src={props.thumbnail} alt="" className='' />
                    <div className="card-label best-seller-label absolute top-0">BEST SELLER</div>
                </div>
                
                <div className="card-body p-2 flex flex-col justify-between">
                    <div className="card-tags text-left">
                        <span className="beginner-tag">beginner</span>
                        <span className='language-tag'>chinese</span>
                    </div>
                    
                    <div className="card-content flex flex-col justify-between h-[80px] mt-2">
                        <h4 className="card-title font-bold text-left line-clamp-2">{props.courseTitle}</h4>
                        <p className="card-author mt-1 text-left text-sm text-gray-600 line-clamp-1">{props.author}</p>
                    </div>
                    
                </div>
            </Link>
        </div>

    );
};

export default CourseCard;