'use client'
import React, { useState, useEffect } from 'react'
import Main from '@/components/Main'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";

import IphoneSlick from '@/carousel/IphoneSlick';
import IphoneNewSlick from '@/carousel/IphoneNewSlick';




const MidSection = (props) => {

    
    const [selectedModel, setSelectedModel] = useState(false);
    const [selectedGB, setSelectedGB] = useState(false)
    const [hoveredColor, setHoveredColor] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [dynamicContent, setDynamicContent] = useState('Your new iPhone awaits. Make it yours.')
    const [dynamicPriceChnage, setDynamicPriceChnage ] = useState('From ₹10933.00/mo. with instant cashback and No Cost EMI or ₹69600.00')
    const [imageSrc, setImageSrc] = useState('phone/iphone14/image04.jpeg')
    const [circledColor, setCircledColor] = useState('')


    const [displayPromo, setDisplayPromo] = useState(false);

    const [slides, SetSlides] = useState([
        {image: 'phone/iphone14/phone-image1.webp'},
        {image: 'phone/iphone14/phone-image2.webp'}
    ]);

    const [newSlidesImg, setNewSlideImg] = useState([
        {image: 'phone/iphone14/blue/blue5.jpeg', label: 'iPhone 14'},
        {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    ])

    const handleAddSlide = () => {
        const newSlides = [
            {image: 'phone/iphone14/phone-image3.webp'},
            {image: 'phone/iphone14/phone-image4.webp'},
            {image: 'phone/iphone14/phone-image5.webp'},
            {image: 'phone/iphone14/phone-image6.webp'}

        ]

        SetSlides(prevSlides => [...prevSlides, ...newSlides])
    }

    const colorImages = (code) => {
        if(selectedModel === false){
            return;
        }
        setSelectedColor(code);
        if (code === 'red'){
            setImageSrc('phone/iphone14/red/red4.webp')
            setNewSlideImg([
                {image: 'phone/iphone14/red/red5.webp', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])
            setSelectedColor('Red')
        }else if(code === 'black'){

            setImageSrc('phone/iphone14/black/black4.webp')
            setNewSlideImg([
                {image: 'phone/iphone14/black/black6.webp', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])

            setSelectedColor('Black')

        }
        else if(code === 'blue'){

            setImageSrc('phone/iphone14/blue/blue7.jpeg')
            setNewSlideImg([
                {image: 'phone/iphone14/blue/blue5.jpeg', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])

            setSelectedColor('Blue')

        }
        else if(code === 'yellow'){
            setImageSrc('phone/iphone14/yellow/yellow4.webp')

            setNewSlideImg([
                {image: 'phone/iphone14/yellow/yellow5.webp', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])

            setSelectedColor('Yellow')
            
        }else if(code === 'purple'){
            setImageSrc('phone/iphone14/purple/purple4.webp')

            setNewSlideImg([
                {image: 'phone/iphone14/purple/purple6.webp', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])
            setSelectedColor('Purple')

        }else if (code === 'white'){
            setImageSrc('phone/iphone14/white/white4.webp')

            setNewSlideImg([
                {image: 'phone/iphone14/white/white6.webp', label: 'iPhone 14'},
                {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
            ])

            setSelectedColor('White')
        }

        let images = [];
        
        images['blue'] = [
            {image: 'phone/iphone14/blue/blue1.webp'},
            {image: 'phone/iphone14/blue/blue2.webp'},
            {image: 'phone/iphone14/blue/blue3.webp'},
        ]

        images['yellow'] = [
            {image: 'phone/iphone14/yellow/yellow-1.webp'},
            {image: 'phone/iphone14/yellow/yellow-2.webp'},
            {image: 'phone/iphone14/yellow/yellow-3.webp'},   
        ]

        images['black'] = [
            {image: 'phone/iphone14/black/black1.webp'},
            {image: 'phone/iphone14/black/black2.webp'},
            {image: 'phone/iphone14/black/black3.webp'},
        ]

        images['purple'] = [
            {image: 'phone/iphone14/purple/purple1.webp'},
            {image: 'phone/iphone14/purple/purple2.webp'},
            {image: 'phone/iphone14/purple/purple3.webp'},    
        ]

        images['white'] = [
            {image: 'phone/iphone14/white/white1.webp'},
            {image: 'phone/iphone14/white/white2.webp'},
            {image: 'phone/iphone14/white/white3.webp'},          
        ]

        images['red'] = [
            {image: 'phone/iphone14/red/red1.webp'},
            {image: 'phone/iphone14/red/red2.webp'},
            {image: 'phone/iphone14/red/red3.webp'},     
        ]

        SetSlides(images[code])
    }
   
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
            <div className='container mt-32 mx-0'>
                    <p className='text-2xl font-semibold px-5 md:px-0'>Apple Trade In. <span className='text-gray-400'>Get ₹5000.00-₹61045.00 credit towards your new iPhone.</span> </p>
                    <div className='grid grid-cols-12 mt-10 md:gap-9'>
                        <div className='col-span-12 md:col-span-8'>
                            <div className='grid grid-cols-12 md:gap-5'>

                                <div className='col-span-12 md:col-span-6 flex item-center justify-center px-5 md:px-0 pb-5 md:pb-0'>
                                    <div className='border-2 text-center rounded-md px-5 py-4 w-full'>
                                        <p className='text-md'>Select a smartphone</p>
                                        <p className='text-xs'>Answer a few questions to get your estimate.</p>
                                    </div>
                                </div>
                                <div className='col-span-12 md:col-span-6 flex item-center justify-center px-5 md:px-0 pb-5 md:pb-0'>
                                    <div className='border-2 text-center rounded-md px-10 py-6 w-full'>
                                        <p className='text-md'>No trade-in</p>        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-12 md:col-span-4 mx-0 md:w-4/5 md:ml-10 px-5 md:px-0'>
                            <div className='flex flex-row items-stretch jutify-center rounded-lg shadow w-full'>       
                                <Link href={'#'} className='w-28 bg-cover bg-no-repeat flex items-center justify-between' style={{backgroundImage:`url(/images/image4.avif)`}}></Link> 
                                <div className='text-sm flex flex-col item-center justify-center flex-1'>
                                    <div className='p-4 bg-third-900'>
                                        <div className='flex items-center jutify-between'>
                                            <p>How does trade-in work?</p>
                                            <LucideCirclePlus className='lucide_icone pb-0'  size={15}/>
                                        </div>
                                        <p className='text-xs text-wrap'>We'll help you exchange your eligible device for instant credit towards your new iPhone. See the step-by-step process.</p>
                                    </div>
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>

            <div className='container mt-16 mx-0'>
                <p className='text-2xl font-semibold px-5 md:px-0'>AppleCare+ coverage.<span className='text-gray-400'>Protect your new iPhone.</span> </p>
                <div className='grid grid-cols-12 mt-10 md:gap-9'>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='grid grid-cols-12 md:gap-5'>
                            <div className='col-span-12 md:col-span-6 px-5 md:px-0 pb-5 md:pb-0'>
                                <div className=' flex item-start justify-start border-2 flex-col rounded-md px-5 py-0 w-full'>
                                    <div className='flex item-center jutify-between'>
                                        <img src="/images/apple-logo.svg" className="w-5" style={{color :"red"}} alt="" />
                                        <p className='text-md py-4 px-1'>AppleCare+</p>    
                                    </div>
                                    
                                    <hr className='pt-2' />
                                    <ul>
                                        <li className='text-xs py-4'>AppleCare+
                                        Get unlimited repairs for accidental damage protection, Apple-certified repairs, and priority access to Apple experts.Footnote◊</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex item-center justify-center px-5 md:px-0 pb-5 md:pb-0'>
                                <div className='border-2 text-start rounded-md px-5 py-6 md:px-3 md:pt-4 w-full'>
                                    <p className='text-md'>No AppleCare+ Coverage</p>
                                        
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-4 mx-0 rounded-lg md:w-4/5 md:ml-10 rounded-lg px-5 md:px-0'>
                        <div className='flex flex-row items-stretch jutify-center shadow w-full'>       
                            <Link href={'#'} className='w-28 bg-cover bg-no-repeat flex items-center justify-between' style={{backgroundImage:`url(/images/image4.avif)`}}></Link> 
                            <div className='text-sm flex flex-col item-center justify-center flex-1'>
                                <div className='p-4 bg-third-900'>
                                    <div className='flex items-center jutify-between'>
                                        <p className='font-medium'>How does trade-in work?</p>
                                        <LucideCirclePlus className='lucide_icone pb-0'  size={15}/>
                                    </div>
                                    <p className='text-xs text-wrap'>We'll help you exchange your eligible device for instant credit towards your new iPhone. See the step-by-step process.</p>
                                </div>
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MidSection; 
