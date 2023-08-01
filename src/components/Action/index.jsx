import { Actions } from "./constants"
import "./Action.css"
import { Link } from "react-router-dom"
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';

export default function index() {

    useEffect(() => {
        AOS.init(); // initialize AOS on component mount
      }, []);

    return (
        <div className="action--container">
            <h1 className="action--header" data-aos="fade-up">What would you like to do ?</h1>
            <div className="action--btn_container" data-aos="fade-up" data-aos-duration="3000">
                { Actions.map((action) => (
                    <Link to={action.link}>
                    <button className="action--btn" key={action.index}>
                        {  action.title }
                    </button>
                    </Link>
                )) }
            </div>
        </div>
    )
}