import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Contact = () => {
   
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}>

            <section className='relative bg-babypowder dark:bg-black px-10 md:px-16 lg:px-28 py-16' id="contact">
          

                <div class="container mx-auto my-4 px-4 lg:px-20">

                    <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-milkwhite dark:bg-midnightsky">
                        <div class="flex">
                            <h1 class="font-bold uppercase text-5xl text-black dark:text-milkwhite">Send us a <br/> message</h1>
                        </div>
                        <form action='https://formspree.io/f/xgejgnkg'
                        method='POST'>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-babypowder dark:bg-black text-midnightsky mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name="firstname" placeholder="First Name*" />
                            <input class="w-full bg-babypowder dark:bg-black text-midnightsky mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name='lastname' placeholder="Last Name*" />
                            <input class="w-full bg-babypowder dark:bg-black text-midnightsky mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" name="email" placeholder="Email*" />
                            <input class="w-full bg-babypowder dark:bg-black text-midnightsky mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" name='phone' placeholder="Phone*" />
                        </div>
                        <div class="my-4">
                            <textarea placeholder="Message*" class="w-full h-32 bg-babypowder dark:bg-black text-midnightsky mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 w-1/2 lg:w-1/4">
                            <button type='submit'
                            class="uppercase text-sm font-bold tracking-wide bg-springbreak text-milkwhite p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                        </form>
                    </div>

                    <div
                        class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-azure dark:bg-midnightsky rounded-2xl">
                        <div class="flex flex-col text-milkwhite">
                            <h1 class="font-bold uppercase text-3xl my-4">Reach Out to Us</h1>
                            <p class="text-milkwhite dark:text-darkwhite">Connect with us to kickstart your digital transformation. Reach out for inquiries, support, or to schedule your free consultation. </p>
                            <div class="flex my-4 w-2/3 gap-1">
                                <div class="flex flex-col">
                                    <MdOutlineEmail className='w-7 h-7' />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-xl">Email Address</h2>
                                    <p class="text-milkwhite dark:text-darkwhite">test@email.com</p>
                                    <p class="text-milkwhite dark:text-darkwhite">test@email.com</p>
                                </div>
                            </div>

                            <div class="flex my-4 w-2/3 gap-1">
                                <div class="flex flex-col">
                                    <FaPhoneAlt className='w-7 h-7' />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-2xl">Call Us</h2>
                                    <p class="text-milkwhite dark:text-darkwhite">Tel: xxx-xxx-xxx</p>
                                    <p class="text-milkwhite dark:text-darkwhite">Fax: xxx-xxx-xxx</p>
                                </div>
                            </div>

                            <div class="flex my-4 w-2/3 lg:w-1/2 ">
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" class="rounded-full bg-milkwhite h-8 w-8 inline-flex items-center justify-center mx-1 text-azure">
                                    <FaInstagram className=' text-midnightsky  h-5 w-5' />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" class="rounded-full bg-milkwhite h-8 w-8 inline-flex items-center justify-center mx-1 text-azure">
                                    <FaXTwitter class="fab fa-linkedin-in text-midnightsky  h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
</section>
        </motion.div>
    )
}

export default Contact