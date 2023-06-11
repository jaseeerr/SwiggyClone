const useRestaurant = (searchInput)=>{

    const [allRestaurants,setAllRestaurants] = useState([])

    useEffect(()=>{

        getRestaurants()

    },[searchInput])


    async function getRestaurants()
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9204134&lng=76.25660169999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      
    }

    return allRestaurants
}

export default useRestaurant