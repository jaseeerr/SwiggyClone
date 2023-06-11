import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CND_URL } from "../config"
import { Shimmer } from "./shimmer"
import useRestaurant from "../utils/useRestaurantInfo"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const RestaurantMenu = ()=>{

    const {resId} = useParams()
   

    const restaurant = useRestaurant(resId)
    const menu = useRestaurantMenu(resId)
    
    const dispatch = useDispatch()

    const addFood = (item)=>{
      dispatch(addItem(item))
    }
   

    
 
    


    return !restaurant ? <Shimmer/> :  (
        <div class="flex">
          <div>

          <h1>Restaurant id : {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CND_URL+restaurant.cloudinaryImageId} alt="" />
            <h3>{restaurant.areaName}, {restaurant.city}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            <h3>{restaurant.avgRating} Stars</h3>

          </div>
          
          <div className="p-2 flex-wrap" >
            <h1>Menu</h1>
            <ul>
            {
                // console.log(restaurant.menu.items)
                Object.values(menu).map((item)=>(
                    <li key={item.id} className="m-5 shadow-md p-2 flex justify-between items-center " >{item.name} - <button
                     className="p-1 shadow-md rounded-md bg-orange-500 text-white font-semibold"
                     onClick={()=>{addFood(item)}}
                     >Add Item</button>
                    </li>
                ) )
            }
            </ul>
          </div>
        </div>
    )
}

export default RestaurantMenu