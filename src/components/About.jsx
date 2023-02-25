import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Daniel Ruiz. Please take a look around.</p>
            </div>
            <div>
              <p>
              I am a highly motivated XR developer with IoT skills, with a particular focus on implementing novel user interactions for VR and AR experiences. 
              I am exploring the application of IoT technologies in XR experiences to enhance the user experience.
              <br></br>
              My strong programming skills enable me to write clean, maintainable code. 
              As a passionate VR enthusiast, I am always seeking out new challenges and opportunities to apply my skills and creativity. 
              I am driven by a desire to create immersive and memorable experiences for users, and I thrive in fast-paced, collaborative environments. 
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
