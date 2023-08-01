import { Announcements } from "./constants"
import "./Announcement.css"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function index() {

    useEffect(() => {
        AOS.init(); // initialize AOS on component mount
      }, []);

    return (
        <div className="announcement--container" >
           <h1 className="announcement--header">Upcoming Events</h1>
           { Announcements.map((event) => (
                <div key={event.index} className="announcement--btn" data-aos="fade-up" data-aos-duration="3000">
                    <h4 className="announcement--btn_title">{ event.title } </h4>
                    <p className="announcement--btn_metadata">{ event.Date} - { event.time }</p>
                </div>
           )) }
        </div>
    )
}