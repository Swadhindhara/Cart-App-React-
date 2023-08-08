import Product from '../component/Product'

import { useState, useEffect } from 'react'
const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        return response.json();
      }).then(products => {
        setProducts(products);
        console.log(products);
      })
  }, [])

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-8 underline decoration-2 underline-offset-8">Featured Products</h1>
        <div className="flex flex-wrap md:gap-12 gap-4 justify-center items-center">
          {
            products.map((product) => {
              return <Product key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </>

  )
}

export default Products;