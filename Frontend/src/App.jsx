import React, { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


export const App = () => {
  const [showLogin,setLogin]=useState(false)
  return (
    <>
     {showLogin?<LoginPopUp setLogin={setLogin} />:<></>}
    <div className='app'>
       <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    </>
  )
}
export default App