import { Announcements } from "./constants"
import "./Announcement.css"


export default function index() {
    return (
        <div className="announcement--container">
           <h1 className="announcement--header">Upcoming Events</h1>
           { Announcements.map((event) => (
                <div key={event.index} className="announcement--btn">
                    <h4 className="announcement--btn_title">{ event.title } </h4>
                    <p className="announcement--btn_metadata">{ event.Date} - { event.time }</p>
                </div>
           )) }
        </div>
    )
}