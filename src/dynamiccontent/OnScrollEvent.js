'use client'
import React, { useState, useEffect } from 'react'
import Main from '@/components/Main'
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";
import IphoneSlick from '@/carousel/IphoneSlick';
import IphoneNewSlick from '@/carousel/IphoneNewSlick';


const OnScrollEvent = () => {

    const [displayPromo, setDisplayPromo] = useState(false);
   
    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const position = window.scrollY
        if(position > 300){
            setDisplayPromo(true)
        }else{
            setDisplayPromo(false)
        }

        if(position > 4000){
            setDisplayPromo(false)
        }
    }

    return (

        <>
            <div className={`top-0 left-0 w-full z-50 fixed promo-block ${displayPromo === true ? 'show' : ''} `}>
                <div className='border-b border-gray-300'>
                    <div className='px-5 md:px-20 md:py-2 py-1'>
                        <div className='py-2 font-semibold md:font-medium flex flex-col md:flex-row md:items-center md:justify-between'>
                            <p className='text-xl md:text-md font-semibold'>iPhone</p>
                            <p className='text-xs md:text-lg py-1 md:py-0'>From ₹10933.00/mo. with instant cashback and No Cost EMI or ₹69600.00‡</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-5 md:px-20 py-3 border-b border-gray-300'>
                        <div className='font-semibold flex flex-row items-end justify-end w-full md:py-2 md:text-sm text-xs'>
                            <div className='flex items-center justify-between'>
                                <Truck size={20}/>
                                <p className='pl-2'>Free shipping</p>
                            </div>
                            <span className='mx-2 md:mx-6 text-gray-300'>|</span>
                            <div className='flex items-center justify-between'>
                                <ShoppingBag size={20} />
                                <p className='pl-2'>Pick up from Store</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <img className='sticky_image fixed opacity-100 shadow-md' src="phone/iphone14/image11.jpg" alt="" />
            </div>
        </>
    )
}

export default OnScrollEvent 
