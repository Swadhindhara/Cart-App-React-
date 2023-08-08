import Products from '../component/Products';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="hero py-16 mt-[-5%] md:mt-[0%] " >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
                    <div className='w-1/2 flex justify-start items-start flex-col w-[80%] lg:w-[50%] ml-12 mt-[-5%] md:mt-[0%]'>
                        <h6 className="text-3xl ml-[1%]">Are you hungry?</h6>
                        <h1 className="text-[350%] lg:text-7xl font-bold">Don't Wait !</h1>
                        <Link to = "/products"><button className='md:px-6 md:py-2 px-12 py-4 rounded-full text-white font-bold mt-[7%] bg-yellow-500 hover:bg-yellow-600 mt-[10%]'>Order Now</button></Link>
                    </div>
                    <div className='md:w-1/2 mt-[10%] md:mt-[0%] flex justify-center items-center'>
                        <img className='w-4/5' src="./images/pizza.png" alt="pizza-image" />
                    </div>
                </div>
            </div>
            <div className="pb-24">
                <Products />
            </div>
        </>
    )
}

export default Home;