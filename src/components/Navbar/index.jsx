import "./navbar.css";
import KnustLogo from "../../assets/images/knust-logo.png"


export default function index() {
    return (
        <nav className="navbar">
            <img src={KnustLogo} alt="knust Logo" className="navbar--img" />
            <ul className="navbar--links">
                <li className="navbar-li">Articles</li>
                <li className="navbar-li">Dep.Info</li>
                <li className="navbar-li">Class Alloc</li>
            </ul>
        </nav>
    )
}