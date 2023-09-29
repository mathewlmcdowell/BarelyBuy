import { Link } from "react-router-dom"


export default function NavBar() {


    return(
        <>
        <div className="NavBar outline">
            <div>
                <Link to = '/Login' className='navButton'>Login</Link>
                <Link to = '/Register' className="navButton">Register</Link>
            </div>
            <Link to = '/' className="title">barely buy</Link>
            <div>
                <Link to = '/Cart' className="navButton">Cart</Link>
            </div>
        </div>
        </>
    )
} 