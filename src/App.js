import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navigation from "./component/Navigation";

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                    </Routes>
            </Router>
        </>
    )
}

export default App;