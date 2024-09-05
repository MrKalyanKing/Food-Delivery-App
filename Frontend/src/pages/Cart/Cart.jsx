import React, { useContext } from 'react'
import './Cart.css'
import { storeContext } from '../../Components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {cartItems,food_list,removeFromCart,getTotalCartItem}=useContext(storeContext)
    const navigate=useNavigate()
    
  return (
    <div className='cart' >
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                   
                   
                return(
                    <>
                    <div  className="cart-items-title cart-items-item" >
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartItems[item._id]}</p>

                      <p>{item.price*cartItems[item._id]}</p>
                      <p onClick={()=>removeFromCart(item._id)} className='cross' >x</p>
                    
                    </div>
                    <hr />
                    </>
                )
            }
            })}
            <div className="cart-bottom">
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
                        <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className="promocode">
                    <div className="promocode-h2">
                        <h2>PROMOCODE</h2>
                    </div>
                    <input type="text" name="" id="" placeholder='Enter PromoCode' />
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart