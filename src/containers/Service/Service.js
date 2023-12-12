import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa6';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';

const servicesData = [
  {
    icon: <FaLaptopCode className="w-12 h-12 text-grayblack dark:text-milkwhite mb-3" />,
    title: 'Website Design',
    description: 'Create a visually stunning and user-friendly website that effectively represents your business. Our affordable web design services are designed for businesses of all sizes.',
  },
  {
    icon: <MdOutlineDeveloperMode className="w-10 h-10 text-grayblack dark:text-milkwhite mb-3" />,
    title: 'Mobile App Development',
    description: 'Stay ahead in the digital age with our fast and responsive mobile development solutions. We ensure your business is accessible to your audience on any device.',
  },
  {
    icon: <HiSpeakerphone className="w-10 h-10 text-grayblack dark:text-milkwhite mb-3" />,
    title: 'Branding',
    description: 'Elevate your brand identity with our professional branding services. From logos to brand guidelines, we help businesses stand out in the crowded digital landscape.',
  },
];

function Service() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative py-10 bg-milkwhite dark:bg-midnightsky" id="service">
        <div className="flex flex-col justify-center items-center">
          <div className="px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-milkwhite">What We Do For Your Business</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 py-16 w-4/5 lg:w-2/3">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="max-w-sm p-6 bg-milkwhite border text-left border-grayblack rounded-lg shadow dark:bg-black dark:border-midnightsky"
              >
                {service.icon}
                <a href="/">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-midnightsky dark:text-milkwhite">
                    {service.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-grayblack dark:text-darkwhite">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Service;
