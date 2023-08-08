import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Products from '../src/component/Products';
import Cart from './pages/Cart';
import Navigation from "./component/Navigation";
import SingleProduct from './pages/SingleProduct';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} exact></Route>
                        <Route path="/products" element={<Products />} exact></Route>
                        <Route path="/product/:id"  element={<SingleProduct />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
            </Router>
        </>
    )
}

export default App;