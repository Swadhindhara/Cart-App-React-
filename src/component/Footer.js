import {Link} from 'react-router-dom';




const Footer = () => {
    return (
        <>
            <div className="border-2 mt-12 bg-zinc-800 py-12 flex gap-12 justify-evenly flex-wrap ">
                <div className='md:ml-0 ml-12'>
                    <div className="mb-4">
                        <img className="w-[170px]" src="/images/shopping_logo.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className="text-[#f59e0d] font-semibold text-2xl mb-2">Contact Us</h2>
                        <p className="text-white hover:text-[#f59e0d] md:w-[373px]">17th Floor Tower A, Bridge Signature Towers,Kolkata, West Bengal, 700132.</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li className="text-[#f59e0d] font-semibold text-2xl mb-4">Quick Links</li>
                    </ul>
                    <ul>
                        <li className="text-white hover:text-[#f59e0d]"><Link to="/" > Home</Link></li>
                        <li className="text-white hover:text-[#f59e0d]"><Link to="/products">Products</Link></li>
                        <li className="text-white hover:text-[#f59e0d]">About Us</li>
                        <li className="text-white hover:text-[#f59e0d]">Services</li>
                        <li className="text-white hover:text-[#f59e0d]">Contact US</li>
                    </ul>
                </div>
                <div>
                <ul>
                        <li className="text-[#f59e0d] font-semibold text-2xl mb-4">Categories</li>
                    </ul>
                    <ul>
                        <li className="text-white hover:text-[#f59e0d]">Men</li>
                        <li className="text-white hover:text-[#f59e0d]">Women</li>
                        <li className="text-white hover:text-[#f59e0d]">Kids</li>
                        <li className="text-white hover:text-[#f59e0d]">Jewellery</li>
                        <li className="text-white hover:text-[#f59e0d]">Electronics</li>
                    </ul>
                </div>
                <div>
                    <div className='md:ml-0 ml-12'>
                        <h3 className="text-[#f59e0d] font-semibold text-2xl mb-4">News Latter Subscription</h3>
                        <p className="text-white hover:text-[#f59e0d] md:w-[373px]">Get the latest Products & Best deals in your inbox as first person.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;