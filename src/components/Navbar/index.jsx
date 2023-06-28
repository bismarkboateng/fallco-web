import { useState } from "react";
import "./Navbar.css";
import KnustLogo from "../../assets/images/knust-logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";



export default function index() {
    const [mobileMenu, setMobileMenu] = useState(false)

    function toggleMobileMenu() {
        setMobileMenu((prevMobile) => !prevMobile)
    }

    return (
        <>
            <nav className="navbar">
                <Link className="link" to="/"><img src={KnustLogo} alt="knust Logo" className="navbar--img" /></Link>

                <ul className="navbar--links">
                    <NavLinks />
                </ul>

                <div onClick={toggleMobileMenu} className="navbar--mobile_container">
                    { mobileMenu ? <MdOutlineClose className="navbar--mobile" /> : <BiMenuAltRight className="navbar--mobile"/> }
                </div>

                { mobileMenu && (
                    <ul className="navbarmobile--links">
                        <NavLinks />
                    </ul>
                )}
            </nav>
        </>

    )
}