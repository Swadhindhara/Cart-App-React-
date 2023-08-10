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


  const getQty = (productId) => {
    return cart.items[productId]
  }
  const increment = (productId) => {
    const oldQuantity = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = oldQuantity + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }
  const decrement = (productId) => {
    const oldQuantity = cart.items[productId];
    if (oldQuantity === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = oldQuantity - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }
  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  }
  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductList = products.filter((product) => product.id !== productId);
    setProducts(updatedProductList);
  }

  const handleOrderNow = () => {
    window.alert('Order placed successfully!');
    setProducts([]);
    setCart({});
  }



  return (
    products.length ?
      <div className="container mx-auto md: w-1/2 w-full pb-24 md:mt-[0px] mt-[-30px]">
        <h1 className="my-12 font-bold">Cart Items</h1>
        <ul className='flex items-center flex-col '>
          {
            products.map((product) => {
              return (
                <li className=" md:pr-12 md:pl-12  w-full md:pb-[20px] pb-[30px] md:ml[0px] " key={product.id}>
                  <div className="flex md:items-center md:justify-between flex-col md:flex-row md:pt-0 justify-center py-2 ml-2 mr-2 rounded-md shadow-md  dark:bg-gray-900 ">
                    <div className="flex items-center md:justify-between md:w-[450px] md:pb-0 pb-6">
                      <img className="h-24" src={product.image} alt="" />
                      <div className='flex flex-col'>
                        <span className="font-medium ml-4 md:w-48 mb-4 text-sm">{product.title}</span>
                        <span className='bg-gray-300 px-4 ml-2 md:hidden w-[100px] ml-[16px]'>$ {getSum(product.id, product.price)}</span>
                      </div>
                    </div>
                    <div className='md:w-[200px] flex items-center md:justify-center justify-between ml-2 mr-2'>
                      <div className='flex items-center'>
                      <button onClick={() => { decrement(product.id) }} className="w-[25px]"><img src="/images/minus_icon.png" alt="increase_button" /></button>
                      <span className="px-4"><b>{getQty(product.id)}</b></span>
                      <button onClick={() => { increment(product.id) }} className="w-[25px]"><img src="/images/plus_icon.png" alt="decrease_button" /></button>
                      </div>
                      <div>
                        <button onClick={() => { handleDelete(product.id) }} className='lg:hidden ' ><img className="w-[25px]" src="/images/trash.svg" alt="" /></button>
                      </div>
                    </div>
                    <div className='md:w-[380px] flex items-center md:justify-around '>
                      <span className='bg-gray-300 px-4 ml-2 hidden md:block'> {getSum(product.id, product.price)}</span>
                      <button onClick={() => { handleDelete(product.id) }} className='hidden lg:block' ><img className="w-[25px]" src="/images/trash.svg" alt="" /></button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <hr className="my-6" />
        <div className="text-right mr-4">
          <b>Grand Total:</b> $ {total - (total/2)}
        </div>
        <div className="text-right mt-6 mr-4">
          <button onClick={handleOrderNow} className=" bg-[#F59E0D] px-4 py-2 rounded-full leading-none">Place Order</button>
        </div>
      </div>
      : <img className='mx-auto w-1/2 mt-12 md:w-[30%] ' src="/images/empty-cart.png" alt="" />
  )
}

export default Cart;