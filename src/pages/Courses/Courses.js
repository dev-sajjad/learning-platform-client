import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='flex w-10/12 mx-auto bg-slate-100'>
            <div className='flex-none w-64'>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className='flex-auto '>
                <h3>content area: {courses.length}</h3>
            </div>
        </div>
    );
};

export default Courses;