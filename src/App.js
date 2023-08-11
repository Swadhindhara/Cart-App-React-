import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Products from '../src/component/Products';
import Cart from './pages/Cart';
import Navigation from "./component/Navigation";
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import Footer from './component/Footer';

const App = () => {
    const [cart, setCart] = useState({});
    // fetch cart from local storage
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
    }, [])

    useEffect(() =>{
        window.localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])


    return (
        <>
            <Router>
                <CartContext.Provider value={{cart, setCart}}>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} exact></Route>
                        <Route path="/products" element={<Products />} exact></Route>
                        <Route path="/product/:id" element={<SingleProduct />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </CartContext.Provider>
                <Footer />
            </Router>
        </>
    )
}

export default App;