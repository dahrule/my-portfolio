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
                {/*"As a virtual and augmented reality developer, I am passionate about creating immersive experiences that blur the line between the digital and physical worlds. By combining the latest XR technology with the power of IoT, I am pushing the boundaries of what's possible in terms of user engagement and interactivity. Whether it's exploring a virtual world through a smartwatch or controlling a robotic arm with hand gestures, my goal is to deliver unforgettable experiences that leave a lasting impression. Join me on the cutting edge of XR and IoT innovation, where the future of immersive technology awaits!*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              <br></br>
              
              <br></br>
              
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
