import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AlertContext from '../contexts/AlertContext';

function NavBar() {
    let location = useLocation();
    let { showAlert } = useContext(AlertContext);
    let navigate = useNavigate();
    let token = localStorage.getItem("token");
    return (
        <nav className="navbar navbar-expand-lg bg-warning navbar-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">resuShare</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? 'active' : ''}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/share-resume" ? 'active' : ''}`} to="/share-resume">Add Resume</Link>
                        </li>
                    </ul>
                    {token ? <button className='btn btn-primary ms-auto' onClick={() => { localStorage.removeItem("token"); showAlert("Logged Out", "success"); navigate("/login") }}>Logout</button> : <div className="d-flex ms-auto">
                        <Link to="/login" className="btn btn-primary mx-1" role="button" aria-pressed="true">Login</Link>
                        <Link to="/signup" className="btn btn-primary mx-1" role="button" aria-pressed="true">Sign Up</Link>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
