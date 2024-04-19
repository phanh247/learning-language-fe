import React, { useContext } from "react";
import CategorySubNav from "../course-page/CategorySubNav";
import { Link, useNavigate } from "react-router-dom";
import ButtonNavbar from "./ButtonNavbar";
import { AuthContext } from "../context/AuthProvider";

const CoursePageNavbar = () => {

  const { user, loginProcess, logout } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="course-page-navbar course-page-navbar__list flex justify-between items-center px-10 py-5 h-[80px] bg-[#eed43d] relative">
      <div className="course-page-navbar__left">
        <ul className="course-page-navbar__list flex justify-between items-center">
          <li className="course-page-navbar__list-item mr-10">
            <Link to="/" className="course-page-navbar__logo-link">
              <img
                src="https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713419249/Phanh/ilinguist-logo_ddc4w7.svg"
                alt=""
                className="w-[150px]"
              />
            </Link>
          </li>
          <li className="course-page-navbar__list-item relative">
            <Link to="/course">Categories</Link>
            <CategorySubNav />
          </li>
        </ul>
      </div>

      <div className="course-page-navbar__middle">
        <ul className="course-page-navbar__list flex justify-between items-center">
          <li className="course-page-navbar__list-item mr-10">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for courses"
              className="border-x border-y p-3 rounded-xl w-[500px]"
            />
          </li>
          <li className="course-page-navbar__list-item">
            <Link to="/course" className="course-page-navbar__teaching-link">
              Teaching on iLinguist
            </Link>
          </li>
        </ul>
      </div>

      <div className="course-page-navbar__right">
        <ul className="course-page-navbar__list flex justify-between items-center">
          <li className="course-page-navbar__list-item mr-10">
            <Link to="/course" className="course-page-navbar__cart-link">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          {user === null ? <ButtonNavbar /> : null} 
        </ul>
      </div>
    </div>
  );
};

export default CoursePageNavbar;
