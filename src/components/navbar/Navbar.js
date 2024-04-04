import React from 'react';
import '../navbar/Navbar.css';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';

const Navbar = () => {
    return (
        <div className='navbar flex flex-col justify-between items-center bg-[#99bc85] h-screen w-64'>
            <TopNavbar />
            <BottomNavbar />
        </div>
    );
};

export default Navbar;