import { IMG_CND_URL } from "../config"

const FoodItems = ({
    name,
    description,
    cloudinaryImageId,
    price
})=>{
    return(
        <>
         <div className="w-[250px] p-2 shadow-lg"> 
            
            <img src={IMG_CND_URL+cloudinaryImageId}/>
         
            <h2 className="text-lg font-bold py-2">{name}</h2>
            <h6 className="whitespace-normal">{description}</h6>
            <h4>Price:{price}</h4>
            
        </div>
        </>
    )
}

export default FoodItems