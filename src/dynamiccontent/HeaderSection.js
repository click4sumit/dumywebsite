'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import {LucideCirclePlus, Pointer, Album, Truck, ShoppingBag, ChevronDown } from "lucide-react";




const HeaderSection = (props) => {
    return (
        <>
            <div className="te  xt-black py-5 text-sm font-normal w-full  mt-10 bg-third-900">
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
        </>
    )
}

export default HeaderSection; 
