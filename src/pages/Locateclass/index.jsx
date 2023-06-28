import "./Locateclass.css"


export default function index() {

    function handleOpenModal() {
        console.log("Open Time Table as Modal")
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

        </section>
    )
}