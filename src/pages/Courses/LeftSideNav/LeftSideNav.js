import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://learning-edge-server.vercel.app/course-categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    }, [])

    return (
      <div className="mt-14 bg-green-200 px-3 py-2 mr-5 rounded-md">
        <h2 className="my-3 text-black font-semibold text-xl text-center bg-rose-400 rounded-md p-2">All Courses</h2>
        <div>
          {categories.map((category) => (
            <p className="mb-3 text-black p-2 rounded-md hover:bg-red-300" key={category.course_id}>
              {" "}
                  <Link to={`/course/${category.course_id}`}>{category.name}</Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default LeftSideNav;