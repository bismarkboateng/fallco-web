import "./Footer.css"
import { Links } from "./constants"
import { Link } from "react-router-dom"
import Div from "../Div"


export default function index() {
    return (
        <footer className="footer">
            <h2>Quick Links</h2>
            <Div />
            <ul className="footer--unordered">
                { Links.map((link) => (
                    <Link style={{ textDecoration: "none"}} to={link.link} key={link.index}>
                        <li className="footer--links" key={link.index}>{ link.name } </li>
                    </Link>
                )) }
            </ul>

            <div className="footer--divA"/>
            <span className="footer-hod">HOD No: 000000</span>
            <span className="footer-hod">Secretary No: 000000</span>
        </footer>
    )
}