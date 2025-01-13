'use client'
import React, { useRef, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
;

const Iphone_Slick = ({slides, reset, updateReset}) => {

    let sliderRef = useRef(null);

    useEffect(() => {
        
        if(reset === true){

            sliderRef.slickGoTo(0)
            updateReset()
        }
        
    }, [slides, reset]);    

    let settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                    variableWidth: false,
                    centerMode: false
                }
            },
        ]

        
        // nextArrow: <button><i className="fa-solid fa-chevron-right text-2xl text-gray-500"></i></button>,
        // prevArrow: <button><i className="fa-solid fa-chevron-left text-2xl text-gray-500"></i></button>
    };

    // let slides = [
    //     {image: 'phone/iphone14/phone-image1.webp'},
    //     {image: 'phone/iphone14/phone-image2.webp'},

    // ]

    return (
        <>
            <div className="md:mt-3 md:mt-0 iphone_wide-slider md:pb-5">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                        
                    {slides.map((_slides, index) => {

                        return(
                            <div key={`slide_${index}`}>
                                <div>       
                                    <div className='w-full flex items-center justify-center'>
                                        <div className='image_style block iphone_slide_width rounded-lg bg-cover bg-no-repeat bg-center flex md:items-end md:justify-start justify-center' 
                                            style={{backgroundImage:`url(${_slides.image})`}}>
                                        </div>
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
export default Iphone_Slick;