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
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {

    const courseDetails = useLoaderData();

    const {
      cost,
      id,
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
        <div className="h-32 w-full p-4 bg-emerald-200">
          <h3 className="text-center text-xl lg:text-4xl text-rose-400  w-2/4 lg:w-1/4 mx-auto font-bold rounded-sm p-2">
            <span className="text-black">Course</span> Details
          </h3>
          <ReactToPdf
            targetRef={ref}
            filename="course-details.pdf"
          >
            {({ toPdf }) => (
              <div className="w-2/12 mx-auto mt-5">
                <button
                  className="btn btn-accent btn-xs w-44  btn-outline"
                  onClick={toPdf}
                >
                  Download Pdf
                </button>
              </div>
            )}
          </ReactToPdf>
        </div>

        <div ref={ref} className="flex-col-reverse-reverse lg:flex mt-4 ">
          <div className="flex-1 p-2">
            <img className="rounded-md h-80 w-full" src={thumbnail} alt="" />
            <h2 className="text-xl lg:text-3xl font-semibold text-black my-4">
              {course_title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 mr-2"
                  src={instructor?.picture}
                  alt=""
                />
                <p className="text-black text-lg ">{instructor.name}</p>
                <span className="mx-4 text-black">| |</span>
                <p className="text-green-400 text-sm lg:text-lg">
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
              <h4 className="font-semibold text-black mb-2 text-lg lg:text-2xl">
                Description:
              </h4>
              <p className="text-black text-sm lg:text-lg">{description}</p>
            </div>
          </div>
          <div className="w-full flex-none  lg:w-96">
            <div className="bg-emerald-200 py-2 lg:py-4 border mt-1  p-3 ml-2 rounded-md">
              <h3 className="text-center text-lg lg:text-2xl font-semibold text-green-700">
                ${cost}
              </h3>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaUserTie className="text-green-700 mr-2" />
                  <p className="text-lg lg:text-xl text-black font-semibold">
                    Instructor
                  </p>
                </div>
                <p className="text-black text-lg lg:text-xl">
                  {instructor.name}
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiClock className="text-green-700 mr-2" />
                  <p className="text-lg lg:text-xl text-black font-semibold">
                    Duration
                  </p>
                </div>
                <p className="text-black text-lg lg:text-xl">{duration}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiBookOpen className="text-green-700 mr-2" />
                  <p className="text-lg lg:text-xl text-black font-semibold">
                    Lectures
                  </p>
                </div>
                <p className="text-black text-lg lg:text-xl">{lectures}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaLevelUpAlt className="text-green-700 mr-2" />
                  <p className="text-lg lg:text-xl text-black font-semibold">
                    Level
                  </p>
                </div>
                <p className="text-black text-lg lg:text-xl">{level[0]}</p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaLanguage className="text-green-700 mr-2" />
                  <p className="text-lg lg:text-xl text-black font-semibold">
                    Language
                  </p>
                </div>
                <p className="text-black text-lg lg:text-xl">{language}</p>
              </div>
              <div>
                <Link to={`/course-details/${id}`}>
                  <button className="btn btn-outline btn-accent text-sm lg:text-lg font-semibold w-full mt-4 bottom-3">
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