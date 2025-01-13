'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { Heading, Key } from 'lucide-react';


const ComparisonView = (props) => {
    const [compareView, setCompareView] = useState([])

    let compare_list = [
        {
            key: 'iphone15pro',
            heading: 'iPhone 15 Pro',
            model: 'New',
            sub_heading: 'The ultimate iPhone.',
            colors: [{code: 'purple'}, {code: 'black'}, {code: 'lightgrey'}, {code: 'lightgrey'}],
            src: 'phone/iphone14/image07.jpeg',
            src1: 'phone/iphone14/logo4.jpeg',

            heading_one: [
                '17.00 cm (6.7″) or',
                '15.54 cm (6.1″)',
            ],

            heading_two: [
                'Super Retina XDR display',
                'ProMotion technology',
                'Always-On display',
            ]
        },
        {
            key: 'iphone15',
            heading: 'iPhone 15',
            sub_heading: 'A total power house',
            model: 'New',
            colors: [{code: 'yellow'}, {code: 'black'}, {code: 'lightgrey'}, {code: 'lightblue'}],
            src: 'phone/iphone14/image08.jpeg',
            src1: 'phone/iphone14/logo4.jpeg',

            heading_one: [
                '17.00 cm (6.7″) or',
                '15.54 cm (6.1″)'
            ],

            heading_two: [
                'Super Retina XDR display¹',
                'ProMotion technology',
                'Always-On display',
            ]
        },
        {
            key: 'iphone14 Plus',
            heading: 'iPhone 14 Plus',
            model: 'New',
            sub_heading: 'As amazing as ever.',
            colors: [{code: 'orange'}, {code: 'pink'}, {code: 'lightgrey'}, {code: 'lightblue'}],
            src: 'phone/iphone14/image09.jpeg',
            src1: 'phone/iphone14/logo4.jpeg',

            heading_one: [
                '17.00 cm (6.7″) or',
                '15.54 cm (6.1″)'
            ],

            heading_two: [
                'Super Retina XDR display¹',
                'ProMotion technology',
                'Always-On display',
            ]
        },

        {
            key: 'iphone14 Plus',
            heading: 'iPhone 14 Plus',
            model: 'New',
            sub_heading: 'Serious power. Serious value.',
            colors: [{code: 'orange'}, {code: 'green'}, {code: 'grey'}, {code: 'blue'}],
            src: 'phone/iphone14/image10.jpg',
            src1: 'phone/iphone14/logo4.jpeg',

            heading_one: [
                '17.00 cm (6.7″) or',
                '15.54 cm (6.1″)'
            ],

            heading_two: [
                'Super Retina XDR display¹',
                'ProMotion technology',
                'Always-On display',
            ]
        }
    ]

    return (
        <>
            <div className='mt-32 gap-2 mb-5'>
                <p className='text-center text-3xl md:font-bold font-medium px-10 md:px-0'>Which iPhone is right for you?</p>

                <Link href={'#'}>
                    <div className='grid grid-cols-12 mt-20 md:mx-28'>
                        {
                            compare_list.map((_data, index) => {

                                return (
                                    <div key={`comparison_item_${index}`} className='col-span-6 md:col-span-3'>
                                        <div className='flex items-center justify-center flex-col'>  
                                            <div className='flex items-center justify-center flex-col' href={"#"}>
                                                <img className='image02 md:h-64 md:w-48'src={_data.src} alt={_data.sub_heading} />
                                                    <div className='mt-5 pt-0'>  
                                                        <div className='flex flex-row items-start justify-start'>
                                                            {
                                                                _data.colors.map((color, inx) => {

                                                                    return <p key={`color_${inx}_${index}`} className='mx-1 shadow' style={{height: 12, width: 12, backgroundColor: color.code, borderRadius: 100, cursor : "Pointer" }}></p>
                                                                }                                                      
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className='text-sm text-center pt-3'>{_data.model}</p>
                                                    <p className='pt-2 text-xl font-bold'>{_data.heading}</p>
                                                    <p className='text-md text-center'>{_data.sub_heading}</p>
                                                    <p className='pt-5 text-sm text-center'>{_data.heading_one}</p>
                                                    <hr className='w-36 font-bold my-10' />
                                                    <img className='py-1 h-12 w-12' src={_data.src1} alt={_data.heading}  />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    )
                            })
                        }
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ComparisonView; 




