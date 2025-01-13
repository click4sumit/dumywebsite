'use client'
import React, { useState, useEffect } from 'react'
import Main from '@/components/Main'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";
import IphoneSlick from '@/carousel/IphoneSlick';
import IphoneNewSlick from '@/carousel/IphoneNewSlick';
import OnScrollEvent from '@/dynamiccontent/OnScrollEvent'
import RightSideFunction from '@/dynamiccontent/RightSideFunction';
import FAQSection from '@/dynamiccontent/FAQSection';
import MidSection from '@/dynamiccontent/MidSection';
import MidSection1 from '@/dynamiccontent/MidSection1';

const Iphone14 = () => {
    const [passingData, setPassingData] = useState("")
    const [isOpen, SetIsOpen] = useState(false);
    const [displayPromo, setDisplayPromo] = useState(false);

    const [selectedModel, setSelectedModel] = useState(false);
    const [selectedGB, setSelectedGB] = useState(false)
    const [hoveredColor, setHoveredColor] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [dynamicContent, setDynamicContent] = useState('Your new iPhone awaits. Make it yours.')
    const [dynamicPriceChnage, setDynamicPriceChnage ] = useState('From ₹9483.00/mo. with instant cashback and No Cost EMI or ₹59900.00')
    const [imageSrc, setImageSrc] = useState('phone/iphone14/image04.jpeg')
    const [circledColor, setCircledColor] = useState('')
    // const [comment, setComment] = useState('')

    // const addText = (event) => {
    //     setComment(event.target.value);
    // }
    // const [inputText, setInputText] = useState('');
    // const [comment, setComment] = useState('');

    // // Function to handle input changes
    // const handleInputChange = (event) => {
    //     setInputText(event.target.value); // Update inputText with the current input value
    // };

    // // Function to handle the Save button click
    // const handleSaveClick = () => {
    //     setComment(inputText); // Update comment with the value of inputText when Save is clicked
    //     setInputText("")
    // };



    const [inputText, setInputText] = useState(''); // For holding the current input
    const [comments, setComments] = useState([]);   // For holding the list of comments

    // Function to handle input changes
    const handleInputChange = (event) => {
        setInputText(event.target.value); // Update inputText with the current input value
    };

    // Function to handle the Save button click
    const handleSaveClick = () => {
        
        // Append the current inputText to the comments array
        setComments([...comments, inputText]);
        setInputText(''); // Clear the input field
    };

    const [initial_slides, setInitialSlides] = useState([
        {image: 'phone/iphone14/phone-image1.webp'},
        {image: 'phone/iphone14/phone-image2.webp'}
    ]);

    const [slides, setSlides] = useState([
        {image: 'phone/iphone14/phone-image1.webp'},
        {image: 'phone/iphone14/phone-image2.webp'}
    ]);

    const [newSlidesImg, setNewSlideImg] = useState([
        {image: 'phone/iphone14/blue/blue5.jpeg', label: 'iPhone 14'},
        {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    ])

    const [do_reset, setDoReset] = useState(false)

    // const handleAddSlide = () => {
    //     const newSlides = [
    //         {image: 'phone/iphone14/phone-image3.webp'},
    //         {image: 'phone/iphone14/phone-image4.webp'},
    //         {image: 'phone/iphone14/phone-image5.webp'},
    //         {image: 'phone/iphone14/phone-image6.webp'}

    //     ]

    //     setSlides(prevSlides => [...prevSlides, ...newSlides])
    // }

    // const colorImages = (code) => {
    //     if(selectedModel === false){
    //         return;
    //     }
    //     setSelectedColor(code);

    //     if (code === 'red'){
    //         setImageSrc('phone/iphone14/red/red4.webp')

    //         setNewSlideImg([
    //             {image: 'phone/iphone14/red/red5.webp', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])
    //         setSelectedColor('Red')
    //     }else if(code === 'black'){

    //         setImageSrc('phone/iphone14/black/black4.webp')
    //         setNewSlideImg([
    //             {image: 'phone/iphone14/black/black6.webp', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])

    //         setSelectedColor('Black')
    //     }
    //     else if(code === 'blue'){
    //         setImageSrc('phone/iphone14/blue/blue7.jpeg')
    //         setNewSlideImg([
    //             {image: 'phone/iphone14/blue/blue5.jpeg', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])
    //         setSelectedColor('Blue')
    //     }
    //     else if(code === 'yellow'){
    //         setImageSrc('phone/iphone14/yellow/yellow4.webp')

    //         setNewSlideImg([
    //             {image: 'phone/iphone14/yellow/yellow5.webp', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])
    //         setSelectedColor('Yellow')
            
    //     }else if(code === 'purple'){
    //         setImageSrc('phone/iphone14/purple/purple4.webp')

    //         setNewSlideImg([
    //             {image: 'phone/iphone14/purple/purple6.webp', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])
    //         setSelectedColor('Purple')

    //     }else if (code === 'white'){
    //         setImageSrc('phone/iphone14/white/white4.webp')

    //         setNewSlideImg([
    //             {image: 'phone/iphone14/white/white6.webp', label: 'iPhone 14'},
    //             {image: 'phone/iphone14/image06.jpeg', label: 'USB-C to Lightning Cable'}
    //         ])
    //         setSelectedColor('White')
    //     }

    //     let images = [];
    //     images['blue'] = [
    //         {image: 'phone/iphone14/blue/blue1.webp'},
    //         {image: 'phone/iphone14/blue/blue2.webp'},
    //         {image: 'phone/iphone14/blue/blue3.webp'},
    //     ]
    //     images['yellow'] = [
    //         {image: 'phone/iphone14/yellow/yellow-1.webp'},
    //         {image: 'phone/iphone14/yellow/yellow-2.webp'},
    //         {image: 'phone/iphone14/yellow/yellow-3.webp'},   
    //     ]
    //     images['black'] = [
    //         {image: 'phone/iphone14/black/black1.webp'},
    //         {image: 'phone/iphone14/black/black2.webp'},
    //         {image: 'phone/iphone14/black/black3.webp'},
    //     ]
    //     images['purple'] = [
    //         {image: 'phone/iphone14/purple/purple1.webp'},
    //         {image: 'phone/iphone14/purple/purple2.webp'},
    //         {image: 'phone/iphone14/purple/purple3.webp'},    
    //     ]
    //     images['white'] = [
    //         {image: 'phone/iphone14/white/white1.webp'},
    //         {image: 'phone/iphone14/white/white2.webp'},
    //         {image: 'phone/iphone14/white/white3.webp'},          
    //     ]
    //     images['red'] = [
    //         {image: 'phone/iphone14/red/red1.webp'},
    //         {image: 'phone/iphone14/red/red2.webp'},
    //         {image: 'phone/iphone14/red/red3.webp'},     
    //     ]
    //     setSlides(images[code])
    // }

    // useEffect(() => {

    //     window.addEventListener('scroll', handleScroll)
    // }, [])

    // const handleScroll = () => {
    //     const position = window.scrollY
    //     if(position > 300){
    //         setDisplayPromo(true)
    //     }else{
    //         setDisplayPromo(false)
    //     }

    //     if(position > 4000){
    //         setDisplayPromo(false)
    //     }
    // }

    return (
        <Main
            page = "iphone14"
        >
            
            <OnScrollEvent />
            
            <div className="text-black py-5 text-sm font-normal w-full mt-10 bg-third-900">
                <div className="flex justify-center items-center text-center mx-auto">
                    <span className='px-5 md:px-0'>Get up to ₹5000.00 instant cashback on selected iPhone models with eligible American Express, Axis Bank and ICICI Bank cards.<sub><a href="#">‡</a></sub> 
                        <Link className="text-blue-600" href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro" target="blank"> Learn More </Link>
                    </span>                        
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='md:flex md:justify-between md:mt-20 md:py-0 py-10'>
                    <div className='md:ml-16 px-8 md:px-0'>
                        <p className='md:text-5xl text-4xl font-semibold md:px-0'>Buy iPhone 14</p>
                        <p className='md:py-5 py-2 text-sm font-normal md:px-0'>From ₹10933.00/mo. with instant cashback and No Cost EMI§ or ₹69600.00F</p>
                    </div>
                    <div className='flex flex-col md:items-end items-start justify-start md:justify-end px-8 md:mb-6 md:mr-16 md:pt-0 py-5'>
                        <div className='flex flex-col md:items-end items-start md:justify-end justify-start'>
                            <div className='flex items-center justify-center px-3 py-3 rounded-full bg-third-900'>
                                <p className='mr-2 text-xs border-none rounded-full' >Get ₹5000.00-₹61045.00 for your trade-in.</p>
                                <LucideCirclePlus size={15}/>
                            </div>
                            <div className='mt-3 flex items-end justify-end px-3 py-3 rounded-full bg-third-900'>
                                <p className='mr-2 text-xs border-none rounded-full'>Instant Cashback and No-Cost EMI §</p>
                                <LucideCirclePlus size={15}/>
                            </div>
                        </div>                        
                    </div>    
                </div>
            </div>

            
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 relative mx-0'>
                    <div className='col-span-12 md:col-span-9 md:sticky top-0 self-start'>
                        
                        <IphoneSlick
                            slides={slides}
                            reset={do_reset}
                            updateReset={() => {

                                setDoReset(false)
                            }}
                        />

                    </div>
                    <div className='col-span-12 md:col-span-3 px-0 md:ml-0 relative'>
                        <RightSideFunction

                            updateImages={(images, merge) => {

                                if(merge === true){

                                    setSlides([...initial_slides, ...images])
                                }else{

                                    setSlides([...images])
                                }

                                setDoReset(true)
                            }}

                            updateBottomImages={(images) => {
                                
                                setNewSlideImg(images)
                            }}

                            upateMidSectionImage={(images) => {
                                setImageSrc(images)
                            }}

                            headingUpdate={(data, isIphone14) => {
                                if(isIphone14 === true){
                                    setDynamicContent(data)
                                }else{
                                    setDynamicContent(data)
                                }  
                            }}

                            updateIphone14Price = {(price, checkModel) =>{
                                if(checkModel === true){
                                    setDynamicPriceChnage(price)   
                                }else{
                                    setDynamicPriceChnage(price)
                                }
                            }}
                            buttonClicked = {(model) => {
                                setSelectedModel(model)
                                
                            }}

                            memorySelected = {(gbValue) => {
                                setSelectedGB(gbValue)
                            }}

                            modelColorSelected = {(code) =>{
                                setSelectedColor(code)
                            }}
                        />
                    </div>    
                </div>
                
                <MidSection />

                    {/* <div className='container mt-32 mx-0'>
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
                    </div> */}

                    {/* <div className='container mt-16 mx-0'>
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
                    </div> */}
            </div>
            
                <MidSection1

                    newSlidesImg={newSlidesImg}
                    imageSrc={imageSrc}
                    heading = {dynamicContent}  
                    iphone14Price = {dynamicPriceChnage}
                    modelSelected = {selectedModel}
                    gbSelected = {selectedGB}
                    colorSelected = {selectedColor}


                />

                {/* <div className='w-full bg-third-900 mx-0 md:px-12 mt-20'>
                    <div className='grid grid-cols-12 mt-10 md:gap-8 pt-10 md:pl-10 '>
                        <div className='col-span-12 md:col-span-4 pt-0'>
                            <p className='pb-5 text-4xl font-semibold px-6 md:px-0'>{dynamicContent}</p>
                            <div className='flex items-center justify-center'>
                                <img src={imageSrc} className="image03"  style={{color :"red"}} alt="" />
                            </div>
                        </div>
                    <div className='col-span-12 md:col-span-4 order-1'>
                        <div className='border-b'>    
                            {(selectedModel === '14' && selectedGB && selectedColor !== '') 
                                ?
                                    (
                                        <div className="">
                                            <p>iPhone 14 {selectedGB === '128gb' ? '128GB' : selectedGB === '256gb' ? '256GB' : '512GB'} {selectedColor}</p>
                                            <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                            From {selectedGB === '128gb' ? '₹10933.00/mo' : selectedGB === '256gb' ? '₹12600.00/mo.' : '₹15933.00/mo.'} with instant cashback and No Cost EMI
                                            </p>
                                            <p>or</p>
                                            <p>MRP {selectedGB === '128gb' ? '₹69600.00' : selectedGB === '256gb' ? '₹79600.00' : '₹99600.00'}</p>
                                            <p>(Incl. of all taxes)</p>
                                            <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                        </div>
                                    ) 
                                : 
                                    (
                                    <p className="px-5 md:px-0 py-5 text-md md:pb-6 font-semibold">{dynamicPriceChnage}</p>
                                    )
                            }

                            {(selectedModel === '14plus' && selectedGB && selectedColor !== '') 
                            
                                ?
                                    (
                                        <div className="">
                                            <p>iPhone 14 Plus {selectedGB === '128gb' ? '128GB' : selectedGB === '256gb' ? '256GB' : '512GB'} {selectedColor}</p>
                                            <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                            From {selectedGB === '128gb' ? '₹12600.00/mo.' : selectedGB === '256gb' ? '₹14267.00/mo.' : '₹17600.00/mo.'} with instant cashback and No Cost EMI
                                            </p>
                                            <p>or</p>
                                            <p>MRP {selectedGB === '128gb' ? '₹79600.00' : selectedGB === '256gb' ? '₹89600.00' : '₹109600.00'}</p>
                                            <p>(Incl. of all taxes)</p>
                                            <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                        </div>
                                    ) 
                                
                                : 
                                
                                    (
                                    <p className="px-5 md:px-0 py-5 text-md md:pb-6 font-semibold">{dynamicPriceChnage}</p>
                                    )
                            }   
                        </div>    
                        <div className='px-5 md:px-0 py-5 opacity-60'>
                            <p className='text-sm font-semibold'>Need a moment?</p>
                            <p className='text-sm'>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>    
                            <div className='pt-1 text-blue-300 flex items-center justify-start flex-row'>
                                <Album size={20}/>
                                <p className='text-sm pl-1'>Save for later</p>
                            </div>
                        </div>                       
                        <p className='text-sm py-5 px-5 md:px-0'>Delivery details for you area will be shown in checkout</p>
                    </div>

                    <div className='col-span-12 md:col-span-4 text-sm md:pl-10 order-0 md:order-1 pb-3 md:pb-0'>

                        {(selectedModel === false || selectedGB === false || selectedColor === '')
                            ?
                                <div className=''>
                                    <div className='flex items-center justify-start flex-row pl-5 md:pl-5'>
                                        <Truck size={22}/>
                                        <p className='pl-2'>Free shipping</p>    
                                    </div>
                                    <div className='flex items-center justify-start flex-row pt-1 pl-5 md:pl-5'>
                                        <ShoppingBag size={22}/>
                                        <p className='pl-2'>Pick up from Store</p>    
                                    </div>
                                    <div className='flex items-center md:items-start justify-center md:justify-start'>
                                        <div className='pt-10 flex items-center justify-center md:mr-20'>
                                            <Link href={"#"}>
                                                <p className='border-2 rounded-md px-32 md:px-20 py-2 md:py-1 bg-blue-500 text-white'>Continue</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div> 
                                    <div className='flex items-center justify-start flex-row pl-5 md:pl-5'>
                                        <Truck size={22}/>
                                        <div>
                                            <p className='pl-2'>Order by 9:00 pm. Delivers to 110011</p>
                                            <p className='font-semibold pl-2'>Tomorrow — Free</p>
                                        </div>  
                                    </div>
                                    <div className='flex items-center justify-start flex-row pt-1 pl-5 md:pl-5'>
                                        <ShoppingBag size={22}/>
                                        <div>
                                            <p className='pl-2'>Order now. Pick up, in store:</p>   
                                            <p className='pl-2'><span className='font-semibold'>Today</span> at Apple Saket</p>
                                        </div>
                                    </div>
                                    
                                    <div className='w-full'>
                                        <div className='flex items-center md:items-start justify-center md:justify-start'>
                                            <div className='pt-10 flex items-center justify-center md:mr-20'>
                                                <button className='border-2 rounded-md px-32 md:px-20 py-2 md:py-3 bg-blue-500 text-white' type='button'>Add to Bag</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div> */}

                {/* <div className='container mx-auto mt-10'>
                    <div className='text-center'>
                        <p className='text-4xl font-semibold py-8'>What's in the Box</p>
                    </div>
                    <IphoneNewSlick newSlidesImg={newSlidesImg}


                    />
                    <div className='text-center mt-10 md:mt-10 text-sm font-normal'>
                        <p>Our environmental goals.</p>
                        <p className='my-10 px-10'>As part of our efforts to reach <span className='underline text-blue-500'>carbon neutrality by 2030,</span> iPhone 14 and iPhone 14 Plus do not include a power adapter or EarPods.
                            Included in the box is a USB‑C to Lightning Cable that supports charging and is compatible with USB‑C power adapters and computer ports.</p>
                        <p className='px-10'>We encourage you to re‑use your current USB‑A to Lightning cables, power adapters and headphones that are compatible with these iPhone models. 
                            But if you need any new Apple power adapters or headphones, they are available for purchase.</p>
                    </div>

                    <div>
                        <div className='text-center text-3xl font-semibold mt-28 px-3 md:px-0'>
                            <p className=''>Your new iPhone comes</p>
                            <p> with so much more.</p>
                        </div>
                        <div className='grid grid-cols-12 mt-12'>

                            <div className='col-span-12 md:col-span-4 md:pl-32 pl-12 md:px-0'>
                                <div className='flex items-center justify-center md:flex-col '>
                                    <img className='h-12 w-12' src="phone/iphone14/logo1.jpeg" alt="" />
                                    <div className='flex flex-col md:items-center px-10 md:px-0'>
                                        <p className='mt-3 text-md font-semibold'>Apple TV+</p>
                                        <p className='text-sm md:text-center py-2 md:py-0'>3 free months of original films and series.°°</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-4 md:px-20 pl-12 md:px-0'>
                                <div className='flex items-center justify-center md:flex-col '>
                                    <img className='h-12 w-12' src="phone/iphone14/logo2.jpeg" alt="" />
                                    <div className='flex flex-col md:items-center px-10 md:px-0'>
                                        <p className='mt-3 text-md font-semibold'>Apple Music</p>
                                        <p className='text-sm md:text-center'>3 free months of all your favorite songs — all ad-free.°°</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-4 md:pr-32 pl-12 md:px-0'>
                                <div className='flex items-center justify-center md:flex-col '>
                                    <img className='h-12 w-12' src="phone/iphone14/logo3.jpeg" alt="" />
                                <div className='flex flex-col md:items-center px-10 md:px-0'>
                                        <p className='mt-3 text-md font-semibold'>Apple Arcade</p>
                                        <p className='text-sm md:text-center'>3 free months of incredibly fun, uninterrupted gameplay.°°</p>
                                </div>
                                    
                                </div>
                            </div>   
                        </div>
                    </div>
                </div> */}

            {/* <div className='mt-32 gap-2 mb-5'>
                    <p className='text-center text-3xl md:font-bold font-medium px-10 md:px-0'>Which iPhone is right for you?</p>
                    <div className='grid grid-cols-12 mt-20 md:mx-28'>
                        <div className='col-span-6 md:col-span-3'>
                            <div className='flex items-center justify-center flex-col'>  
                                <Link className='flex items-center justify-center flex-col' href={"#"}>                      
                                    <img className='image02 md:h-64 md:w-48' src="phone/iphone14/image07.jpeg" alt="" />
                                    <div className='mt-5 pt-0'>  
                                        <div className='flex flex-row items-start justify-start'>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'silver', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'lightgrey', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-center pt-3'>New</p>
                                    <p className='pt-2 text-xl font-bold'>iPhone 15 Pro</p>
                                    <p className='text-md text-center'>The ultimate iPhone.</p>
                                    <p className='pt-5 text-sm text-center'>From ₹129800.00§</p>
                                    <hr className='w-36 font-bold my-10' />
                                </Link>
                                <p className='pt-1 text-md font-medium'>17.00 cm (6.7″) or</p>
                                <p className='text-md font-medium'>15.54 cm (6.1″)</p>
                                <p className='pt-1 text-sm text-center'>Super Retina XDR display¹</p>
                                <p className='pt-1 text-sm text-center'>ProMotion technology</p>
                                <p className='pt-1 text-sm text-center'>Always-On display</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>
                                <hr className='w-36 font-bold my-10' />
                            </div>
                        </div>

                        <div className='col-span-6 md:col-span-3'>
                            <div className='flex items-center justify-center flex-col '>
                                <Link className='flex items-center justify-center flex-col' href={"#"}>                        
                                    <img className='image02 md:h-64 md:w-48' src="phone/iphone14/image08.jpeg" alt="" />
                                    <div className='mt-5 pt-0'>  
                                        <div className='flex flex-row items-start justify-start'>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'pink', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'green', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'silver', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'lightgrey', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-center pt-3'>New</p>
                                    <p className='pt-2 text-xl font-bold'>iPhone 15</p>
                                    <p className='text-md text-center'>A total powerhouse.</p>
                                    <p className='pt-5 text-sm text-center'>From ₹79600.00§</p>
                                    <hr className='w-36 font-bold my-10' />
                                </Link>
                                <p className='pt-1 text-md font-medium'>17.00 cm (6.7″) or</p>
                                <p className='text-md font-medium'>15.54 cm (6.1″)</p>
                                <p className='pt-1 text-sm text-center'>Super Retina XDR display¹</p>
                                <p className='pt-1 text-sm text-center'>—</p>
                                <p className='pt-1 text-sm text-center'>—</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>
                                <hr className='w-36 font-bold my-10' />
                            </div>
                        </div>

                        <div className='col-span-6 md:col-span-3'>
                            <div className='flex items-center justify-center flex-col '>  
                                <Link className='flex items-center justify-center flex-col' href={"#"} >                      
                                    <img className='image02 md:h-64 md:w-48' src="phone/iphone14/image09.jpeg" alt="" />
                                    <div className='mt-5 pt-0'>  
                                        <div className='flex flex-row items-start justify-start'>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'pink', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'silver', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'lightgrey', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-center pt-3'>New</p>
                                    <p className='pt-2 text-xl font-bold'>iPhone 14</p>
                                    <p className='text-md text-center'>A total powerhouse.</p>
                                    <p className='pt-5 text-sm text-center'>From ₹69600.00§</p>
                                    <hr className='w-36 font-bold my-10' />
                                </Link>
                                <p className='pt-1 text-md font-medium'>16.95 cm (6.7″) or</p>
                                <p className='text-md font-medium'>15.40 cm (6.1″)</p>
                                <p className='pt-1 text-sm text-center'>Super Retina XDR display¹</p>
                                <p className='pt-1 text-sm text-center'>—</p>
                                <p className='pt-1 text-sm text-center'>—</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>
                                <hr className='w-36 font-bold my-10' />
                            </div>
                        </div>

                        <div className='col-span-6 md:col-span-3'>
                            <div className='flex items-center justify-center flex-col'>  
                                <Link className='flex items-center justify-center flex-col' href={"#"}>                      
                                    <img className='image02 md:h-64 md:w-48' src="phone/iphone14/image10.jpg" alt="" />
                                    <div className='mt-5 pt-0'>  
                                        <div className='flex flex-row items-start justify-start'>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'silver', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'lightgrey', borderRadius: 100, cursor : "Pointer" }}></p>
                                            <p className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: 'black', borderRadius: 100, cursor : "Pointer" }}></p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-center pt-3'>New</p>
                                    <p className='pt-2 text-xl font-bold'>iPhone SE</p>
                                    <p className='text-md text-center'>Serious power. Serious value.</p>
                                    <p className='pt-5 text-sm text-center'>From ₹47600.00§</p>
                                    <hr className='w-36 font-bold my-10' />
                                </Link>
                                <p className='pt-1 text-md font-medium'>11.94 cm (6.7″) or</p>
                                <p className='text-md font-medium'>(4.7″)</p>
                                <p className='pt-1 text-sm text-center'>Retina HD display</p>
                                <p className='pt-1 text-sm text-center'>—</p>
                                <p className='pt-1 text-sm text-center'>—</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>

                                <img className='mt-16 h-12 w-12' src="phone/iphone14/logo4.jpeg" alt=""  />
                                <p className='pt-1 text-sm text-center'>Titanium with textured matt</p>
                                <p className='text-sm text-center'>glass back</p>
                                <p className='pt-1 text-sm text-center'>Action button</p>
                                <hr className='w-36 font-bold my-10' />
                            </div>
                        </div>                  
                    </div>
                </div> */}

            <div className='my-24 md:my-10'>
                <Link href={"#"}>
                    <p className='text-blue-500 hover hover:underline text-center text-md font-semibold'>Compare all iPhone models</p>
                </Link>   
            </div>

            <FAQSection/>  


                    <div className='container mt-5'>
                        <div className='pl-20 text-semibold'>
                            <div>
                                <p>Comment</p>
                                <div>
                                    <input
                                        className='border-solid border-2 border-indigo-300 my-3'
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => {

                                            setInputText(e.target.value)
                                        }}
                                    />
                                    <button
                                        className='border-2 rounded-md px-2 py-1 bg-blue-500 text-white ml-5'
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div>
                                {comments.map((comment, index) => (
                                    <p key={index}>{comment}</p>
                                ))}
                            </div>
                        </div>
                    </div>
 

            {/* <div className='container mt-5'>
                <div className='pl-20 text-semibold'>
                    <div>
                        <p>Comment</p>
                        <div>
                            <input className='border-solid border-2 border-indigo-300 my-3' type="text" value={inputText} onChange={handleInputChange} />
                            <button className='border-2 rounded-md px-2 py-1 bg-blue-500 text-white ml-5' onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                    
                    <div>
                        <p>{comment}</p>
                    </div>
                </div>
            </div> */}
    </Main>
    )
}

export default Iphone14
