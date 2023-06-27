import "./Footer.css"
import { Links } from "./constants"




export default function index() {
    return (
        <footer className="footer">
            <h2>Quick Links</h2>
            <div className="footer--div"/>
            <ul className="footer--unordered">
                { Links.map((link) => (
                    <li className="footer--links" key={link.index}>{ link.name } </li>
                )) }
            </ul>

            <div className="footer--divA"/>
            <span className="footer-hod">HOD No: 000000</span>
            <span className="footer-hod">Secretary No: 000000</span>
        </footer>
    )
}