import React, { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'


export const App = () => {
  const [showLogin,setLogin]=useState(false)
  return (
    <>
     {showLogin?<LoginPopUp setLogin={setLogin} />:<></>}
    <div className='app'>
       <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </>
  )
}
export default App