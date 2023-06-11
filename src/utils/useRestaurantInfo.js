import { useState,useEffect } from "react"
import { FETCH_RESTAURANT_INFO } from "../config"
const useRestaurant = (resId)=>{

    const [restaurant,setRestaurant] = useState(null)
  

    useEffect(()=>{
        
          getRestaurantInfo()
         
    },[])

    async function getRestaurantInfo()
    {
        const data = await fetch( FETCH_RESTAURANT_INFO + resId)
        const json = await data.json()
        setRestaurant(json.data.cards[0].card.card.info)
    }

   return restaurant

}

export default useRestaurant