import Faker from "./Faker"
import NavBar from "./NavBar"

export default function Home() {

    return(
        <>
        <div>
            <NavBar />
        </div>
        <div>
            <Faker />
        </div>
        </>
    )
}