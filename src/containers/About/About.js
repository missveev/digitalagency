import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
function About({ animate }) {
    const container = useRef(null);

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./aboutlottie.json'),
        rendererSettings: {
          preserveAspectRatio: "xMidYMid Slice"
        }
      });
  
      // Cleanup function to stop and destroy the animation when the component is unmounted
      return () => {
        anim.stop();
        anim.destroy();
      };
  
    }, []);
    
    return (
      <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      >
        <section className='relative bg-babypowder dark:bg-black px-10 md:px-16 lg:px-28' id="about">
            <div className=" container flex flex-col lg:flex-row items-center gap-20  ">
                <div className='flex justify-center flex-1 mb-8 md:mb-10 lg:mb-0'>
                    <div className='h-full w-full' ref={container} alt="about" />
                </div>
                <div className="flex flex-1 flex-col items-center lg:items-start sm:my-0 sm:mx-0 lg:my-32 z-10">
                    <h1 className='text-4xl md:text-5xl font-bold text-black text-center lg:text-left mb-6 dark:text-milkwhite'>About Us</h1>
                    <p className='text-lg text-center lg:text-left mb-6 font-light text-grayblack lg:mb-8 md:text-lg lg:text-xl dark:text-grayblack'>
                    Welcome to WebVista, where innovation meets passion in the world of digital solutions. Our journey began with the vision of 
                    making professional web design, mobile development, and branding accessible to businesses of all sizes. At WebVista, 
                    we believe that every venture, big or small, deserves a standout online presence. <br/> <br/>Our team of dedicated experts is committed 
                    to turning your ideas into compelling digital experiences. With a perfect blend of creativity and technical expertise, 
                    we take pride in providing affordable solutions that empower businesses to thrive in the digital landscape. 
                    Join us on this exciting digital journey, and let's create something extraordinary together.</p>   
                    <div className='flex flex-row mt-6 items-center justify-center text-center'>
                        <button type="button" 
                        className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-milkwhite rounded-lg bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure'
                        >Explore More</button>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}

export default About