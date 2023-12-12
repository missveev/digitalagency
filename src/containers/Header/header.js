import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

function Header() {
    return (
        
            <section className="h-full text-milkwhite py-16">
             <Navbar/>
             <Hero/>
            </section>
          );
        }
export default Header