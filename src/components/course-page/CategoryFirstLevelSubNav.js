import React from 'react';

const CategoryFirstLevelSubNav = () => {
    return (
        <div className='category-first-level-sub-nav absolute text-left p-2 shadow-md w-[250px] bg-white top-7'>
            <ul className='category-first-level__list'>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Learning Languages</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Learning Skills</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Language Certifications</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Working</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Traveling</a>
                </li>
                <li className='category-first-level__list-ite mb-4'>
                    <a href="">Culture Explore</a>
                </li>
            </ul>
        </div>
        
    );
};

export default CategoryFirstLevelSubNav;