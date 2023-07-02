import { useState } from "react";
import "./RepLogin.css"



export default function index() {
    const [loginDetails, setLoginDetails] = useState({
        RepId: "",
        Department: ""
    })

    
    function onHandleSelectChange() {
        console.log("Handle Select form change")
    }

    function onHandleIdChange(event) {
        console.log(event.target.value)
    }
    
    function onHandleFormSubmit(event) {
        event.preventDefault();
        console.log("Handle Form submit")
    }

    return (
        <div className="RepLogin--component">
            <h2 className="RepLogin--header">Class Rep Login</h2>
            <div className="RepLogin--header__underline"/>

            <form className="RepLogin--form" onSubmit={onHandleFormSubmit}>
                <label className="input--title">Rep ID</label> <br /> <br />
                <input 
                    className="RepLogin--formId"
                    value={loginDetails.RepId}
                    onChange={onHandleIdChange}
                /> <br />
                <select className="RepLogin--select_fields"
                    onChange={onHandleSelectChange}
                >
                    {/* <h4 className="RepLogin--select_fields-title">Select Department</h4> */}
                    <option>COE</option>
                    <option>TE</option>
                    <option>EE</option>
                </select>
                
                <br />

                <button className="RepLogin__submit-btn" onClick={onHandleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}