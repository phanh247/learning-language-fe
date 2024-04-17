
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const HomepageNavbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      // Add event listener when component mounts
      window.addEventListener('scroll', handleScroll);
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures that this effect runs only once when component mounts
  
    // Determine background color based on scroll position
    const backgroundColor = scrollPosition > 100 ? '#fbdf00' : 'transparent';
    const boxShadow = scrollPosition > 100 ? '10px 10px 20px rgba(0, 0, 0, 0.2)' : 'none';
    const navigate = useNavigate();
    const redirectLogin =()=>{
        navigate("/login");
    }
    return (
        <div className='homepage-navbar fixed w-full h-[100px] z-10 flex items-center justify-between px-12 py-6' style={{ backgroundColor, boxShadow }}>
            <div className="homepage-navbar__left">
                <ul className="homepage-navbar__nav-list flex items-center justify-between">
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__logo-link font-bold text-2xl">iLinguist</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__learn-link">Learn</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__courses-link">Courses</a>
                    </li>
                    <li className="homepage-navbar__nav-item">
                        <a href="" className="homepage-navbar__community-link">Community</a>
                    </li>
                </ul>
            </div>
            <div className="homepage-navbar__right">
                <ul className="homepage-navbar__btn-list flex items-center">
                    <li className="homepage-navbar__btn-item">
                        <button className='homepage-navbar__login-btn border-solid border-[1px] border-[#667abe]' onClick={redirectLogin} >Login</button>
                    </li>
                    <li className="homepage-navbar__btn-item">
                        <button className='homepage-navbar__signup-btn bg-[#667abe] text-white'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomepageNavbar;