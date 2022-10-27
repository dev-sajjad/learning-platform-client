import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='flex w-10/12 mx-auto bg-slate-100'>
            <div className='flex-none w-64'>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className='flex-auto '>
                <h3>content area</h3>
            </div>
        </div>
    );
};

export default Courses;