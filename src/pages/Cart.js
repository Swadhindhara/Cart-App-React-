import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';





const Cart = () => {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);




  
  useEffect(() => {
    if (!cart.items) {
      return;
    }

    const items = cart.items;

    const itemsArray = Object.entries(items);

    const fetchProducts = async () => {
      const fetchedProducts = [];

      for (const [key] of itemsArray) {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${key}`);
          const product = await response.json();
          fetchedProducts.push(product);
        } catch (error) {
          console.log('error', error);
        }
      }

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [cart]);
  

  const getQty = (productId)=>{
    return cart.items[productId]
  }
  const increment = (productId)=>{
    const oldQuantity = cart.items[productId];
    const _cart = {...cart};
    _cart.items[productId] = oldQuantity + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }
  const decrement = (productId) => {
      const oldQuantity = cart.items[productId];
      if (oldQuantity === 1) {
        return;
      }
      const _cart = {...cart};
      _cart.items[productId] = oldQuantity - 1;
      _cart.totalItems -= 1;
      setCart(_cart);
  }
  const getSum = (productId, price)=>{
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  }
  const handleDelete = (productId) =>{
    const _cart = {...cart};
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductList = products.filter( (product) => product.id !== productId);
    setProducts(updatedProductList);
  }

  const handleOrderNow = () => {
    window.alert('Order placed successfully!');
    setProducts([]);
    setCart({});
  }



  return (
    products.length ?
    <div className="container mx-auto md: w-1/2 w-full pb-24 ">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {
          products.map((product) => {
            return(
              <li className="mb-12 ml-[40px] mr-[40px]" key= {product.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-[450px] ">
                  <img className="h-24" src={product.image} alt="" />
                  <span className="font-medium ml-4 w-48 ">{product.title}</span>
                </div>
                <div className='w-[200px] flex items-center justify-center'>
                  <button onClick={()=>{ decrement(product.id) }} className="bg-slate-400 px-[14px] py-[10px] rounded-full leading-none font-medium">-</button>
                  <span className="px-4"><b>{getQty(product.id)}</b></span>
                  <button onClick={()=>{ increment(product.id) }} className="bg-slate-400 px-[11px] py-[5px]  rounded-full  font-medium">+</button>
                </div>
                <div className='w-[380px] flex items-center justify-around'>
                <span>$ {getSum(product.id, product.price)}</span>
                <button onClick={() => {handleDelete(product.id) }} className="bg-red-500 px-4 py-2 rounded-full text-white leading-none">Delete</button>
                </div>
              </div>
            </li>
            )
          })
        }
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total:</b> ₹ {(Math.round(total * 100) / 100).toFixed(2)}
      </div>
      <div className="text-right mt-6">
        <button onClick={handleOrderNow}  className=" bg-[#F59E0D] px-4 py-2 rounded-full leading-none">Place Order</button>
      </div>
    </div>
    : <img className='mx-auto w-1/2 mt-12 md:w-[30%] ' src="/images/empty-cart.png" alt="" />
  )
}

export default Cart;