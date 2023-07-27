import { NavLink } from "react-router-dom";
import { useState } from "react";




export default function NavLinks({ isClassRep }) {

    return (
        <>
            <NavLink className="actives" to="/"
                style={({isActive}) => {
                    return { fontWeight: isActive ? "bold" : "",}
                }}
            >
                 <li className="navbar-li">Home</li>    
            </NavLink>

            <NavLink className="actives" to="/articles"
            style={({isActive}) => {
                return { fontWeight: isActive ? "bold" : "",}
            }}
            >
            <li className="navbar-li">Articles</li>    
            </NavLink>

            <NavLink className="actives" to="/department" style={({isActive}) => {
                    return { fontWeight: isActive ? "bold" : "",} 
                }}
            >
                <li className="navbar-li">Dep.Info</li>    
            </NavLink>
            
            {
                isClassRep && (
                    <NavLink className="actives" to="/class-rep-login" style={({isActive}) => {
                            return { fontWeight: isActive ? "bold" : "",} 
                        }}
                    >
                        <li className="navbar-li">Rep Login</li>    
                    </NavLink>
                )
            }

            <NavLink className="actives" to="/class-rep-login"
                style={({isActive}) => {
                    return { fontWeight: isActive ? "bold" : "",}
                }}
            >
                <li className="navbar-li">Allocation</li>    
            </NavLink>
        </>
    )
}