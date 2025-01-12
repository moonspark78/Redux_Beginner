import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productsSlice'
import { STATUSES } from '../store/productsSlice'


const Products = () => {
  const dispatch =useDispatch()
  const {data: products, status} = useSelector((state) => state.product)
  //const [products, setProducts] = useState([])


     useEffect(() =>{
      dispatch(fetchProducts())
       /*  const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            console.log(data);
        }
        fetchProducts(); */
     },[])


    const handleAdd = (product) =>{
      dispatch(add(product))
     }

     if(status === STATUSES.LOADING){
      return <h2>Loading ....</h2>
     }


  return (
    <div className='productsWrapper'>
      {
        products.map((product) =>(
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products