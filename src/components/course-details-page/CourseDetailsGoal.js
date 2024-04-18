import React from 'react';

const CourseDetailsGoal = () => {
    return (
        <div className='course-details-goal border rounded-xl mt-20 text-left p-4'>
            <h2 className='course-details-goal__title font-bold text-xl mb-5'>What you will learn</h2>
            
            <ul className='goal-list grid grid-cols-2 gap-x-7 gap-y-7 text-sm'>
                <li className="goal-item">
                    <p className=''><span><i class="fa-solid fa-check"></i></span> The #1 Chinese Course. Start speaking real, grammatically correct Chinese fluently, effortlessly and confidently today.</p>
                </li>
                <li className="goal-item">
                    <p className=''><span><i class="fa-solid fa-check"></i></span> Be confident regarding your Chinese skills (A1, A2, A2+ levels) by lots of practice after every lesson. Understand and use familiar everyday expressions.</p>
                </li>
                <li className="goal-item">
                    <p className=''><span><i class="fa-solid fa-check"></i></span> By the end of the course, you will build and develop your practical communication skills in Chinese speaking, writing, reading and, of course, your fluency and grammatical accuracy.</p>
                </li>
                <li className="goal-item">
                    <p className=''><span><i class="fa-solid fa-check"></i></span> Improve your listening and Chinese comprehension skills through ear training and visual learning thanks to the native Chinese speaking teacher, interactive board, subtitles and included .pdf materials.</p>
                </li>
                <li className="goal-item">
                    <p className=''><span><i class="fa-solid fa-check"></i></span> Reach your Chinese language goals now and in the future, increasing your opportunities for both personal and professional success.</p>
                </li>
            </ul>
 
        </div>
    );
};

export default CourseDetailsGoal;