import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <section className='relative bg-brightwhite dark:bg-midnightsky px-10 md:px-16 lg:px-28 py-16' id="cta">
            <div className='flex flex-col text-center py-4 dark:text-milkwhite '>
                <h2 className='text-xl md:text-md '>So What is Next?</h2>
                <h1 className='text-4xl md:text-5xl font-bold text-center my-6'>Are you Ready? Let's Get to Work!</h1>
                <div className='flex flex-row mt-6 items-center justify-center text-center'>
                <Link to="/booking" 
                className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-milkwhite rounded-lg bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure'
                >Book a Free Consultation</Link>
            </div>
        </div>
    </section >
  )
}

export default Cta