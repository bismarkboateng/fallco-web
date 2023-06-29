import { createPortal } from "react-dom"
import "./TimeTable.css"

export default function index() {
    return createPortal(
        <section className="timetable__wrapper">
            Time Table
        </section>,
        document.getElementById("time-table")
    )
}