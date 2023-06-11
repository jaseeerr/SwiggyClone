import React from "react"

import ReactDom, {createRoot} from "react-dom/client"

import Header from "./components/header"

import Footer from "./components/footer"

import Body from './components/body'

import About from "./components/about"

import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom"

import Error from "./components/error"

import Contact from "./components/contact"

import RestaurantMenu from './components/restaurantMenu'

import { Provider } from "react-redux"

import Store from "./utils/store"

import Cart from "./components/cart"




const AppLayout = () => {
  
    return (
         
        <>
        <Provider store={Store}>

        <Header/>
        <Outlet/>
        <Footer/>

        </Provider>
        
        </>
    )
}


const appRouter = createBrowserRouter([ 
    {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
        

    ]
    }
    
])


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>) 