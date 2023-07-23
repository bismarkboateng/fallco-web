import { useState } from "react";
import "./RepLogin.css"
import { Navigate, useNavigate } from "react-router-dom";



export default function index({ setIsClassRep }) {
    const navigate = useNavigate();


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

        // after computation, move to the class alloc
        setIsClassRep(true);
        navigate("/locate-class")
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

            <p style={{ color: "blue", marginTop: "100", fontSize: "12px"}}>
                Ask HOD for your Rep ID
            </p>
        </div>
    )
}