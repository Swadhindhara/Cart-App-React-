import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
const Navigation = () => {

    const  {cart} = useContext(CartContext);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-6 ">
                    <Link to="/">
                        <img className='w-[130px]' style={{ height: '50'}} src="/images/shopping_logo.jpg" alt="logo"/>
                    </Link>
                    <ul className='flex items-center gap-x-4'>
                        <li className='hover:text-[#f59e0d] font-pop text-lg font-medium'><Link to="/">Home</Link></li>
                        <li className='hover:text-[#f59e0d] font-pop text-lg font-medium'><Link to="/products">Products</Link></li>
                        <li className='bg-[#f59e0d] px-4 py-2 rounded-3xl'>
                            <Link to="/cart" >
                                <div className='flex gap-2 '>
                                    <span className='text-white '>{ cart.totalItems ? cart.totalItems : 0 }</span>
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