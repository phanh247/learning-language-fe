import React from 'react';
import CategoryFirstLevelSubNav from './CategoryFirstLevelSubNav';
import CategorySecondLevelSubNav from './CategorySecondLevelSubNav';

const CategorySubNav = () => {
    return (
        <div className='category-sub-nav relative'>
            <CategoryFirstLevelSubNav />    
            <CategorySecondLevelSubNav />
        </div>
    );
};

export default CategorySubNav;