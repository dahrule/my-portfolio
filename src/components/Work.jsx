import React from 'react';
import { data } from "../data/data.js";
import Modal from "./VideoModal";
import { Link } from "react-router-dom";

const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my work</p>
        </div>

      {/* container for projects */}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* Gird Item */}
                {project.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              {item.name}
            </span>
            <p><span className="">
              {item.tags}
            </span></p>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a href={item.github} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg"
                  disabled={item.github === ""}
                  style={item.github === "" ? { opacity: 0.5 } : {}}
                >
                  Source
                </button>
              </a>
              {/* eslint-disable-next-line */}
              {/*<a href={item.live} target="_blank">
                 <button
                  className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg"
                >
                  Video
                </button>
              </a>*/}
              <Modal videoId={item.live}/>
            </div>
            <br></br>
            {/*<Link to={item.details}>Learn more...</Link>*/}
            <a href={item.details} 
               target="_blank">
               {item.details === "" ? "" : "Learn more..."}
            </a>
          </div>
        </div>
      ))}

      </div>
      </div>
    </div>
  );
};

export default Work;
