import { Link } from "react-router-dom"
import "./components-styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to={'/'}>VoleiApp</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/sobre`} className="new-btn">Sobre</Link>
                </li>
                <li>
                    <Link to={`/login`} className="new-btn">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;