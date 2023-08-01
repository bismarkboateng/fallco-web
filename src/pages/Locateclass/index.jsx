import { useState } from "react"
import "./Locateclass.css"
import { TimeTable, AvailableClass } from "../../components"



export default function index() {
    const [ openTimeTable, setOpenTimeTable ] = useState(false)

    function handleOpenModal() {
        setOpenTimeTable((prevMode) => !prevMode)
    }

    return (
        <section className="locate--class">

            <div className="locate--button">
                <div className="direction">
                    <div>
                        {/* <button className="timetable--btn"
                            onClick={handleOpenModal}
                        >
                            Open Time Table
                        </button> */}
                        <p className="class--size">
                            Class Size: <span className="size">257</span>
                        </p>
                    </div>
                    <div>
                        <button className="rep--hod">
                            Login
                        </button>
                        <p className="gray--text">
                            Notice: Only accessible to Class Reps.<br />
                            Rolling out soon..
                        </p>
                    </div>

                </div>
                
                <div className="locate--class__wrapper"/>
            </div>
            <AvailableClass />    

            { openTimeTable && <TimeTable /> }
        </section>
    )
}