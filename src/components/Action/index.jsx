import { Actions } from "./constants"
import "./Action.css"



export default function index() {
    return (
        <div className="action--container">
            <h1 className="action--header">What would you like to do ?</h1>
            <div className="action--btn_container">
                { Actions.map((action) => (
                    <button className="action--btn" key={action.index}>
                        {  action.title }
                    </button>
                )) }
            </div>
        </div>
    )
}