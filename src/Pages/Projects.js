import React from 'react'
const works = [
    {
        id: 1,
        title: 'Work 1',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    },
    {
        id: 2,
        title: 'Work 2',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    },
    {
        id: 3,
        title: 'Work 3',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    },
    {
        id: 4,
        title: 'Work 1',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    },
    {
        id: 5,
        title: 'Work 2',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    },
    {
        id: 6,
        title: 'Work 3',
        imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    }
];
const Projects = () => {
  return (
    <section className='relative bg-milkwhite py-16' id='work'>
    <div className='flex flex-col justify-center items-center py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 py-16 w-4/5 lg:w-2/3'>
            {works.map((work) => (
                <div key={work.id} className="group relative block rounded-lg bg-black">
                    <a href='/' >
                        <img className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            src={work.imageUrl} alt='' />
                    </a>
                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-xl font-bold text-milkwhite sm:text-2xl">{work.title}</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <a
                                    href='/'
                                    className='inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-milkwhite bg-springbreak rounded-lg hover:bg-azure focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure view-work-btn'
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
        </div>
        </section>
  )
}

export default Projects