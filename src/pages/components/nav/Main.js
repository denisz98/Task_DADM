import { NavLink } from 'react-router-dom';

export default function Main(){
    return(
        <ul className="nav shadow mb-2 d-flex justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
            </li>
        </ul>
    )
}