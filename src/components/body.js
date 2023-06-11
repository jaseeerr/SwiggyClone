import { useEffect, useState } from 'react'
import {restolist} from '../config'
import Resto  from './restocard'
import { Shimmer } from "./shimmer"
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

function filterData(searchText,restaurants)
{
 const filterData =  restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))

 return filterData

}



const Body =()=>{
 
    const [searchInput,setSearchInput] = useState("")
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [allRestaurants,setAllRestaurants] = useState([])

    

    
    console.log("HEY"); 

    useEffect(()=>{

        getRestaurants()

    },[searchInput])

    async function getRestaurants()
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9204134&lng=76.25660169999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    const online = useOnline()
    console.log(online," ssssssssssss")
      if(online==false)
      { 
          return  <h1>YOU"RE OFFLINE</h1>

            
      }

    
 
     return allRestaurants.length === 0 ? ( <Shimmer/> ) : (
         <>
         <div className='search-container p-5 bg-pink-50 my-5'> 
          <input type="text"
           className='search-input'
            placeholder='Search'
             value={searchInput} 
          onChange={(e)=>{
            
            setSearchInput(e.target.value)
            
           
        }} 
          />
          <button className='bg-blue-800 text-white rounded-md  px-2 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ...'onClick={()=>{
            const data = filterData(searchInput,filteredRestaurants)
            setFilteredRestaurants(data)
          }} >Search</button>
         </div>
          <div className="flex flex-wrap">

            
            
            { 
              filteredRestaurants.length===0 ? <h1>NOT FOUND</h1> :
              
              filteredRestaurants.map((restaurant)=>{
                return (
                   <Link style={{textDecoration:"none",color:"black"}} to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                   <Resto {...restaurant.data}  />
                   </Link>
                   )
              })
            }
            
  
          </div>
         </>
     )
    
 }

export default Body