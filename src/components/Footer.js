'use client'
import { useState } from 'react';
import Link from "next/link";
import { ChevronDown } from 'lucide-react';


export default function Footer(props) {

    

    const [footer_menus, setFooterMenus] = useState([])

    let footer_menu = [
        {
            menus: [
                {
                    key: 'shop_n_learn',
                    heading: 'Shop and Learn',
                    menu: [
                        {link: '/', label: 'Store'},
                        {link: '/', label: 'Mac'},
                        {link: '/', label: 'iPad'},
                        {link: '/', label: 'iPhone'},
                        {link: '/', label: 'Watch'},
                        {link: '/', label: 'AirPods'},
                        {link: '/', label: 'TV & Home'},
                        {link: '/', label: 'Air Tag'},
                        {link: '/', label: 'Accessories'},
                        {link: '/', label: 'Gift Card'},
                    ]
                },
                {
                    key: 'apple_wallet',
                    heading: 'Apple Wallet',
                    menu: [
                        {link: '/', label: 'Wallet'},
                    ]
                }
            ]
        },
        {
            menus: [
                {
                    key: 'account',
                    heading: 'Account',
                    menu: [
                        {link: '/', label: 'Manage Your Apple ID'},
                        {link: '/', label: 'Apple Store Account'},
                        {link: '/', label: 'iPhone'},
                        {link: '/', label: 'Watch'},
                        {link: '/', label: 'AirPods'},
                        {link: '/', label: 'TV & Home'},
                        {link: '/', label: 'Air Tag'},
                        {link: '/', label: 'Accessories'},
                        {link: '/', label: 'Gift Card'},
                    ]
                }
            ]
        },
        { 
            menus: [
                {      
                    key: "apple_store",
                    heading: 'Apple Store',
                    menu: [
                        {link: '/', label: 'Find a Store'},
                        {link: '/', label: 'Genius Bar'},
                        {link: '/', label: 'Today at Apple'},
                        {link: '/', label: 'Group Reservation'},
                        {link: '/', label: 'Apple Camp'},
                        {link: '/', label: 'Apple Trade in'},
                        {link: '/', label: 'Ways to Buy'},
                        {link: '/', label: 'Recycling Programme'},
                        {link: '/', label: 'Order Status'},
                        {link: '/', label: 'Shopping Help'},
                    ]
                }
            ]
        },
        {
            menus: [
                {
                    key: "for_business",
                    heading: 'For Business',
                    menu: [
                        {link: '/', label: 'Apple And Business'},
                        {link: '/', label: 'Shop for Business'},
                    ]
                }
            ]
        },
        {       
            menus: [
                {
                    key: "apple_value",
                    heading: 'Apple Value',
                    menu: [
                        {link: '/', label: 'Accessibility'},
                        {link: '/', label: 'Education'},
                        {link: '/', label: 'Environment'},
                        {link: '/', label: 'Privacy'},
                        {link: '/', label: 'Supply Chain'},            
                    ]
                }
            ]
        },
    ]

    return (
        <>
            <div className="md:mt-5 mt-2 pt-0 w-full footer_text_style footer-text-color" style={{background: 'rgba(245, 245, 247)'}} >  
                <div className="pt-2 text-sm font-normal md:mx-40 mx-5">
                    <div className="mt-0">
                        <p className="mt-5">‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading banks. 
                            Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month
                            tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s 
                            terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or 
                            Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or
                            withdrawn at any time without any prior notice. Terms apply.
                            <br /><br />
                            Representative example:
                            <br /><br />
                            Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
                            <br /><br />
                            Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.
                            <br /><br />
                            *Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion 
                            product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.
                            <br /><br />
                            1. Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US 
                            English, as part of iOS 18, iPadOS 18 and macOS Sequoia later this year. Some features, additional languages and platforms will be coming over the course of the 
                            next year.
                            <br /><br />
                            A subscription is required for Apple TV+.
                        </p>
                            <br />
                            <hr className="bg-dark"/>
                        <div>
                            <div className='grid grid-cols-1 mt-3 md:grid md:grid-cols-5 md:max-w md:py-2 md:mx-auto'>
                                {footer_menu.map((_footer, index) => {
                                    {/* console.log(_footer) */}
                                    return (            
                                        <div key={`footer_menu_${index}`}>       
                                            {_footer.menus.map((_footer_menu, footer_menu_index) => {
                                                {/* console.log(_footer_menu) */}
                                                return (                        
                                                    <div key={`footer_menu_list_${_footer_menu.key}_${index}`}>
                                                        <div>
                                                            <div className='flex justify-between' onClick={() => {
                                                                
                                                                // setShopNLearn(!shop_n_learn)
                                                                // if(footer_menus.indexOf(_footer.key) > -1){
                                                                //     footer_menus.splice(footer_menus.indexOf(_footer.key), 1);
                                                                // }else{
                                                                //     footer_menus.push(_footer.key)
                                                                // }

                                                                if(footer_menus.indexOf(_footer_menu.key) > -1){

                                                                    setFooterMenus([])
                                                                }else{

                                                                    setFooterMenus([_footer_menu.key])
                                                                }
                                                            }}>
                                                                <strong className='text-sm font-semibold text-gray-600 py-2'>{_footer_menu.heading}</strong>                                                   
                                                                
                                                                <div className='md:hidden'>
                                                                
                                                                    <ChevronDown className={`transition ${footer_menus.indexOf(_footer_menu.key) > -1 ? 'rotate-180' : ''}`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className={`md:flex md:flex-col ${footer_menus.indexOf(_footer_menu.key) > -1 ? 'flex flex-col' : 'hidden'}`}>
                                                            {_footer_menu.menu.map((_menu, menu_index) => {
                                                                return (
                                                                    <li className='my-1' key={`menu_item_${index}_${menu_index}`}>
                                                                            {/* <hr className="bg-dark"/> */}
                                                                        <Link href={_menu.link} className="text-xs font-normal footer_text_style">{_menu.label}</Link>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <br />
                        <p className="pb-2">More ways to shop: <span>
                            <Link href="/" className="underline text-xs font-normal foot_note">Find an Apple Store</Link></span> or <span>
                            <Link href="/" className="underline text-xs font-normal foot_note">other retailer</Link></span> near you. Or call 000800 040 1966.
                        </p>
                        

                        <div>
                            <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-5">
                                <div className="md:flex md:items-center order-2 md:order-1">
                                    <div className='text-xs md:pb-0 pb-2'>
                                        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                                    </div>
                                    <div className="md:ml-7 md:flex md:items-center md:justify-around md:footer-links">
                                        <Link href="/" className="md:px-2 text-xs">Privacy Policy</Link>
                                        <Link href="/" className="px-2 text-xs">Terms of Use</Link>
                                        <Link href="/" className="px-2 text-xs">Sales Policy</Link>
                                        <Link href="/" className="px-2 text-xs">Legal</Link>
                                        <Link href="/" className="px-2 text-xs">Site Map</Link>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center md:justify-end order-1 md:order-2 pb-3">
                                    <p>India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>            
        </>
    )
}
