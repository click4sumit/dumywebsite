'use client'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
;

const IphoneNewSlick = ({newSlidesImg}) => {

    let settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
        ]
        // nextArrow: <button><i className="fa-solid fa-chevron-right text-2xl text-gray-500"></i></button>,
        // prevArrow: <button><i className="fa-solid fa-chevron-left text-2xl text-gray-500"></i></button>
    };

    // let newSlides = [
    //     {image: 'phone/iphone14/image05.jpeg', label: 'iPhone 14'},
    //     {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    // ]

    return (
        <>
            <div className="md:mt-1 md:mt-0 iphone_wide-slider md:pb-5">
                <Slider {...settings}>
                
                    {newSlidesImg.map((_newSlide, index) => {

                        return (
                            <div key={`slide_${index}`}>
                                <div>
                                    <div className='w-full flex items-center justify-center'>
                                        <div className='image04 iphone_New_Slide_width_01 iphone_slide_width block rounded-lg bg-cover bg-no-repeat bg-center flex md:items-end md:justify-start justify-center' 
                                            style={{backgroundImage:`url(${_newSlide.image})`}}>
                                        </div>
                                    </div>
                                    <div className='pt-5 md:pt-8 text-sm flex items-center justify-center'>
                                        <p>{_newSlide.label}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}
export default IphoneNewSlick;