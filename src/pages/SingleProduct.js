import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'


const SingleProduct = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const history = useNavigate();



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(product => {
      setProduct(product);
    })
  },[params.id])
  return (
    <div className="container mx-auto  flex-col mt-12 md:mt-24 ">
      <div className=" flex justify-center items-center py-[100px] md:flex-row flex-col mt-[-30px] md:mt-0  p-6 border-2  rounded-lg shadow-xl dark:bg-gray-900 dark:text-gray-100 mr-2 ml-2">
      <button className="font-bold ml-6 mt-[-90px] ml-[-320px] md:ml-[-10px] md:mt-[-510px]" onClick={() => {history(-1)}}> <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg> </button>
        <div className=" md:w-1/2 flex justify-center items-center ">
          <img className="md:w-[300px] w-[200px]" src={product.image} alt="product-img" />
        </div>
        <div className=" md:w-1/2 py-[43px] ml-4 md:ml-0 mr-4 md:mr-0">
          <div className="mt-6 md:mr-[30%]">
            <h1 className="md:text-2xl text-xl font-bold font-mont">Product Name: <span className="font-medium">{product.title}</span></h1>
            <h2 className="font-medium mt-2 font-mont">Category: {product.category} </h2>
            <h3 className="mt-4 mb-2 text-justify font-pop">Description: <span className="text-[#212121]">{product.description}</span></h3>
            <div className="mt-4">
              <span className="bg-zinc-200 p-2 font-pop font-semibold">Price: $ {product.price}</span>
              <button className="ml-4 bg-[#F59E0D] px-2 py-2 rounded-full font-pop">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;