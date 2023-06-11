import {IMG_CND_URL} from "../config"
import { RESTAURANT_DETAILS_CDN } from "../config"

const Resto = ({name,cuisines, cloudinaryImageId, lastMileTravelString,id})=>{



    return (
        <div className="w-[250px] p-2 shadow-lg"> 
            
            <img src={IMG_CND_URL+cloudinaryImageId}/>
         
            <h2 className="text-lg font-bold py-2">{name.substring(0,19)+"..."}</h2>
            <h6 className="whitespace-normal">{cuisines.join(",").substring(0,30)+".."}</h6>
            <h4>Distance:{lastMileTravelString}</h4>
            
        </div>
    )
}

export default Resto