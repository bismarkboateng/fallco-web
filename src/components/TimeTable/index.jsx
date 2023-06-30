import { createPortal } from "react-dom"
import "./TimeTable.css"
import { TimeTable } from "../../assets"



export default function index() {
    return createPortal(
        <section className="timetable__wrapper">
            <img src={TimeTable} alt="coe time table" className="timetable__image" />
        </section>,
        document.getElementById("time-table")
    )
}