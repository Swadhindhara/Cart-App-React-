import {Link} from 'react-router-dom';
const Navigation = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-5 ">
                    <Link to="/">
                        <img style={{ height: '50'}} src="./images/logo.png" alt="logo"/>
                    </Link>
                    <ul className='flex items-center gap-x-4'>
                        <li className='hover:text-[#f59e0d]'><Link to="/">Home</Link></li>
                        <li className='hover:text-[#f59e0d]'><Link to="/products">Products</Link></li>
                        <li className='bg-[#f59e0d] px-4 py-2 rounded-3xl'>
                            <Link to="/cart" >
                                <div className='flex gap-2 '>
                                    <span>05</span>
                                    <img src="./images/cart.png" alt="cart-icon"/>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;