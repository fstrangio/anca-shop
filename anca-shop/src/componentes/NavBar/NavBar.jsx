import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>AnCa Shop</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className="navLink" to={"/alimento"}>Alimento</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/ropa"}>Ropa</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar