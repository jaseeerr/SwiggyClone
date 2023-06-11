import { useEffect, useState } from "react"

const useOnline = ()=>{

    const [isOnline,setIsOnline] = useState(true)

    useEffect(()=>{
 
        console.log("IT's HERERERERE")
        
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })

       
    },[])

   
    return isOnline
}

export default useOnline