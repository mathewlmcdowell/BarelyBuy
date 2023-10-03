import { Link } from "react-router-dom"
import React from 'react'
import '../styles/NavBar.css'
import '../styles/Buttons.css'
import '../styles/Title.css'
import '../styles/Outline.css'
import Header from "./Header"

export default function NavBar() {


    return(
        <>
        <div className="NavBar outline">
            <div>
                <Link to = '/Login' className='navButton'>Login</Link>
                <Link to = '/Register' className="navButton">Register</Link>
                <Link to = '/Cart' className="cartButton">Cart</Link>
            </div>
            <Link to = '/' className="title">barely buy</Link>

        </div>
        <div><Header></Header></div>
        </>
    )
} 