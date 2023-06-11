import { useSelector } from "react-redux"
import FoodItems from "./foodItems"

const Cart = ()=>{

    const cartItems = useSelector(store=>store.cart.items)
    console.log("bru")
    console.log(cartItems)
    console.log("coffe")
    return(
        <>
        <div className="flex shadow-md"> 
        {
            cartItems.map((items)=>
                    <FoodItems key={items.id} {...items} />
            )
        }
        </div>
        
        
        </>
    )
}

export default Cart