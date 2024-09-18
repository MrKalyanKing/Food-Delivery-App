import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/admin_assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sidebar-options">
        <div className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add_list</p>
        </div>
        <div className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Upload</p>
        </div>
        <div className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Add_list</p>
        </div>
       
      </div>
      <hr />
    </div>
  )
}

export default Sidebar