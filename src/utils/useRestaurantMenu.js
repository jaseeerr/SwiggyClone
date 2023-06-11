import { useState,useEffect } from "react"
import { FETCH_MENU } from "../config"
const useRestaurantMenu = (resId)=>{

    const [menu,setMenu] = useState({})

    useEffect(()=>{
       
        getRestaurantMenu()

    },[])

    async function getRestaurantMenu()
    {
        const data = await fetch(FETCH_MENU+resId)
        const json = await data.json()
        console.log(Object.values(json.data.menu.items))
        setMenu(json.data.menu.items)
        // setRestaurant(json.data.cards[0].card.card.info)
    }

    return menu
}

export default useRestaurantMenu