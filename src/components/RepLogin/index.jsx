import { useState } from "react";
import "./RepLogin.css"



export default function index() {
    const [loginDetails, setLoginDetails] = useState({
        RepId: "",
        Department: ""
    })

    
    function onHandleSelectChange(event) {
        setLoginDetails(prevDetails => {
            return { ...prevDetails, Department: event.target.value }
        })
    }

    function onHandleIdChange(event) {
        setLoginDetails(prevDetails => {
            return { ...prevDetails, RepId: event.target.value }
        })
    }

    
    function onHandleFormSubmit(event) {
        event.preventDefault();
        // send data to backend api 
        console.log(loginDetails)
    }

    return (
        <div className="RepLogin--component">
            <h2 className="RepLogin--header">Class Rep Login</h2>
            <div className="RepLogin--header__underline"/>
            <form className="RepLogin--form" onSubmit={onHandleFormSubmit}>
                <label className="input--title">Rep ID</label> <br /> <br />
                <input 
                    className="RepLogin--formId"
                    placeholder="Rep Id"
                    value={loginDetails.RepId}
                    onChange={onHandleIdChange}
                /> <br />
                <select className="RepLogin--select_fields"
                    onChange={onHandleSelectChange}
                >
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