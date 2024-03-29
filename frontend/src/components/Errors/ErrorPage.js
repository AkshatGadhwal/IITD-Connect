import React from 'react'
import Navbar from "../Navbar/Navbar"

export default function ErrorPage({location}) {
    return (
        <div>
            <Navbar/>
            <h3>Error! {location.state.message}</h3>        
        </div>
    )
}

// Redirect should look like: <Redirect to={{pathename:"/error", state:{message:"your message"}}}