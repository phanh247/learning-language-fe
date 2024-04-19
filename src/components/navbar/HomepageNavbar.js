import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonNavbar from "./ButtonNavbar";
import { AuthContext } from "../context/AuthProvider";

const HomepageNavbar = () => {
  const { user, loginProcess, logout } = useContext(AuthContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = scrollPosition > 100 ? "#fbdf00" : "transparent";
  const boxShadow =
    scrollPosition > 100 ? "10px 10px 20px rgba(0, 0, 0, 0.2)" : "none";
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="homepage-navbar fixed w-full h-[100px] z-10 flex items-center justify-between px-12 py-6"
      style={{ backgroundColor, boxShadow }}
    >
      <div className="homepage-navbar__left">
        <ul className="homepage-navbar__nav-list flex items-center justify-between">
          <li className="homepage-navbar__nav-item">
            <Link
              to="/"
              className="homepage-navbar__logo-link font-bold text-2xl"
            >
              iLinguist
            </Link>
          </li>
          <li className="homepage-navbar__nav-item">
            <Link to="/learn" className="homepage-navbar__learn-link">
              Learn
            </Link>
          </li>
          <li className="homepage-navbar__nav-item">
            <Link to="/course" className="homepage-navbar__courses-link">
              Courses
            </Link>
          </li>
          <li className="homepage-navbar__nav-item">
            <Link to="/community" className="homepage-navbar__community-link">
              Community
            </Link>
          </li>
        </ul>
      </div>
      <div className="homepage-navbar__right">
        {user == null ? <ButtonNavbar /> : null}
      </div>
    </div>
  );
};

export default HomepageNavbar;
