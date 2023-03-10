import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'> {/* Text here*/}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          DANIEL RUIZ
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          XR + IoT developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am a developer specializing in virtual and augmented reality. 
        My current focus is on exploring the intersection of XR with IoT to design more engaging experiences.
        </p>
        <div>
          <Link to="/work">
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
