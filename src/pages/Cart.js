import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const products = useSelector((state) => state.cart)



  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
          {products.mapp(product =>  (
            <div></div>
          ))}
        </div>
    </div>
  )
}

export default Cart