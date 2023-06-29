import { useState } from "react"
import "./Locateclass.css"
import { TimeTable } from "../../components"


export default function index() {
    const [ openTimeTable, setOpenTimeTable ] = useState(false)

    function handleOpenModal() {
        setOpenTimeTable((prevMode) => !prevMode)
    }

    return (
        <section className="locate--class">

            <div className="locate--button">
                <button className="timetable--btn"
                    onClick={handleOpenModal}
                >
                    Open Time Table
                </button>
                <p className="class--size">
                    Class Size: <span className="size">257</span>
                </p>
            </div>

            { openTimeTable && <TimeTable /> }
        </section>
    )
}