import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseDetails = useLoaderData();


    const { id, course_name } = courseDetails;

    return (
        <div>
            <div>
                <p>{id}</p>
                <p>{course_name}</p>
            </div>
            <Link><button>CheckOut</button></Link>
        </div>
    );
};

export default CheckOut;