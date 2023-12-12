import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';

function Hero() {
  
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./herolottie.json'),
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
    <section className='relative bg-milkwhite dark:bg-midnightsky px-10 md:px-16 lg:px-24 lg:py-16' id='home'>
      <div className='flex flex-col-reverse lg:flex-row lg:gap-8 xl:gap-0 py-16 '>
        <div className='flex flex-1 flex-col items-center lg:px-12 lg:items-start sm:my-0 sm:mx-0 lg:my-32'>
          <h1 className='text-4xl md:text-5xl font-semibold text-center text-black lg:text-left mb-6 dark:text-milkwhite'>
            We Help You Grow <br/> Your Business
          </h1>
          <p className='text-lg text-center lg:text-left mb-6 font-light text-grayblack lg:mb-8 md:text-lg lg:text-xl dark:text-darkwhite'>
          We are dedicated to transforming your digital aspirations into reality. Explore tailored solutions, book a free consultation, and take the first step towards a powerful online presence for your business.
          </p>
          <Link
            to='/booking'
            className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-milkwhite rounded-lg bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure'
          >
            Get started
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
        <div className='flex lg:mt-0 lg:flex flex-1 mb-10 items-center justify-center lg:relative'>
  <div className='w-full h-full lg:absolute object-contain' ref={container} alt="mockup" />
</div>
      </div>
    </section>
  );
}

export default Hero;
