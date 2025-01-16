'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";
import IphoneNewSlick from '@/carousel/IphoneNewSlick';
import ComparisonView from '@/dynamiccontent/ComparisonView'


const MidSection1 = (props) => {

    const [selectedModel, setSelectedModel] = useState(false);
    const [selectedGB, setSelectedGB] = useState(false)
    const [selectedColor, setSelectedColor] = useState('');
    const [count, setCount] = useState(0);
    
    const change_count = () =>{
        setCount(count +1);
    }

    return (
        <>
            <div className='w-full bg-third-900 mx-0 md:px-12 mt-20'>
                <div className='grid grid-cols-12 mt-10 md:gap-8 pt-10 md:pl-10 '>
                    <div className='col-span-12 md:col-span-4 pt-0'>
                        <p className='pb-5 text-4xl font-semibold px-6 md:px-0'>{props.heading}</p>
                        <div className='flex items-center justify-center'>
                            <img src={props.imageSrc} className="image03" style={{ color: "red" }} alt="" />
                        </div>
                    </div>


                    <div className='col-span-12 md:col-span-4 order-1'>
                        <div className='border-b'>
                            {/* Check if model, storage, or color is selected */}
                            {(props.modelSelected && props.gbSelected && props.colorSelected !== '') ? (
                                <>
                                    {/* If iPhone 14 is selected */}
                                    {props.modelSelected === '14' && (
                                        <div>
                                            <p>iPhone 14 {props.gbSelected === '128gb' ? '128GB' : props.gbSelected === '256gb' ? '256GB' : '512GB'} {props.colorSelected}</p>
                                            <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                                From {props.gbSelected === '128gb' ? '₹10933.00/mo' : props.gbSelected === '256gb' ? '₹12600.00/mo.' : '₹15933.00/mo.'} with instant cashback and No Cost EMI
                                            </p>
                                            <p>or</p>
                                            <p>MRP {props.gbSelected === '128gb' ? '₹69600.00' : props.gbSelected === '256gb' ? '₹79600.00' : '₹99600.00'}</p>
                                            <p>(Incl. of all taxes)</p>
                                            <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                        </div>
                                    )}

                                    {/* If iPhone 14 Plus is selected */}
                                    {props.modelSelected === '14plus' && (
                                        <div>
                                            <p>iPhone 14 Plus {props.gbSelected === '128gb' ? '128GB' : props.gbSelected === '256gb' ? '256GB' : '512GB'} {props.colorSelected}</p>
                                            <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                                From {props.gbSelected === '128gb' ? '₹12600.00/mo.' : props.gbSelected === '256gb' ? '₹14267.00/mo.' : '₹17600.00/mo.'} with instant cashback and No Cost EMI
                                            </p>
                                            <p>or</p>
                                            <p>MRP {props.gbSelected === '128gb' ? '₹79600.00' : props.gbSelected === '256gb' ? '₹89600.00' : '₹109600.00'}</p>
                                            <p>(Incl. of all taxes)</p>
                                            <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                // Show the price only once if no model, storage, or color is selected
                                <p className="px-5 md:px-0 py-5 text-md md:pb-6 font-semibold">{props.iphone14Price}</p>
                            )}
                        </div>
                        <div className='px-5 md:px-0 py-5 opacity-60'>
                            <p className='text-sm font-semibold'>Need a moment?</p>
                            <p className='text-sm'>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                            <div className='pt-1 text-blue-300 flex items-center justify-start flex-row'>
                                <Album size={20} />
                                <p className='text-sm pl-1'>Save for later</p>
                            </div>
                        </div>
                        <p className='text-sm py-5 px-5 md:px-0'>Delivery details for your area will be shown in checkout</p>
                    </div>


                     {/* <div className='col-span-12 md:col-span-4 order-1'>
                        <div className='border-b'>
                            {(props.modelSelected === '14' && props.gbSelected && props.colorSelected !== '') ?
                                (
                                    <div>
                                        <p>iPhone 14 {props.gbSelected === '128gb' ? '128GB' : props.gbSelected === '256gb' ? '256GB' : '512GB'} {props.colorSelected}</p>
                                        <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                            From {props.gbSelected === '128gb' ? '₹10933.00/mo' : props.gbSelected === '256gb' ? '₹12600.00/mo.' : '₹15933.00/mo.'} with instant cashback and No Cost EMI
                                        </p>
                                        <p>or</p>
                                        <p>MRP {props.gbSelected === '128gb' ? '₹69600.00' : props.gbSelected === '256gb' ? '₹79600.00' : '₹99600.00'}</p>
                                        <p>(Incl. of all taxes)</p>
                                        <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                    </div>
                                )
                                :
                                (
                                    <p className="px-5 md:px-0 py-5 text-md md:pb-6 font-semibold">{props.iphone14Price}</p>
                                )
                            }

                            {(props.modelSelected === '14plus' && props.gbSelected && props.colorSelected !== '') ?
                                (
                                    <div>
                                        <p>iPhone 14 Plus {props.gbSelected === '128gb' ? '128GB' : props.gbSelected === '256gb' ? '256GB' : '512GB'} {props.colorSelected}</p>
                                        <p className="px-5 md:px-0 py-5 text-md md:pb-0 font-semibold">
                                            From {props.gbSelected === '128gb' ? '₹12600.00/mo.' : props.gbSelected === '256gb' ? '₹14267.00/mo.' : '₹17600.00/mo.'} with instant cashback and No Cost EMI
                                        </p>
                                        <p>or</p>
                                        <p>MRP {props.gbSelected === '128gb' ? '₹79600.00' : props.gbSelected === '256gb' ? '₹89600.00' : '₹109600.00'}</p>
                                        <p>(Incl. of all taxes)</p>
                                        <p className="md:pt-5">Explore instant cashback and No Cost EMI</p>
                                    </div>
                                )
                                :
                                (
                                    <p className="px-5 md:px-0 py-5 text-md md:pb-6 font-semibold">{props.iphone14Price}</p>
                                )
                            }
                        </div>

                        <div className='px-5 md:px-0 py-5 opacity-60'>
                            <p className='text-sm font-semibold'>Need a moment?</p>
                            <p className='text-sm'>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                            <div className='pt-1 text-blue-300 flex items-center justify-start flex-row'>
                                <Album size={20} />
                                <p className='text-sm pl-1'>Save for later</p>
                            </div>
                        </div>
                        <p className='text-sm py-5 px-5 md:px-0'>Delivery details for your area will be shown in checkout</p>
                    </div> */}

                    <div className='col-span-12 md:col-span-4 text-sm md:pl-10 order-0 md:order-1 pb-3 md:pb-0'>
                        {(props.modelSelected === false || props.gbSelected === false || props.colorSelected === '') ?
                            <div>
                                <div className='flex items-center justify-start flex-row pl-5 md:pl-5'>
                                    <Truck size={22} />
                                    <p className='pl-2'>Free shipping</p>
                                </div>
                                <div className='flex items-center justify-start flex-row pt-1 pl-5 md:pl-5'>
                                    <ShoppingBag size={22} />
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
                                    <Truck size={22} />
                                    <div>
                                        <p className='pl-2'>Order by 9:00 pm. Delivers to 110011</p>
                                        <p className='font-semibold pl-2'>Tomorrow — Free</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start flex-row pt-5 pl-5 md:pl-5'>
                                    <ShoppingBag size={22} />
                                    <div>
                                        <p className='pl-2'>Order now. Pick up, in store:</p>
                                        <p className='pl-2'><span className='font-semibold'>Today</span> at Apple Saket</p>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <div className='flex items-center md:items-start justify-center md:justify-start'>
                                        <div className='pt-10 flex items-center justify-center md:mr-20'>
                                            <button className='border-2 rounded-md px-32 md:px-20 py-2 md:py-3 bg-blue-500 text-white' type='button' onClick={change_count}>Add to Bag {count}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>


            <div className='container mx-auto mt-10'>
                <div className='text-center'>
                    <p className='text-4xl font-semibold py-8'>{`What's in the Box`}</p>
                </div>
                
                <IphoneNewSlick newSlidesImg={props.newSlidesImg}/>
                
                {/* <IphoneNewSlick updateColorOnClick={(newImages, merge) =>{
                    if(merge === true)
                        setNewSlideImg([...newSlidesImg])
                    else{
                            setNewSlideImg([...newImages])
                    }
                 }}
                /> */}
                                
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
            </div>

            <ComparisonView />
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
            </div>  */}
        </>
    )
}

export default MidSection1; 
