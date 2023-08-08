import { useEffect, useState } from "react";
import {useParams } from 'react-router-dom'

const SingleProduct = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  // const history = useHistory();



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => res.json())
    .then(product => {
      setProduct(product);
    })
  },[])
  return (
    <div className="container mx-auto  flex-col">
      <button className="font-bold">Back</button>
      <div className=" flex justify-center items-center py-[100px] md:flex-row flex-col mt-[-30px] md:mt-0  p-6   rounded-lg shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <div className=" md:w-1/2 flex justify-center items-center">
          <img className="md:w-[300px] w-[200px]" src={product.image} alt="product-img" />
        </div>
        <div className=" md:w-1/2 py-[43px] ml-4 md:ml-0 mr-4 md:mr-0">
          <div className="mt-6 md:mr-[30%]">
            <h1 className="font-bold">Category: {product.category} </h1>
            <h2 className="mt-4 mb-2 text-justify">Description: <span className="text-[#212121]">{product.description}</span></h2>
            <div className="mt-4">
              <span className="bg-zinc-200 p-2">Price: ₹ {product.price}</span>
              <button className="ml-12 bg-[#F59E0D] px-2 py-2 rounded-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;