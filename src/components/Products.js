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
    <div className='productsWrapper'>
      {
        products.map((product) =>(
          <div className='card' key={product.id}>
            <img src={product.image} alt='photo'/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn'>Add to Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products