import React, { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list}=useContext(storeContext)
  return (
    <div className='food-item-list' >
      {food_list.map((item,index)=>{
        {console.log(category,item.category)}
        if(category==="All" || category===item.category){
        return(
          <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}  />
        )
      }
      })}
    </div>
  )
}

export default FoodDisplay