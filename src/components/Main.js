import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Main(props) {
    return (
        <div className="bg-white" >
            <Header
                {...props}
            />
            {/* <div className="bg-white text-black py-4 text-sm font-normal w-full z-30 mt-9">
                <div className="w-10/12 text-center mx-auto">
                    <span>Get iPhone 15 Pro from ₹5621.00/mo. 
                        <sub><a href="#">‡</a></sub> for 24 months with No Cost EMI from most leading banks. 
                        <Link className="text-blue-600" href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro" target="blank"> Buy now</Link>
                    </span>                        
                </div>
            </div> */}
            <div>
                {props.children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
