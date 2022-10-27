import React from 'react';

const Home = () => {
    return (
      <div>
        <div className="hero  bg-base-200">
          <div className="hero-content  w-11/12 mx-auto flex-col lg:flex-row-reverse">
            <img
              alt=""
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Learn on your schedule <br /> from any device
              </h1>
              <p className="py-6">Learn on your schedule from any device</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;