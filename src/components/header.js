import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


import logo from "../../assets/logo.png"

const Title = () =>(
    
    <>
     
        <a href="/">
             <img className="h-28" src={logo}/>
        </a>
    </>
   )


   export   const Header = ()=>{

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)
    

    const [login,setLogin] = useState(false)

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg px-2"> 
            <Title />
            <div className="flex">
                <ul className="flex py-10 ">
                    
                    <li className="px-2"><Link to="/" >Home</Link></li> 
                    <li className="px-2"><Link to="/about" > About </Link> </li>
                    <li className="px-2"> <Link to="/contact" >Contact</Link> </li>
                    <li className="px-2"><Link to="/cart" >Cart - {cartItems.length} items </Link></li>
                </ul>
            </div>
            {login ? <button onClick={()=>{setLogin(false)}}>Logout</button> : <button onClick={()=>{setLogin(true)}} >Login</button> }
        </div>
    )
}


export default Header


