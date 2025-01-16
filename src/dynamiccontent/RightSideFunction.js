'use client'
import React, { useState, useEffect } from 'react'
import Main from '@/components/Main'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";

import IphoneSlick from '@/carousel/IphoneSlick';
import IphoneNewSlick from '@/carousel/IphoneNewSlick';




const RightSideFunction = (props) => {
    
    const [selectedModel, setSelectedModel] = useState(false);
    const [selectedGB, setSelectedGB] = useState(false);
    const [hoveredColor, setHoveredColor] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [circledColor, setCircledColor] = useState('')


    const [displayPromo, setDisplayPromo] = useState(false);
    const [slides, SetSlides] = useState([
        {image: 'phone/iphone14/phone-image1.webp'},
        {image: 'phone/iphone14/phone-image2.webp'}
    ]);

    const colorImages = (code) => {
        if(selectedModel === false){
            return;
        }

        let updatedSlides = [];
        let updateIMage = [];
        setSelectedColor(code);
        props.modelColorSelected(code)

        if (code === 'red'){
            updateIMage.push('phone/iphone14/red/red4.webp')

            updatedSlides.push({image: 'phone/iphone14/red/red5.webp', label: 'iPhone 14'})
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'})
            
            setSelectedColor('Red')
        }else if(code === 'black'){

            updateIMage.push('phone/iphone14/black/black4.webp')
            updatedSlides.push({image: 'phone/iphone14/black/black6.webp', label: 'iPhone 14'})
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'})
            

            setSelectedColor('Black')

        }
        else if(code === 'blue'){

            
            updateIMage.push('phone/iphone14/blue/blue7.jpeg')
            updatedSlides.push({image: 'phone/iphone14/blue/blue5.jpeg', label: 'iPhone 14'})
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'})
            
            setSelectedColor('Blue')

        }
        else if(code === 'yellow'){
            
            updateIMage.push('phone/iphone14/yellow/yellow4.webp')
            updatedSlides.push({image: 'phone/iphone14/yellow/yellow5.webp', label: 'iPhone 14'})
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'})
            setSelectedColor('Yellow')
            
        }else if(code === 'purple'){
            
            updateIMage.push('phone/iphone14/purple/purple4.webp')
            updatedSlides.push({image: 'phone/iphone14/purple/purple6.webp', label: 'iPhone 14'})
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'})
            setSelectedColor('Purple')

        }else if (code === 'white'){

            updateIMage.push('phone/iphone14/white/white4.webp')
            updatedSlides.push({image: 'phone/iphone14/white/white6.webp', label: 'iPhone 14'});
            updatedSlides.push({image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'});

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

        props.updateImages(images[code], false);
        props.updateBottomImages(updatedSlides);
        props.upateMidSectionImage(updateIMage);
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
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full mt-5 md:mt-5 px-5 md:pd-0'>
                    <p className='text-xl font-semibold'>Model. Which is best for you?</p>
                </div> 
                
                <div className='w-full'>
                    <button type='button' className='w-full' onClick={() => {                       
                        const newSlides = [
                            {image: 'phone/iphone14/phone-image3.webp'},
                            {image: 'phone/iphone14/phone-image4.webp'},
                            {image: 'phone/iphone14/phone-image5.webp'},
                            {image: 'phone/iphone14/phone-image6.webp'},
                        ] 

                        let price = "From ₹9483.00/mo. with instant cashback and No Cost EMI or ₹59900.00"
                        let data = 'Your new iPhone awaits. Make it yours.'
                        setSelectedModel('14')
                        props.buttonClicked('14')
                        props.updateIphone14Price(price, true)
                        props.headingUpdate(data, true)
                        props.updateImages(newSlides, true)

                        // props.showImages(handleAddSlide);
                    }}
                    >
                        <div className={`border-2 rounded-lg mx-5 md:mx-0 my-0 mt-4 md:my-0 md:mt-5 ${selectedModel === '14' ? 'border-blue-400' : ''}`}>
                            <div className='flex items-center justify-between md:px-2 px-5 md:px-3 py-4'>
                                <div className='flex flex-col items-start justify-start' >
                                    <p className='text-lg md:text-sm py-1 font-semibold'>iPhone 14</p>
                                    <p className='text-xs md:text-xs py-0'>{`15.40 cm (6.1") display`}</p>
                                </div>
                                <div className='text-xs md:text-xs'>
                                    <p >From ₹10933.00/mo.</p>
                                    <div className='flex items-end justify-end'>
                                        <p >or ₹69600.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <div className='w-full'>
                    <button type='button' className='w-full' onClick={() => {
                        const newSlides = [

                            {image: 'phone/iphone14/phone-image3.webp'},
                            {image: 'phone/iphone14/phone-image4.webp'},
                            {image: 'phone/iphone14/phone-image5.webp'},
                            {image: 'phone/iphone14/phone-image6.webp'},
                        ]

                        
                        let price = "From ₹11150.00/mo. with instant cashback and No Cost EMI or ₹69900.00"    
                        let data = "Your new iPhone 14 Plus. Just the way you want it."
                        setSelectedModel('14plus')
                        props.buttonClicked('14plus')
                        props.updateIphone14Price(price, false)
                        props.headingUpdate(data, false)
                        props.updateImages(newSlides, true)
                    }}
                    >
                        <div className={`border-2 rounded-lg md:mx-0 mx-5 my-4 md:mb-5 ${selectedModel === '14plus' ? 'border border-blue-400' : ''}`}>
                            <div className='flex items-center justify-between md:px-2 px-5 md:px-3 py-4'>
                                <div className='flex flex-col items-start justify-start'>
                                    <p className='text-lg md:text-sm py-1 font-semibold'>iPhone 14 Plus</p>
                                    <p className='text-xs md:text-xs py-0'>{`16.50 cm (6.7") display`}</p>
                                </div>
                                <div className='text-xs md:text-xs'>
                                    <p >From ₹12600.00/mo.</p>
                                    <div className='flex items-end justify-end'>
                                        <p >or ₹79600.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                    

                <div className='px-5 md:px-0'>
                    <div className='flex flex-col px-3 py-3 rounded-md bg-third-900 w-full shadow'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-semibold'>Need help choosing a model?</p>
                            <LucideCirclePlus size={15}/>
                        </div>
                        <div className='flex items-start justify-start'>
                            <p className='text-sm font-normal'>Explore the differences in screen size and battery life.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-full px-5 md:px-0'>
                    <p className='text-xl'><span className='text-black font-semibold'>Finish.</span> Pick your favourite.</p>
                </div>

                <div>        
                    <div className={`mt-5 w-full px-5 md:px-0 ${(selectedModel === '14' || selectedModel === '14plus') ? 'opacity-100' : 'opacity-25'}`}>

                        <p className='text-xl'>Colour {(hoveredColor && (selectedModel === '14' || selectedModel === '14plus')) && `: ${hoveredColor}`}</p>
                    
                        <div className='flex flex-row items-start justify-start mt-5 pb-12'>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${(hoveredColor === 'blue' ? 'border rounded-full border-blue-400' : '' )} ${circledColor === 'blue' ? 'ring-2 ring-300 ring-offset-2' : ''}`} style={{height: 25, width: 25, backgroundColor: 'lightblue'}}
                                onMouseOver={() =>setHoveredColor('Blue')}  
                                onMouseLeave={() => setHoveredColor('Blue')}
                                onClick={() =>{
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('blue'); setCircledColor('blue')  
                                    }
                                }}>
                            </p>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${circledColor === 'yellow' ? 'ring-2 ring-300 ring-offset-2' : ''}`} style={{height: 25, width: 25, backgroundColor: 'yellow'}} 
                                onMouseOver={() =>setHoveredColor('Yellow')}  
                                onMouseLeave={() => setHoveredColor('Yellow')}
                                onClick={() =>{
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('yellow'); setCircledColor('yellow')
                                    }
                                }}>
                            </p>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${circledColor === 'black' ? 'ring-2 ring-300 ring-offset-2' : ''}`} style={{height: 25, width: 25, backgroundColor: 'black'}} 
                                onMouseOver={() =>setHoveredColor('Black')}  
                                onMouseLeave={() => setHoveredColor('Black')}
                                onClick={() =>{
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('black'); setCircledColor('black') 
                                    }  
                                }}>
                            </p>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${circledColor === 'purple' ? 'ring-2 ring-300 ring-offset-2' : ''}`} style={{height: 25, width: 25, backgroundColor: 'purple'}} 
                                onMouseOver={() =>setHoveredColor('Purple')}  
                                onMouseLeave={() => setHoveredColor('Purple')}
                                onClick={() => {
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('purple'); setCircledColor('purple')
                                    }
                                }}>
                            </p>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${circledColor === 'white' ? 'ring-2 ring-300 ring-offset-2' : ''}`} style={{height: 25, width: 25, backgroundColor: 'lightyellow'}}
                                onMouseOver={() =>setHoveredColor('Startlight')}  
                                onMouseLeave={() => setHoveredColor('Startlight')}
                                onClick={() =>{
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('white'); setCircledColor('white')
                                    }
                                }}>
                            </p>
                            <p className={`mx-1 shadow-md rounded-full ${(selectedModel === '14' || selectedModel === '14plus') ? 'cursor-pointer' : ''} ${circledColor === 'red' ? 'ring-2 ring-300 ring-offset-2' : ''} `} style={{height: 25, width: 25, backgroundColor: 'red'}}
                                onMouseOver={() =>setHoveredColor('Red')}  
                                onMouseLeave={() => setHoveredColor('Red')}
                                onClick={() => {
                                    if(selectedModel === '14' || selectedModel === '14plus'){
                                        colorImages('red'); setCircledColor('red')
                                    }
                                }}>
                            </p>
                            
                            <p className='pt-1 font-semibold text-sm text-red-500'><span className='md:text-sm'>(Product Red)</span></p>
                        </div>
                    </div>
                </div>
                

                <div className='mt-10 w-full pb-5 px-5 md:px-0'>
                    <p className='text-xl'><span className='text-black font-semibold'>Storage.</span> How much space do you need?</p>
                </div>

                <div className={`w-full ${selectedColor ? 'opacity-100' : 'opacity-30'}`}>
                    <button type='button' disabled={(selectedColor === '' || selectedModel === false) ? true : false} className='w-full' onClick={() => {
                        
                        setSelectedGB('128gb')
                        props.memorySelected('128gb');
                    }}>
                        <div className={`text-xs border-2 rounded-lg mt-5 md:w-full mx-5 md:mx-0 ${selectedGB === '128gb' ? 'border border-blue-500' : ''} `}>
                        
                            <div className='flex items-center justify-between py-6 px-6'>
                                <div className=''>
                                    <p className='text-xs'>128G</p>
                                </div>
                                <div className=''>
                                    <p className=''>From ₹10933.00/mo.</p>
                                    <div className='flex items-center justify-end'>
                                        <p className='py-0' >or ₹69600.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                    
                <div className={`w-full ${selectedColor ? 'opacity-100' : 'opacity-30'}`}>
                    <button type='button' disabled={(selectedColor === '' || selectedModel === false) ? true : false} className='w-full' onClick={() => {

                        setSelectedGB('256gb');
                        props.memorySelected('256gb');
                        
                    }}>
                        <div className={`text-xs border-2 rounded-lg mt-5 md:w-full mx-5 md:mx-0 ${selectedGB === '256gb' ? 'border border-blue-500' : ''} `}>
                            <div className='flex items-center justify-between py-6 px-6'>
                                <div className=''>
                                    <p className='py-1 text-xs'>256GB</p>
                                </div>
                                <div className=''>
                                    <p className=''>From ₹10933.00/mo.</p>
                                    <div className='flex items-end justify-end'>
                                        <p className='py-0' >or ₹69600.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div className={`w-full ${selectedColor ? 'opacity-100' : 'opacity-30'}`}>
                    <button type='button' disabled={(selectedColor === '' || selectedModel === 'false') ? true : false} className='w-full' onClick={() => {
                        
                        setSelectedGB('512gb');
                        props.memorySelected('512gb');
                        
                    }}>        
                        <div className={`text-xs border-2 rounded-lg mt-5 md:w-full mx-5 md:mx-0 ${selectedGB === '512gb' ? 'border border-blue-500' : ''} `}>
                            <div className='flex items-center justify-between py-6 px-6'>
                                <div className=''>
                                    <p className='text-sm'>512GB</p>
                                </div>
                                <div className=''>
                                    <p className='py-0'>From ₹10933.00/mo.</p>
                                    <div className='flex items-end justify-end'>
                                        <p >or ₹69600.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div> 

                <div className={`col-span-12 md:col-span-4 mx-0 rounded-lg md:full md:ml-0 rounded-lg px-5 md:px-0 my-5 ${selectedColor ? 'opacity-100' : 'opacity-30'}`}>
                    <div className='flex flex-row items-stretch jutify-center shadow w-full'>       
                        <Link href={'#'} className='w-28 bg-cover bg-no-repeat flex items-center justify-between' style={{backgroundImage:`url(/images/image4.avif)`}}></Link> 
                        <div className='text-sm flex flex-col item-center justify-center flex-1'>
                            <div className='p-4 bg-third-900'>
                                <div className='flex items-center jutify-between'>
                                    <p className='font-medium'>How does trade-in work?</p>
                                    <LucideCirclePlus className='lucide_icone pb-0'  size={15}/>
                                </div>
                                <p className='text-xs text-wrap'>{`We'll help you exchange your eligible device for instant credit towards your new iPhone. See the step-by-step process.`}</p>
                            </div>
                        </div>         
                    </div>
                </div>
            </div> 
        </>
    )
}

export default RightSideFunction; 
