import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore-menu ' id='Explore-menu'>
        <div className="Explore-menu-content">
        <h2>Explore Menu</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos commodi iusto repellendus suscipit quidem sit quas delectus ex mollitia assumenda, odit deserunt ipsum, sunt, est nesciunt doloribus dolore impedit!</p>
        </div>
        <div className="food-items">
            {menu_list.map((item,index)=>{
              return(
              <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="info">
                <img className={category===item.menu_name?'activee':""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
              )
              
            })}
        </div>
    </div>
  )
}

export default ExploreMenu