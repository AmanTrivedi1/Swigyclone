import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Utils/Store'
import { clearCart } from '../Utils/cartSlice'
import FoodItemCard from './FoodItemCard'
// import Card from './Card'


const Cart = () => {

  const dispatch = useDispatch();

  const handleCearCart = () =>{
    dispatch(clearCart())
  }
  

    const cartItems = useSelector((store)=> store.cart.items)
  return (
      <>
   {
    cartItems.map(item=> <FoodItemCard key={item.id} {...item}/>)
   }
  
   <button className='text-sm' onClick={()=>handleCearCart()}>RemoveAll</button>
      </>
  )
}

export default Cart