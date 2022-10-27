import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCard from './CourseSummeryCard/CourseSummeryCard';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='flex w-11/12 mx-auto overflow-hidden mt-6  bg-slate-100'>
            <div className='flex-none hidden lg:block w-64'>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className='flex-auto '>
                <h2 className='text-4xl font-bold text-center mb-6 text-rose-400'>Popular Courses</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        courses.map(course => <CourseSummeryCard key={course.id} course={course}></CourseSummeryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;