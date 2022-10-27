import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/course-categories")
            .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
      <div className="mt-4">
        <h2 className='my-3'>All Category: {categories.length}</h2>
        <div>
          {categories.map((category) => (
            <p className="mb-3" key={category.course_id}>
              {" "}
              <Link to={`/course/${category.course_id}`}>{category.name}</Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default LeftSideNav;