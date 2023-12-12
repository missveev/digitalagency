import React from 'react';
import { motion } from 'framer-motion';
const pricingPlans = [
    {
        id: 1,
        title: 'Web Design',
        description: 'Establish your online presence with our Web Design Package',
        price: 250,
        features: [
            'Custom Website Design',
            'Web Development',
            'Custom UI/UX Design',
            'SEO Optimization & On-page SEO',
            'Content Management System (CMS)',
            'Seamless API integration',
            'Ongoing Technical Support',
        ],
    },
    {
        id: 2,
        title: 'Mobile App',
        description: 'Ignite your mobile presence with our Mobile Development Package',
        price: 499,
        features: [
            'Fast and responsive mobile application development',
            'Compatibility across iOS and Android platforms',
            'User-friendly interface and navigation',
            'Push notification integration',

        ],
    },
    {
        id: 3,
        title: 'Branding',
        description: 'Elevate your brand identity with our Branding Package',
        price: 199,
        features: [
            'Logo Design',
            'Brand Name + Identity',
            'Brand Book',
            'Package Design',
            'Social Media Template',
            'Market Research',
        ],
    },
];

function Pricing() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}>
            <section className='bg-babypowder dark:bg-black' id='pricing'>
                <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                    <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
                        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-midnightsky dark:text-milkwhite'>Here is our Package</h2>
                        <p className='mb-5 font-light text-grayblack sm:text-xl dark:text-darkwhite'>
                            Our pricing is designed to fit various budgets while ensuring the highest quality of service.
                        </p>
                    </div>
                    <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
                        {pricingPlans.map((plan) => (
                            <div key={plan.id} className='flex flex-col p-6 mx-auto max-w-lg text-center text-midnightsky bg-milkwhite rounded-2xl shadow-2xl  xl:p-8 dark:bg-midnightsky dark:text-milkwhite'>
                                <h3 className='mb-4 text-2xl font-semibold text-black dark:text-milkwhite'>{plan.title}</h3>
                                <p className='font-light text-grayblack sm:text-lg dark:text-milkwhite'>{plan.description}</p>
                                <div className='flex flex-col justify-center items-center my-8'>
                                    <span className='text-grayblack dark:text-milkwhite'>from </span>
                                    <span className='mr-2 text-5xl text-black dark:text-milkwhite font-extrabold'>{`$${plan.price}`}</span>

                                </div>
                                <ul className='mb-8 space-y-4 text-left text-black dark:text-milkwhite'>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className='flex items-center space-x-3'>
                                            <svg
                                                className='flex-shrink-0 w-5 h-5 text-azure dark:text-azure'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                ></path>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Pricing;
