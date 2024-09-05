import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { storeContext } from '../Context/StoreContext'
const FoodItem = ({id,name,image,price,description,category}) => {
  //const [itemCount,setItemCount]=useState(0)
  const {cartItems,setItems,removeCartItems,addToCart}=useContext(storeContext)
  return(
    <div className="food-item">
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]? <img className='plus-icon' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />:
        <div className="food-item-counter">
           {console.log(id,cartItems)}
          <img onClick={()=>removeCartItems(id)} src={assets.remove_icon_red} alt="" />
          {cartItems[id]}
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>
       
         }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc' >{description}</p>
        <p className='food-item-price'>&#x20b9;{price}</p>
      </div>
    </div>
  )
}

export default FoodItem