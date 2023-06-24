import { useState } from "react";
import "./Navbar.css";
import KnustLogo from "../../assets/images/knust-logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";



export default function index() {
    const [mobileMenu, setMobileMenu] = useState(false)

    function toggleMobileMenu() {
        setMobileMenu((prevMobile) => !prevMobile)
    }

    return (
        <>
            <nav className="navbar">
                <img src={KnustLogo} alt="knust Logo" className="navbar--img" />

                <ul className="navbar--links">
                    <li className="navbar-li">Articles</li>
                    <li className="navbar-li">Dep.Info</li>
                    <li className="navbar-li">Class Alloc</li>
                </ul>

                <div onClick={toggleMobileMenu} className="navbar--mobile_container">
                    { mobileMenu ? <MdOutlineClose className="navbar--mobile" /> : <BiMenuAltRight className="navbar--mobile"/> }
                </div>

                { mobileMenu && (
                    <ul className="navbarmobile--links">
                        <li className="navbar-li">Articles</li>
                        <li className="navbar-li">Dep.Info</li>
                        <li className="navbar-li">Class Alloc</li>
                    </ul>
                )}
            </nav>
        </>

    )
}