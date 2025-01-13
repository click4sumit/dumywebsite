'use client'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sleek = () => {

    let settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: true
                }
            },
        ]
        // nextArrow: <button><i className="fa-solid fa-chevron-right text-2xl text-gray-500"></i></button>,
        // prevArrow: <button><i className="fa-solid fa-chevron-left text-2xl text-gray-500"></i></button>
    };

    return (
        <>
            <div className="mt-3 md:mt-0 wide-slider pb-5">
                <Slider {...settings}>
                    <div>
                        <div className='w-full'>
                            <Link href={'#'} className='image_style block slide_width bg-cover bg-no-repeat bg-center flex items-end md:justify-start justify-center' style={{backgroundImage:`url(/images/slidebar/slide01.avif)`}}>  
                                <div className='flex items-center md:justify-end md:mb-5 md:flex-row flex-col md:pl-9 pl-0 md:ml-9 mb-5 md:h-15 h-20'>
                                    <button className='mt-4 md:mt-0 order-2 md:order-1 font_style bg-white md:mr-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-xl font-normal rounded-full text-black bg-secondary-900'>Stream Now</button>
                                    <p className='order-1 md:order-2 text_shadow font_style text-white md:text-xl text-sm font-normal md:ml-2'><span className='font-semibold'>Crime-</span> Presume Nothing 1</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className='w-full'>
                            <Link href={'#'} className='image_style block slide_width bg-cover bg-no-repeat bg-center flex items-end md:justify-start justify-center' style={{backgroundImage:`url(/images/slidebar/slide02.avif)`}}>  
                                <div className='flex items-center md:justify-end md:mb-5 md:flex-row flex-col md:pl-9 pl-0 md:ml-9 mb-5 md:h-15 h-20'>
                                    <button className='mt-4 md:mt-0 order-2 md:order-1 font_style bg-white md:mr-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-xl font-normal rounded-full text-black bg-secondary-900'>Stream Now</button>
                                    <p className='order-1 md:order-2 text_shadow font_style text-white text-sm md:text-xl font-normal md:ml-2'><span className='font-semibold'>Crime-</span> Presume Nothing 2</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className='w-full'>
                            <Link href={'#'} className='image_style block slide_width bg-cover bg-no-repeat bg-center flex items-end md:justify-start justify-center' style={{backgroundImage:`url(/images/slidebar/slide03.avif)`}}>  
                                <div className='flex items-center md:justify-end md:mb-5 md:flex-row flex-col md:pl-9 pl-0 md:ml-9 mb-5 md:h-15 h-20'>
                                    <button className='mt-4 md:mt-0 order-2 md:order-1 font_style bg-white md:mr-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-xl font-normal rounded-full text-black bg-secondary-900'>Stream Now</button>
                                    <p className='order-1 md:order-2 text_shadow font_style text-white md:text-xl text-sm font-normal md:ml-2'><span className='font-semibold'>Crime-</span> Presume Nothing 3</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className='w-full'>
                            <Link href={'#'} className='image_style block slide_width bg-cover bg-no-repeat bg-center flex items-end md:justify-start justify-center' style={{backgroundImage:`url(/images/slidebar/slide04.avif)`}}>  
                                <div className='flex items-center md:justify-end md:mb-5 md:flex-row flex-col md:pl-9 pl-0 md:ml-9 mb-5 md:h-15 h-20'>
                                    <button className='mt-4 md:mt-0 order-2 md:order-1 font_style bg-white md:mr-4 px-3 py-1 md:px-4 md:py-2 text-sm md:text-xl font-normal rounded-full text-black bg-secondary-900'>Stream Now</button>
                                    <p className='order-1 md:order-2 text_shadow font_style text-white md:text-xl text-sm font-normal md:ml-2'><span className='font-semibold'>Crime-</span> Presume Nothing 4</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default Sleek;