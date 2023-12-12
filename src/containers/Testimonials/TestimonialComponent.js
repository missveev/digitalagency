
import React from 'react';
import Testimonials from './Testimonials'; 
import testimonialData from './TestimonialData';

const TestimonialComponent = () => {
  return (
    <div>
      {/* Other components or content */}
      <Testimonials testimonials={testimonialData} />
      {/* Other components or content */}
    </div>
  );
};

export default TestimonialComponent;
