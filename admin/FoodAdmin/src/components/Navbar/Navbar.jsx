import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/admin_assets/assets'

const Navabar=()=>{
    return (
        <div className="Navbar">
            <ul>
                <li><img src={assets.logo} alt="" /></li>
                <li><img src={assets.profile_image} alt="" /></li>
            </ul>
            <hr />
        </div>
    )
}

export default Navabar