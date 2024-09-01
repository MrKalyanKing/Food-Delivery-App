import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
export const Navbar = ({setLogin}) => {

    const [menu,Setmenu]=useState('')

  return (
    <div className='nav'>
        <div className="logo">
            <img src={assets.logo} alt="" />
        </div>
        <ul className='items'>
            <li onClick={()=>Setmenu("Home")} className={menu==="Home"?"active":""} >Home</li>
            <li onClick={()=>Setmenu("Mobile")} className={menu==="Mobile"?"active":""} >Mobile </li>
            <li onClick={()=>Setmenu("Menu")} className={menu==="Menu"?"active":""} >Menu</li>
            <li onClick={()=>Setmenu("Contact")} className={menu==="Contact"?"active":""} >Contact</li>
        </ul>
        <div className="cart">
            <div className="search">
            <img src={assets.search_icon} alt="" />
            <input type="text" placeholder='Search...'/>
            <img className='immg' src={assets.basket_icon} alt="" />
            </div>
            <div className="dot">
                <img src='' alt="" />
            </div>      
            <div className="form">
            <button onClick={()=>setLogin(true)} >  SignUp</button>
            </div>
            
        </div>

    </div>
  )
}
