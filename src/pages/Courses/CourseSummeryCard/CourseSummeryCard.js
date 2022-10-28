import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiClock, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

const CourseSummeryCard = ({ course }) => {
  const {
    cost,
    course_id,
    course_name,
    thumbnail,
    level,
    rating,
    lectures,
    course_title,
    instructor,
    enroll,
    duration,
  } = course;

  return (
    <div className="p-5 hover:shadow-2xl border border-green-500 shadow-md rounded-md">
      <img className="rounded-md h-52 w-full" src={thumbnail} alt="" />
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <img className="mr-2 h-10 w-10" src={instructor.picture} alt="" />
          <p className="text-black">{instructor.name}</p>
        </div>
        <div>
          <p className="bg-green-200 p-2 text-black rounded-md">{level[0]}</p>
        </div>
      </div>
      <h3 className="text-black text-xl font-semibold py-3">{course_title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FiClock className="text-rose-400 mr-0.5" />
          <p className="text-black">{duration}</p>
        </div>
        <div className="flex items-center">
          <FiBookOpen className="text-rose-400 mr-0.5" />
          <p className="text-black">{lectures} Lectures</p>
        </div>
      </div>
      <div className="bg-green-200 p-1.5 rounded-md flex items-center justify-between mt-5">
        <h3 className="text-2xl font-semibold text-green-700">${cost}</h3>
        <div className="flex items-center">
          <span className="text-black font-semibold mr-0.5"> {rating}</span>
          <FaStar className="text-amber-600" />
          <FaStar className="text-amber-600" />
          <FaStar className="text-amber-600" />
          <FaStar className="text-amber-600" />
          <FaStarHalfAlt className="text-amber-600" />
        </div>
      </div>
      <div>
        <Link to={`/course/${course_id}`}>
          <button className="btn btn-outline btn-accent w-full mt-4 bottom-3">
            Course Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseSummeryCard;
