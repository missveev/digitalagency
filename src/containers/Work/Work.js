import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bikey from './bikey.png';
import foodie from './foodie.png';
import dining from './dining.jpg';
import lydianin from './lydianin.png';
import portfolio from './portfolio.jpg';
import bodyandsole from './bodyandsole.jpg'
const works = [
    {
        id: 1,
        title: 'Body & Sole',
        imageUrl: bodyandsole,
    },
    {
        id: 2,
        title: 'Fashion Store',
        imageUrl: lydianin,
    },
    {
        id: 3,
        title: 'Foodie',
        imageUrl: foodie,
    },
    {
        id: 4,
        title: 'Restaurant',
        imageUrl: dining,
    },
    {
        id: 5,
        title: 'Portfolio',
        imageUrl: portfolio,
    },
    {
        id: 6,
        title: 'Bike Store',
        imageUrl: bikey,
    }
];

function Work() {
    const displayedWorks = works.slice(0, 3);
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}>
            <section className='relative bg-milkwhite dark:bg-midnightsky py-12' id='work'>
                <div className='flex flex-col justify-center items-center py-8'>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-semibold text-center text-black dark:text-milkwhite'>Our Recent Work By Our Experts</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 py-16 w-4/5 lg:w-2/3'>
                        {displayedWorks.map((work) => (
                            <div key={work.id} className="group relative block rounded-lg bg-black">
                                <a href='/' >
                                    <img className="absolute inset-0 h-full w-full object-cover opacity-65 transition-opacity group-hover:opacity-50"
                                        src={work.imageUrl} alt='' />
                                </a>
                                <div className="relative p-4 sm:p-6 lg:p-8">

                                    <p className="text-xl font-bold text-milkwhite sm:text-2xl">{work.title}</p>
                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <a
                                                href='/'
                                                className='inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-milkwhite bg-springbreak rounded-lg hover:bg-azure focus:ring-4 focus:outline-none focus:ring-blue-ocean dark:bg-azure dark:hover:bg-springbreak dark:focus:ring-springbreak view-work-btn'
                                            >
                                                View Work
                                                <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                   to="/projects" 
                   className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-milkwhite rounded-lg bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean dark:bg-azure dark:hover:bg-springbreak dark:focus:ring-springbreak'
                   >View All Projects</Link>

                </div>
            </section>
        </motion.div>
    );
}

export default Work;
