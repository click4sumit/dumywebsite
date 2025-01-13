'use client'
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { ShoppingCart, Menu, X, ChevronLeft } from "lucide-react";
// globalnav-item-flyout-open

export default function Header(props){
    const [show, setShow] = useState(false);
    const [submenu, setSubmenu] = useState('')
    return (
        <>
            <div className="relative">            
                <div className="fixed top-0 left-0 w-full bg-white z-50">
                    <div className="container mx-auto py-1">
                        <div className="main-header flex md:hidden justify-between items-center mx-2">
                            <div className={`transition ${show ? 'opacity-0' : ''}`}>
                                <Link href="/" className="pl-3 flex" {...props}>
                                    <img src="/images/apple-logo.svg" className="w-7" alt="" />
                                </Link>
                            </div>
                            <div className={`transition ${submenu !== '' ? 'opacity-100' : 'opacity-0' }`}>
                                <button onClick={()=>{
                                    setSubmenu('')
                                }}>
                                    <ChevronLeft className="text-white Chevron_Left" size={30}/>
                                </button>
                            </div>
                            <div className=""> 
                                <div className="flex md:hidden justify-between items-center">
                                    <div className={`transition ${show ? 'opacity-0' : ''}`}>
                                        <Link href="/" className="py-2" >
                                            <Search size={20} />
                                        </Link>
                                    </div>        
                                    <div className={`transition ${show ? 'opacity-0' : ''} mx-4`}>
                                        <Link href="/" className="py-2 text-black" >
                                            <ShoppingCart size={20} />
                                        </Link>                        
                                    </div>
                                    <div>                       
                                        <button className="py-2" onClick={() => {
                                            setShow(!show);
                                        }}>
                                            {show
                                                ?
                                                    <X className="text-white" size={30} />
                                                :
                                                    <Menu size={20} />
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className={`main-navigation mx-5 md:mx-24 flex flex-col md:flex-row items-start md:items-center justify-around ${show ? 'shown' : ''}`}>
                            <li className="md:visible invisible">
                                <Link href="/" className="py-2 flex" {...props}>
                                    <img src="/images/apple-logo.svg" className="w-5" alt="" />
                                </Link>
                            </li>
                            <li className="level-0 pl-5">
                                <Link onClick={(e) => {

                                    if(window !== undefined){

                                        if(window.innerWidth < 768){

                                            e.preventDefault();
                                        }
                                    }
                                    
                                    setSubmenu('store')

                                }} href="/adsfad" className="py-10 md:py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "home">Store</Link>
                                <div className={`submenu ${submenu === 'store' ? 'shown' : ''}`}>
                                    <div >
                                        <div className="md:mx-32 md:mb-32">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-start md:pt-5">
                                                <ul className="pl-5 md:pr-20">
                                                    <li className="md:hidden text-sm md:text-xs font-normal text-white md:text-black footer_text_style">
                                                        {/* <button onClick={()=>{

                                                            setSubmenu('')
                                                        }}>
                                                            <ChevronLeft color="#999" size={30}/>
                                                        </button>
                                                         */}
                                                    </li>
                                                    <li className="text-sm md:text-xs font-normal text-white md:text-black footer_text_style">Shop</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">Shop the latest</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">Mac</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">iPhone</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">Apple</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">iPhone</li>
                                                    <li className="text-2xl font-semibold text-white md:text-black footer_text_style pt-2">Accessories</li>
                                                </ul>
                                                <ul className="pl-5 md:pr-20">
                                                    <li className="pt-5 md:pt-0 text-sm md:text-xs font-normal footer_text_style text-slate-400	md:text-black">Quick Links</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">Order Status</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">Ways to Buy</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">Find a store</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">University Student Offer</li>
                                                </ul>
                                                <ul className="pl-5">
                                                    <li className="pt-5 md:pt-0 text-sm md:text-xs text-slate-400 md:text-black font-normal footer_text_style ">Shop Special Stores</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">Education</li>
                                                    <li className="text-sm md:text-xs font-semibold text-white md:text-black footer_text_style pt-2">Business</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="level-0 pl-5">
                                <Link href="/" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">Mac</Link>
                                <div className="submenu">
                                <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore Mac</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All Mac</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">MacBook Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">MacBook Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iMac</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">MAc Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Mac Studio</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Mac Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Mac Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Display</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Mac Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Mac Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">macOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Continuity</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Mac for Business</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">ipad</Link>
                                <div className="submenu">
                                    <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">iPhone</Link>
                                <div className="submenu">
                                <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore iPhone</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All iPhone</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPhone 15Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPhone 15</li>
                                                    <Link href="/iphone14"><li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPhone 14</li></Link>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPhone 13</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPhone SE</li>
                                                    
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">compare iphone</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">switch from android</li>
                                                    
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>   
                        
                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">Watch</Link>
                                <div className="submenu">
                                <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">AirPods</Link>
                                
                                <div className="submenu">
                                    <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">TV & Entertainment</Link>
                                <div className="submenu">
                                <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">Accessories</Link>
                                <div className="submenu">
                                <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" {...props} page = "about">Store</Link>
                                <div className="submenu">
                                    <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Air</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Mini</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Apple Pencil</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">AppleCare+ for iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPadOS Sequoi Preview</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apple Intelligence</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Apps by Apple</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="level-0 pl-5">
                                <Link href="/about" className="py-2 text-white md:text-black text-3xl md:text-xs font-semibold md:font-normal" >Support</Link>
                                <div className="submenu">
                                    <div >
                                        <div className="mx-32 mb-56">
                                            <div className="flex items-start justify-start pt-5">
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Explore IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Explore All IPad</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">iPad Pro</li>
                                                    <li className="text-2xl font-semibold footer_text_style footer_text_style pt-2">Keyboards</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Compare iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Why iPad</li>
                                                </ul>
                                                <ul className="pr-20">
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Shop iPad</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Accessories</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Ways to Buy</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">University Student Offer</li>
                                                </ul>
                                                <ul>
                                                    <li className="text-xs font-normal footer_text_style footer-text-color">More from Mac</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iPad Support</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">iCloud+</li>
                                                    <li className="text-xs font-semibold footer_text_style pt-2 footer-text-color">Education</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="level-0 md:visible invisible">
                                <Link href="/about" className="py-2" >
                                    <Search size={15} />
                                </Link>
                            </li>
                            <li className="level-0  md:visible invisible">
                                <Link href="/about" className="py-2 text-black text-xs font-normal" >
                                    <ShoppingCart size={15} />
                                </Link>                        
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <span className="text-sm text-gray-700">{process.env.NEXT_PUBLIC_SITE_CONTACT}</span>
                    </div> */}
                </div>
            </div>        
        </>
    )
}
