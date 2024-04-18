import React from 'react';

const CategorySecondLevelSubNav = () => {
    return (
        <div className='category-second-level-sub-nav absolute top-7 left-[250px] w-[250px] '>
            <ul className='category-first-level__list bg-white shadow-md p-2 text-left'>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">English</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Simplified Chinese</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">Japanese</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">German</a>
                </li>
                <li className='category-first-level__list-item mb-4'>
                    <a href="">French</a>
                </li>
                <li className='category-first-level__list-ite mb-4'>
                    <a href="">Spanish</a>
                </li>
                <li className='category-first-level__list-ite mb-4'>
                    <a href="">Traditional Chinese</a>
                </li>
                <li className='category-first-level__list-ite mb-4'>
                    <a href="">Korean</a>
                </li>
                <li className='category-first-level__list-ite mb-4'>
                    <a href="">Vietnamese</a>
                </li>
            </ul>
        </div>
    );
};

export default CategorySecondLevelSubNav;