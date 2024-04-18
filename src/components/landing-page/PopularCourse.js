import React, { useState } from "react";
import "./Homepage.css";
import Barcelona from "../../images/barcelona.svg";
import { Link } from "react-router-dom";

const PopularCourse = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="popular-course px-[7%] py-[3%]">
      <h2 className="course-selection__title text-3xl mb-20 font-bold">
        <span className="text-[#667abe]">Most popular</span> courses on our
        website
      </h2>

      <div className="popular-course__grid-wrapper grid grid-cols-4 gap-x-3 justify-items-center">
        <div className="popular-course__grid-item card bg-white rounded-xl c-shadow w-[300px] h-[450px] overflow-hidden cursor-pointer">
          <img
            src={
              "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415341/Phanh/suzhou_xjhufv.svg"
            }
            alt=""
            className="card__img w-full"
          />
          <div className="card__content px-5 py-5">
            <h4 className="card__title text-left font-bold text-xl mb-2">
              Chinese for Beginner
            </h4>
            <p className="card__text text-left line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquam quasi doloremque officiis qui sit
              accusantium, neque iure soluta laboriosam sunt mollitia,
              praesentium reiciendis eius nostrum accusamus maiores!
              Necessitatibus, dolorum!
            </p>
          </div>
        </div>
        <div className="popular-course__grid-item card bg-white rounded-xl c-shadow w-[300px] h-[450px] overflow-hidden cursor-pointer">
          <img
            src={
              "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415340/Phanh/newyork_azurhu.svg"
            }
            alt=""
            className="card__img w-full"
          />
          <div className="card__content px-5 py-5">
            <h4 className="card__title text-left font-bold text-xl mb-2">
              English for Beginner
            </h4>
            <p className="card__text text-left line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquam quasi doloremque officiis qui sit
              accusantium, neque iure soluta laboriosam sunt mollitia,
              praesentium reiciendis eius nostrum accusamus maiores!
              Necessitatibus, dolorum!
            </p>
          </div>
        </div>
        <div
          className="popular-course__grid-item card bg-white rounded-xl c-shadow w-[300px] h-[450px] overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered && <Link to="/learn">Learn Now</Link>}
          <img
            src={
              "https://res.cloudinary.com/dq5s5fsgk/image/upload/v1713415343/Phanh/tokyo_lscdzs.svg"
            }
            alt=""
            className="card__img w-full"
          />
          <div className="card__content px-5 py-5">
            <h4 className="card__title text-left font-bold text-xl mb-2">
              Japanese for Beginner
            </h4>
            <p className="card__text text-left line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquam quasi doloremque officiis qui sit
              accusantium, neque iure soluta laboriosam sunt mollitia,
              praesentium reiciendis eius nostrum accusamus maiores!
              Necessitatibus, dolorum!
            </p>
          </div>
        </div>
        <div className="popular-course__grid-item card bg-white rounded-xl c-shadow w-[300px] h-[450px] overflow-hidden cursor-pointer">
          <img src={Barcelona} alt="" className="card__img w-full" />
          <div className="card__content px-5 py-5">
            <h4 className="card__title text-left font-bold text-xl mb-2">
              Spanish for Beginner
            </h4>
            <p className="card__text text-left line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus aliquam quasi doloremque officiis qui sit
              accusantium, neque iure soluta laboriosam sunt mollitia,
              praesentium reiciendis eius nostrum accusamus maiores!
              Necessitatibus, dolorum!
            </p>
          </div>
        </div>
      </div>

      <div className="popular-course__btn-container mt-10">
        <button className="popular-course__show-more-btn py-3 px-5 bg-[#fbdf00] text-[#3150aa] font-bold rounded-xl c-shadow">
          {" "}
          <Link to="/course">VIEW MORE COURSES</Link>
        </button>
      </div>
    </div>
  );
};

export default PopularCourse;
