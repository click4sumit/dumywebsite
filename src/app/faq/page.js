'use client'

import React, { useEffect, useState } from 'react'
import Main from '@/components/Main'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";

const Faq = () => {

    const [isOpen, SetIsOpen] = useState(false);
    const [displayProo, SetDisplayPromo] = useState(false)

    useEffect(()=>{
        window.addEventListener ( 'scroll', handleScroll)
        
    }, [])

    const handleScroll = () => {
        const position = window.scrollY

        if (position > 300){
            SetDisplayPromo(true)
        }else {
            SetDisplayPromo(false)
        }
    }

    return (
        <Main
            page = "faq"
        >
            <div className={`top-0 left-0 w-full z-50 fixed promo-block ${displayProo === true ? 'show' : ''} `}>
                <div className='px-20 py-2'>
                    <div className='text-xl py-2 font-semibold flex items-center justify-between'>
                        <p>iphone</p>
                        <p>From ₹10933.00/mo. with instant cashback§§ and No Cost EMI§ or ₹69600.00‡</p>
                    </div>
                        <hr className='w-full ' />
                    <div className='flex flex-row items-end justify-end w-full py-2 text-sm'>
                        <div className='pr-5 flex items-center justify-between'>
                            <Truck />
                            <p className='pl-2'>Free shipping</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <ShoppingBag />
                            <p className='pl-2'>Pick up from Store</p>
                        </div>        
                    </div>
                </div>
            </div>


            <div className='container mx-auto mt-20'>
                <div className='mx-28 mt-0'>
                    <Link href={"#"}>
                        <div className='flex flex-row items-center justify-between' onClick={()=>{

                        SetIsOpen(isOpen === 0 ? false : 0)  

                        // if(isOpen === 0){
                        //     SetIsOpen(false)
                        // }else{
                        //     SetIsOpen(0)
                        // }
                        }}>
                            <p className='text-3xl font-bold'>Frequently Asked Questions</p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown className={`transition ${isOpen === 0 ? 'rotate-180' : ''}`}  size={50}/>        
                                </div>
                            
                        </div>
                    </Link>
                <div className={`${isOpen === 0 ? 'hidden' : ''}`}>
                    <Link href={'#'}>
                        <div className='px-0'>
                            <hr className='my-5' />
                            <div className='flex flex-row items-center justify-between' onClick={()=>{

                                SetIsOpen(isOpen === 1 ? false : 1)  

                                // if(isOpen === 0){
                                //     SetIsOpen(false)
                                // }else{
                                //     SetIsOpen(0)
                                // }
                                }}>
                                <p>Why should I buy a SIM-free iPhone on apple.com? ---- 1</p>
                                <div className='w-12 flex items-center justify-center' >
                                    <ChevronDown className={ `transition ${isOpen === 1 ? 'rotate-180' : ''} `} size={30} onClick={() => {
                                        if(isOpen === 1){
                                            SetIsOpen(false)
                                        }else{
                                            SetIsOpen(1)
                                        }
                                        SetIsOpen(isOpen === 1 ? false : 1)
                                    }} />    
                                </div>
                                
                            </div>
                        </div>
                    </Link>

                    <div className={`${isOpen === 1 ? '' : 'hidden' }`}>
                        <p className='text-xs pt-10 px-0'>An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                         service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                         it remains unlocked, which means you can use it with any network that provides service for iPhone.</p>
                    </div>

                    <Link href={'#'}>
                        <div className=''>
                            <hr className='my-5' />
                            <div className='flex flex-row items-center justify-between' 
                            onClick={()=>{

                                SetIsOpen(isOpen === 2 ? false : 2)  

                                // if(isOpen === 0){
                                //     SetIsOpen(false)
                                // }else{
                                //     SetIsOpen(0)
                                // }
                                }}>
                                <p>Why should I buy a SIM-free iPhone on apple.com? ---- 2 </p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown className={ `transition ${isOpen === 2 ? 'rotate-180' : ''}`} size={30} onClick={() => {
                                    if(isOpen === 2){
                                        SetIsOpen(false)
                                    }else{
                                        SetIsOpen(2)
                                    }
                                    SetIsOpen(isOpen === 2 ? false : 2)
                                    }} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={`${isOpen === 2 ? '' : 'hidden' }`}>
                        <p className='text-xs pt-10 px-0'>An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                         service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                         it remains unlocked, which means you can use it with any network that provides service for iPhone.</p>
                    </div>

                    <Link href={'#'}>
                        <div className=''>
                            <hr className='my-5' />
                            <div className='flex flex-row items-center justify-between' 
                            onClick={()=>{

                                SetIsOpen(isOpen === 3 ? false : 3)  

                                // if(isOpen === 0){
                                //     SetIsOpen(false)
                                // }else{
                                //     SetIsOpen(0)
                                // }
                                }}>
                                <p>Why should I buy a SIM-free iPhone on apple.com? ---- 3 </p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown className={ `transition ${isOpen === 3 ? 'rotate-180' : ''}`} size={30} onClick={() => {
                                    if(isOpen === 3){
                                        SetIsOpen(false)
                                    }else{
                                        SetIsOpen(3)
                                    }
                                    SetIsOpen(isOpen === 3 ? false : 3)
                                    }} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={`${isOpen === 3 ? '' : 'hidden' }`}>
                        <p className='text-xs pt-10 px-0'>An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                         service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                         it remains unlocked, which means you can use it with any network that provides service for iPhone.</p>
                    </div>

                    <Link href={'#'}>
                        <div className=''>
                            <hr className='my-5' />
                            <div className='flex flex-row items-center justify-between' 
                            onClick={()=>{

                                SetIsOpen(isOpen === 4 ? false : 4)  

                                // if(isOpen === 0){
                                //     SetIsOpen(false)
                                // }else{
                                //     SetIsOpen(0)
                                // }
                                }}>
                                <p>Why should I buy a SIM-free iPhone on apple.com? ---- 4 </p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown className={ `transition ${isOpen === 4 ? 'rotate-180' : ''}`} size={30} onClick={() => {
                                    if(isOpen === 4){
                                        SetIsOpen(false)
                                    }else{
                                        SetIsOpen(4)
                                    }
                                    SetIsOpen(isOpen === 4 ? false : 4)
                                    }} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={`${isOpen === 4 ? '' : 'hidden' }`}>
                        <p className='text-xs pt-10 px-0'>An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                         service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                         it remains unlocked, which means you can use it with any network that provides service for iPhone.</p>
                    </div>
                </div>


                </div>    
            </div>

        </Main>
    )
}

export default Faq
