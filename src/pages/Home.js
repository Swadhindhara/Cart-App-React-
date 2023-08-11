import Products from '../component/Products';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="hero py-16 mt-[-20%] md:mt-[-10%] xl:mt-[0%] " >
                <div className="container mx-auto justify-center flex flex-col-reverse md:flex-row  items-center ">
                    <div className='w-1/2 flex justify-start items-start flex-col w-[80%] md:pl-[5%] lg:w-[50%]  mt-[-5%] md:mt-[0%] '>
                        <h6 className="text-5xl md:text-6xl font-thin  text-slate-400">Better Your</h6>
                        <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-zinc-600">E-Commerce</h1>
                        <div>
                            <h5 className='mb-2 font-bold text-[#F59E0D] text-lg '>Easier for you!</h5>
                            <p className='mb-4 text-zinc-400 w-[280px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eius delectus porro quis velit vitae architecto odit recusandae.</p>
                        </div>
                        <Link to = "/products"><button className='md:px-6 md:py-2 px-8 py-4 rounded-full text-white font-bold mt-[7%] bg-yellow-500 hover:bg-yellow-600 mt-[10%]'>Shop Now</button></Link>
                    </div>
                    <div className='md:w-1/2 mb-8 md:mb-0 flex justify-center items-center '>
                        <img className='w-4/5' src="./images/shopping.svg" alt="pizza-image" />
                    </div>
                </div>
            </div>
            {/* <div className="pb-24">
                <Products />
            </div> */}
            <section className='mr-4 ml-4 md:mt-0 mt-[-20px]'>
                <div className="container mx-auto  flex flex-col shadow-xl rounded-xl py-16">
                    <div className='flex items-center flex-col md:flex-row text-center md:justify-around mb-12'>
                        <h2 className='font-semibold text-2xl md:text-4xl mb-2 md:mb-0'>We Makes Online Shopping Easier For You</h2>
                        <p className='md:w-[400px]'>Learn More About the company, The Team Behind It & How We Think</p>
                    </div>
                    <div className='flex gap-12 justify-evenly flex-wrap '>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl text-[#f59e0d] mb-2'>200+</h1>
                            <h4 className='font-semibold text-xl mb-2'>Orders completed</h4>
                            <p className='text-sm w-[250px]  text-center'>Learn More About the company, The Team Behind It & How We Think</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl text-[#f59e0d] mb-2'>400%</h1>
                            <h4 className='font-semibold text-xl mb-2'>Successful Orders</h4>
                            <p className='text-sm w-[250px]  text-center'>Learn More About the company, The Team Behind It & How We Think</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl text-[#f59e0d] mb-2'>2k</h1>
                            <h4 className='font-semibold text-xl mb-2'>Users Account</h4>
                            <p className='text-sm w-[250px]  text-center'>Learn More About the company, The Team Behind It & How We Think</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl text-[#f59e0d] mb-2'>100+</h1>
                            <h4 className='font-semibold text-xl mb-2'>5 start Reviews</h4>
                            <p className='text-sm w-[250px]  text-center'>Learn More About the company, The Team Behind It & How We Think</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex py-24 gap-8 md:gap-12 md:mr-4 md:ml-4 flex-col items-center justify-center md:flex-row mr-4 ml-4'>
                <div className="container  md:w-1/2 flex  flex-col items-center justify-center opacity-100 shadow-2xl py-16 md:ml-44 rounded-xl">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl mb-4 font-semibold'>Our Mission</h1>
                        <p className=' md:w-[400px] text-center'>Our mission to create a good market place for local sellers & to create  good online shopping store</p>
                    </div>
                </div>
                <div className="container items-center justify-center md:w-1/2 flex flex-col opacity-100 shadow-2xl py-16 md:mr-44 rounded-xl">
                <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl mb-4 font-semibold'>Our Vision</h1>
                        <p className=' md:w-[400px] text-center'>Our vision is to build a trustable online store for both customers and sellers</p>
                    </div>
                </div>
            </section>
            <section className='mr-6 ml-6'>
                <div className="container mx-auto  flex flex-col items-center shadow-xl rounded-xl py-16">
                    <div className='flex flex-col items-center mb-8 text-center '>
                        <h1 className='font-semibold text-2xl md:text-5xl mb-4'>We are the best local online shopping store</h1>
                        <p className='md:text-xl '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa animi deserunt.</p>
                    </div>
                    <div>
                        <img className='w-[600px]' src="/images/icon_gif.gif" alt="" />
                    </div>
                </div>                    
            </section>
            
        </>
    )
}

export default Home;