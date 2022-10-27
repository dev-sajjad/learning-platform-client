import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {
  FaStar,
  FaStarHalfAlt,
  FaUserTie,
  FaLevelUpAlt,
  FaLanguage,
} from "react-icons/fa";
import { FiClock, FiBookOpen } from "react-icons/fi";

const CourseDetails = () => {

    const courseDetails = useLoaderData();

    const {
        cost,
       language,
        thumbnail,
        level,
        rating,
        lectures,
        course_title,
        instructor,
        enroll,
        description,
        duration,
    } = courseDetails;

    return (
      <div className=" w-10/12 mx-auto">
        <h3 className="text-center text-4xl text-rose-500 bg-rose-200 w-1/4 mx-auto font-semibold rounded-sm p-1 mt-6">
          Course Details
        </h3>
        <div className="flex mt-4">
          <div className="flex-1 p-2">
            <img className="rounded-md h-80 w-full" src={thumbnail} alt="" />
            <h2 className="text-3xl font-semibold text-black my-4">
              {course_title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 mr-2"
                  src={instructor.picture}
                  alt=""
                />
                <p className="text-black text-lg ">{instructor.name}</p>
                <span className="mx-4 text-black">| |</span>
                <p className="text-green-400 text-lg">
                  <span className="font-semibold">{enroll}</span> Enrolled
                  Students
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-black font-semibold mr-1">{rating}</span>
                <FaStar className="text-amber-600" />
                <FaStar className="text-amber-600" />
                <FaStar className="text-amber-600" />
                <FaStar className="text-amber-600" />
                <FaStarHalfAlt className="text-amber-600" />
                <span> (5234 Ratings)</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-black mb-2  text-2xl">
                Description:
              </h4>
              <p className="text-black">{description}</p>
            </div>
          </div>
          <div className="flex-none w-96">
            <div className="bg-green-200 border mt-1 divide-x p-3 ml-2 rounded-md">
              <h3 className="text-center text-2xl font-semibold text-green-700">
                ${cost}
              </h3>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaUserTie className="text-green-700 mr-2" />
                  <p className="text-xl text-black font-semibold">Instructor</p>
                </div>
                <p className="text-black text-xl">{instructor.name}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiClock className="text-green-700 mr-2" />
                  <p className="text-xl text-black font-semibold">Duration</p>
                </div>
                <p className="text-black text-xl">{duration}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiBookOpen className="text-green-700 mr-2" />
                  <p className="text-xl text-black font-semibold">Lectures</p>
                </div>
                <p className="text-black text-xl">{lectures}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaLevelUpAlt className="text-green-700 mr-2" />
                  <p className="text-xl text-black font-semibold">Level</p>
                </div>
                <p className="text-black text-xl">{level[0]}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaLanguage className="text-green-700 mr-2" />
                  <p className="text-xl text-black font-semibold">Language</p>
                </div>
                <p className="text-black text-xl">{language}</p>
              </div>
              <div>
                <Link to="">
                  <button className="btn btn-outline btn-success text-lg font-semibold w-full mt-4 bottom-3">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;