import { Link } from "react-router-dom"
import Login from './Login'

export default function NavBar() {


    return(
        <>
        <div className="NavBar outline">
            <div>

            </div>
            <div>
                <Link to = '/Login' className='navButton'>Login</Link>
            </div>
            <h1 className="title">barely buy</h1>


        </div>
        </>
    )
} 