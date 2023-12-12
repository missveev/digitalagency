import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import testimonialData from './TestimonialData'
const Testimonials = ({ testimonials }) => {
    useEffect(() => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 2.5,
                        spacing: 32,
                    },
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');

        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());

        // Clean up event listeners when the component is unmounted
        return () => {
            keenSlider.destroy();
            keenSliderPrevious.removeEventListener('click', () => keenSlider.prev());
            keenSliderNext.removeEventListener('click', () => keenSlider.next());
        };
    }, []);

    return (
        <section className="bg-milkwhite dark:bg-midnightsky">
            <div className="mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="max-w-[1340px] mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-3xl font-bold tracking-tight dark:text-milkwhite text-black sm:text-4xl">
                                Don't just take our word for it...
                            </h2>
                            <p className="mt-4 text-darkwhite">
                            Read to see how we've helped businesses like yours succeed in the digital landscape.
                            </p>
                            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                                <button
                                    aria-label="Previous slide"
                                    id="keen-slider-previous"
                                    className="rounded-full border border-azure p-3 text-azure transition hover:bg-azure hover:text-milkwhite"
                                >
                                    {/* SVG for Previous */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 rtl:rotate-180"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </button>
                                <button
                                    aria-label="Next slide"
                                    id="keen-slider-next"
                                    className="rounded-full border border-azure p-3 text-azure transition hover:bg-azure hover:text-milkwhite"
                               >
                                    {/* SVG for Next */}
                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            <div id="keen-slider" className="keen-slider">
                                {testimonialData.map((testimonial, index) => (
                                    <div key={index} className="keen-slider__slide">
                                        <article
                                            className="hover:animate-background rounded-xl bg-babypowder dark:bg-midnightsky p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                                        >    {/* Testimonial content */}
                                            <div className="rounded-[10px] bg-babypowder dark:bg-black p-4 !pt-6 sm:p-6">
                                                <div className='flex gap-4'>
                                                    <img
                                                        alt="Man"
                                                        src={testimonial.photo}
                                                        class="h-14 w-14 rounded-full object-cover"
                                                    />
                                                    <div className='flex flex-col'>
                                                    <div className="flex gap-0.5 text-azure">
                                                        {/* Rating stars */}
                                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                className="h-5 w-5"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
                                                                ></path>
                                                            </svg>
                                                        ))}
                                                    </div>
                                                   
                                                        <p className="text-base font-semibold text-black dark:text-milkwhite">{testimonial.author}</p>
                                                       
                                                    </div>
                                                </div>
                                                <p className="mt-6 text-lg text-black dark:text-milkwhite">{testimonial.content}</p>

                                            </div>

                                            {/* Testimonial author */}



                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
