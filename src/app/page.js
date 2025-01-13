import Main from '../components/Main'
import Link from 'next/link'
import colors from 'tailwindcss/colors'
// import "../../public/style/Style.css"
import Sleek from '@/carousel/Sleek';

const Home = () => {
  
    return (        
        <Main
            page = "home"
        >
            <div className="bg-white text-black py-4 text-sm font-normal w-full z-30 mt-9">
                    <div className="w-10/12 text-center mx-auto">
                        <span>Get iPhone 15 Pro from ₹5621.00/mo. 
                            <sub><a href="#">‡</a></sub> for 24 months with No Cost EMI from most leading banks. 
                            <Link className="text-blue-600" href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro" target="blank"> Buy now</Link>
                        </span>                        
                    </div>
                </div>
                <div>        
            </div>
            <div>
                <div className='container mx-auto md:relative mb-3 '>
                    <Link href={"#"} target='blank' className='image_style block w-full h-screen bg-cover bg-no-repeat bg-center flex items-start md:items-center justify-center' style={{backgroundImage:`url(/images/cover5.webp)`}}>
                        <div className='md:h-screen'>
                            <div className='text-white md:flex text-center md:justify-center md:mt-0 mt-5'>
                                <div>
                                    <p className='md:text-5xl text-3xl font-semibold md:mt-10'>Apple Intelligence</p>
                                    <p className='md:text-3xl text-sm font-normal mt-3'>AI for the rest of us.</p>
                                    <p className='md:text-lg text-sm tracking-wide font-normal md:mt-3'>Coming in beta in US English later this year</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='hero-banner-buttons w-full'>
                        <div className='flex items-center justify-between md:space-x-4'>
                            <Link href=""><p className='md:text-lg text-xs px-3 py-2 md:px-4 md:py-2 text-white border-2 rounded-full border-secondary-900 bg-secondary-900'>Learn More</p></Link>
                            <Link href=""><p className='md:text-lg ml-5 text-xs px-3 py-2 md:px-4 md:py-2 border-2 rounded-full text-secondary-900 border-secondary-900 hover:text-white hover:bg-secondary-900'>Watch Video Now</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mb-3'>
                <div className='container h-4/5 mx-auto flex items-end justify-end'>
                    <Link href={"#"} target='_blank' className='image_style h-full md:h-screen w-full bg-cover bg-no-repeat bg-center flex items-center justify-center' style={{backgroundImage:`url(/images/cover3.webp)`}}>
                        <div>
                            <div className='flex items-center justify-end md:text-center md:justify-center mb-10 md:mb-0'>
                                <div className='border-solid border-blue-600 md:mt-80'>
                                    <p className='text-white md:text-lg text-sm px-4 py-2 border-2 rounded-full border-secondary-900 bg-secondary-900'>Shop</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div> */}

            <div>
                <div className='container mx-auto mb-3 h-scree flex flex-col'>    
                    <Link href={"#"} target='_blank' className='image_style md:h-screen block w-full bg-cover bg-no-repeat bg-center flex items-center justify-center' style={{backgroundImage:`url(/images/cover3.webp)`}}>
                        <div className='w-full h-full flex flex-col justify-end banner_height'>
                            <div className='flex items-center justify-center md:text-center md:justify-center mb-16 md:mb-16'>
                                <div className='border-solid border-blue-600 md:mt-80'>
                                    <p className='text-white md:text-lg text-sm px-4 py-2 border-2 rounded-full border-secondary-900 bg-secondary-900'>Shop</p>
                                </div>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>

            <div>
                <div className='container mx-auto'>
                    <Link href={"#"} target='_blank' className='image_style md:h-screen block w-full bg-cover bg-no-repeat bg-center flex items-center 
                        justify-center' style={{backgroundImage:`url(/images/cover1.jpeg)`}}>
                        <div className='mt-1 h-screen banner_height'>
                            <div>
                                <p className='md:pt-0 pt-3 text-center md:text-5xl text-2xl text-white font-semibold'>WWDC24</p>
                            </div>
                            <div className='max-w-2xl text-center m-auto'>
                                <p className='md:text-2xl text-xl text-white font-semibold mt-2 px-8'>Introducing Apple Intelligence, iOS 18, iPadOS 18, macOS Sequoia and watchOS 11.</p>
                            </div>
                            <div className='flex text-center justify-center'>
                                <div className='border-solid border-blue-600 mt-5 mb-10'>
                                    <p style={{background: '#0071e3'}} className='md:text-lg text-sm px-4 py-2 text-white border-none rounded-full'>Learn More</p>
                                </div>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-12 md:gap-3 md:mx-3 mt-3'>
                    <div className='md:col-span-6 col-span-12 h-screen mb-3'>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-center flex items-end justify-center' style={{backgroundImage:`url(/images/imag01.avif)`}}>
                            <div className='mb-9'>
                                <p className='text-4xl font-semibold text-center text-white leading-tight'>University Student</p>
                                <p className='text-lg font-normal text-white text-center'>Go further with Mac.</p>
                                <div className='w-full flex item-center justify-center mt-5'>
                                    <p className='px-4 py-2 text-sm font-normal	rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='md:col-span-6 col-span-12 h-screen'>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-centerk flex items-start justify-center' style={{backgroundImage:`url(/images/image2.avif)`}}>
                            <div className='mt-10'>
                                <p className='text-4xl font-semibold text-center text-white leading-tight'>MacBook Air</p>
                                <p className='text-lg font-normal text-black text-center'>Supercharged by M3</p>
                                <div className='w-full flex item-center justify-center mt-5'>
                                    <p className='mr-2 px-4 py-2 text-sm font-normal	rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                    <p className='ml-2 px-4 py-2 text-sm border-2 border-secondary-800 font-normal rounded-full text-white hover:bg-secondary-900'>Buy</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-12 md:gap-3 md:mx-3 mt-3 md:mt-0'>
                    <div className='md:col-span-6 col-span-12 h-screen mb-3'>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-centerk flex items-start justify-center' style={{backgroundImage:`url(/images/imag3.avif)`}}>
                            <div className='mt-10'>
                                <p className='text-4xl font-semibold text-center text-white leading-tight'>MacBook Air</p>
                                <p className='text-lg font-normal text-white text-center'>Unbelievably thin. Incredibly powerful.</p>
                                    <div className='w-full flex item-center justify-center mt-5'>
                                        <p className='mr-2 px-4 py-2 text-sm font-normal	rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                        <p className='ml-2 px-4 py-2 text-sm border-2 border-secondary-800 font-normal rounded-full text-black hover:bg-secondary-900'>Buy</p>
                                    </div>
                            </div>
                        </Link>  
                    </div>
                    <div className='md:col-span-6 col-span-12 h-screen '>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-centerk flex items-start justify-center' style={{backgroundImage:`url(/images/image4.avif)`}}>
                            <div className='mt-10'>
                                <p className='text-4xl font-semibold text-center text-black leading-tight'>iPhone 15</p>
                                <p className='text-lg font-normal text-white text-center'>New camera. New design. Newphoria.</p>
                                    <div className='w-full flex item-center justify-center mt-5'>
                                    <p className='mr-2 px-4 py-2 text-sm font-normal rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                    <p className='ml-2 px-4 py-2 text-sm border-2 border-secondary-800 font-normal rounded-full text-white hover:bg-secondary-900'>Buy</p>   
                                </div>
                            </div>
                        </Link>  
                    </div>
                </div>
                <div className='grid grid-cols-12 md:gap-3 md:mx-3 mt-3 md:mt-0'>
                    <div className='md:col-span-6 col-span-12 h-screen mb-3'>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-centerk flex items-start justify-center' style={{backgroundImage:`url(/images/image05.avif)`}}>
                            <div className='mt-10'>
                                <p className='text-4xl font-semibold text-center text-black leading-tight'>iPad Pro</p>
                                <p className='text-lg font-normal text-black text-center'>Unbelievably thin. Incredibly powerful.</p>
                                    <div className='w-full flex item-center justify-center mt-5'>
                                        <p className='mr-2 px-4 py-2 text-sm font-normal rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                        <p className='ml-2 px-4 py-2 text-sm border-2 border-secondary-800 font-normal rounded-full text-white hover:bg-secondary-900'>Buy</p>
                                    </div>    
                            </div>
                        </Link>  
                    </div>
                    <div className='md:col-span-6 col-span-12 h-screen '>
                        <Link href={'#'} className='h-screen block w-full bg-cover bg-no-repeat	bg-centerk flex items-start justify-center' style={{backgroundImage:`url(/images/image06.avif)`}}>
                            <div className='mt-10'>
                                <p className='text-4xl font-semibold text-center text-white leading-tight'>Trade In</p>
                                <p className='text-lg font-normal text-white text-center'>Upgrade and save. It’s that easy.</p>
                                <div className='w-full flex item-center justify-center mt-5'>
                                    <p className='mr-2 px-4 py-2 text-sm font-normal	rounded-full text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus:outline-none focus:ring focus:ring-violet-300'>Learn more</p>
                                    <p className='ml-2 px-4 py-2 text-sm border-2 border-secondary-800 font-normal rounded-full text-white hover:bg-secondary-900'>Buy</p>
                                </div>    
                            </div>
                        </Link>  
                    </div>
                </div>
            </div>

            <Sleek />
        </Main>
    )
}

export default Home
