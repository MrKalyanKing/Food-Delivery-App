import React, { useContext } from 'react'
import './PlaceOrder.css'
import { storeContext } from '../../Components/Context/StoreContext'

export const PlaceOrder = () => {
    const {getTotalCartItem}=useContext(storeContext)
  return (
    <form className='placeorder'>
    <div className='placeorder-left' >
        <p className='title' >Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='Frist Name' />
            <input type="text"  placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Adress' />
        <input type="text" placeholder=' Street' />
        <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
        </div>
    </div>
         <div className="placeorder-right">
         <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                           <p>Subtotal</p>  
                           <p>
                            ${Number(getTotalCartItem())}
                            </p>  
                        </div>
                        <hr />
                        <div className="cart-total-details">
                           <p>Delivery Fee</p>  <p>${getTotalCartItem()===0?0:2}</p> 
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Total</p>   <p>${getTotalCartItem()===0?0:getTotalCartItem() +2 }</p> 
                        </div>
                    </div>
                    <div className="cart-total-button">
                        <button onClick={()=>navigate('/order')} >PROCEED TO PAYMENT</button>
                    </div>
                </div>
          </div>
    </form>
    
  )
}
export default PlaceOrder
