import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
export const Navbar = ({setLogin}) => {

    const [menu,Setmenu]=useState('')

  return (
    <div className='nav'>
        <div className="logo">
          <Link to={'/'} >  <img src={assets.logo} alt="" /></Link>
        </div>
        <ul className='items'>
          <Link to={'/'}>  <li onClick={()=>Setmenu("Home")} className={menu==="Home"?"active":""} >Home</li> </Link>
            <li onClick={()=>Setmenu("Mobile")} className={menu==="Mobile"?"active":""} >Mobile </li>
           <a href="#Explore-menu"> <li onClick={()=>Setmenu("Menu")} className={menu==="Menu"?"active":""} >Menu</li></a>
            <li onClick={()=>Setmenu("Contact")} className={menu==="Contact"?"active":""} >Contact</li>
        </ul>
        <div className="cart">
            
            <img className='searchimg' src={assets.search_icon} alt="" />
            
           <Link to={'/cart'}> <img className='immg' src={assets.basket_icon} alt="" /></Link>
            
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
