import { NavLink } from "react-router-dom";




export default function NavLinks() {
    return (
        <>
        <NavLink className="active" to="/articles"
        style={({isActive}) => {
            return { fontWeight: isActive ? "bold" : "",}
        }}
        >
        <li className="navbar-li">Articles</li>    
        </NavLink>

        <NavLink className="active" to="/department" style={({isActive}) => {
                return { fontWeight: isActive ? "bold" : "",} 
            }}
        >
            <li className="navbar-li">Dep.Info</li>    
        </NavLink>

        <NavLink className="active" to="/class-rep-login" style={({isActive}) => {
                return { fontWeight: isActive ? "bold" : "",} 
            }}
        >
            <li className="navbar-li">Rep Login</li>    
        </NavLink>

        <NavLink className="active" to="/locate-class"
            style={({isActive}) => {
                return { fontWeight: isActive ? "bold" : "",}
            }}
        >
            <li className="navbar-li">Class Alloc</li>    
        </NavLink>
    </>
    )
}