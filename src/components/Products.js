import React, { useEffect, useState } from 'react'

const Products = () => {
     const [products, setProducts] = useState([])


     useEffect(() =>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            console.log(data);
        }
        fetchProducts();
     },[])


  return (
    <div>Products</div>
  )
}

export default Products