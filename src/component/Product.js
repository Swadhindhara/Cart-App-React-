import { Link } from 'react-router-dom';
import {useContext, useState} from 'react';
import {CartContext} from '../CartContext';

const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const {cart, setCart} = useContext(CartContext)

    const addToCart = (event ,product) => {
        event.preventDefault();
        let _cart = {...cart};// {items : {}}
        if(!_cart.items){
            _cart.items = {}
        }
        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1;
        }else{
            _cart.items[product.id] = 1;
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);

        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 500);

        //
        // const cart = {
        //     items: {
        //         id:
        //     }
        // }

    }

    const productName = props.product.title;
    const price = `$ ${props.product.price}`;
    let finalProductName = productName
    if (productName.length > 30) {
        finalProductName = productName.substr(0, 31);
        const dot = "..."
        finalProductName = finalProductName.concat(dot)
    }

    return (
        <Link to= {`/product/${props.product.id}`}>
            <div className="card md:w-[250px] bg-[#ffffff] w-[180px] flex flex-col justify-center items-center max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="h-[250px] flex items-center"><img className="w-[130px]" src={props.product.image} alt="pizza" /></div>
                <div className="h-[50px] flex items-start justify-center text-center px-4"><h2 className="text-lg font-bold py-2 ">{finalProductName}</h2></div>
                <div className="bg-[#ffffff] mt-[45px] md:mt-[30px] flex items-center justify-center"><span className="bg-gray-200 py-1 rounded-full text-sm px-4 ">Rating {props.product.rating.rate}</span></div>
                <div className="flex flex-row justify-between items-center mt-4 mb-2">
                    <span className=" md:ml-[-30%] ml-[-10%] bg-zinc-300 px-2">{price}</span>
                    <button disabled = {isAdding} onClick={(e) => {addToCart(e, props.product)}} className= {` ${isAdding ? 'bg-[teal] text-white':'bg-[#f59e0d]'} py-1 px-4 rounded-full font-bold mr-[-10%] md:mr-[-30%]`} >Add{isAdding? "ed" : " " }</button>
                </div>
            </div>
        </Link>
    )
}

export default Product