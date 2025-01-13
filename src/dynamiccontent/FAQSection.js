'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";




const FAQSection = (props) => {

    const [isOpen, SetIsOpen] = useState(false);

    return (

        <>
         <div className='container mx-auto mb-8'>
                <div className='mx-5 md:mx-28'>
                    <div className='border-t border-b py-5'>
                        <div className='flex items-center justify-between' onClick={() => {
                            SetIsOpen(isOpen === 0 ? false : 0)
                        }}>
                            <p className='text-2xl md:text-4xl font-bold'>Frequently Asked Questions</p>
                            <div className='w-12 flex items-center justify-center'>
                                <ChevronDown className={`transition ${isOpen === 0 ? '' : 'rotate-180'}`} size={50} />
                            </div>
                        </div>
                    </div>

                    <div className={`${isOpen === 0 ? 'hidden' : ''}`}>
                        <div className=''>
                            <div className='flex items-center justify-between md:my-0 md:py-5 pl-2 md:pl-0 py-5 md:py-0'>
                                <p className='text-sm font-semibold'>Why should I buy a SIM-free iPhone on apple.com?---1</p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown
                                        className={`transition ${isOpen === 1 ? 'rotate-180' : ''}`}
                                        size={20}
                                        onClick={() => {
                                            SetIsOpen(isOpen === 1 ? false : 1)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={`${isOpen === 1 ? '' : 'hidden'}`}>
                                <p className='text-sm px-3 md:px-0 py-2 md:py-0 md:pb-2'>
                                    An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                                    service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                                    it remains unlocked, which means you can use it with any network that provides service for iPhone.
                                </p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex items-center justify-between md:my-0 md:py-5 pl-2 md:pl-0 py-5 md:py-0 border-t'>
                                <p className='text-sm font-semibold'>Why should I buy a SIM-free iPhone on apple.com?---2</p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown
                                        className={`transition ${isOpen === 2 ? 'rotate-180' : ''}`}
                                        size={20}
                                        onClick={() => {
                                            SetIsOpen(isOpen === 2 ? false : 2)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={`${isOpen === 2 ? '' : 'hidden'}`}>
                                <p className='text-sm px-3 md:px-0 py-2 md:py-0 md:pb-2'>
                                    An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                                    service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                                    it remains unlocked, which means you can use it with any network that provides service for iPhone.
                                </p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex items-center justify-between md:mb-2 md:py-5 pl-2 md:pl-0 py-5 md:py-0 border-t border-b'>
                                <p className='text-sm font-semibold'>Why should I buy a SIM-free iPhone on apple.com?---3</p>
                                <div className='w-12 flex items-center justify-center'>
                                    <ChevronDown
                                        className={`transition ${isOpen === 3 ? 'rotate-180' : ''}`}
                                        size={20}
                                        onClick={() => {
                                            SetIsOpen(isOpen === 3 ? false : 3)
                                        }}
                                    />
                                </div>
                            </div>

                        <div className={`${isOpen === 3 ? '' : 'hidden'}`}>
                            <p className='text-sm px-3 md:px-0 py-2 md:py-0 md:pb-2'>
                                An unconnected iPhone purchased from apple.com is unlocked. This means you aren’t tied to a single network provider or a multi-year
                                service contract. You can choose the network and tariff that are right for you. Once your new iPhone is activated,
                                it remains unlocked, which means you can use it with any network that provides service for iPhone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FAQSection; 
