import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import alertContext from '../contexts/AlertContext';

export default function Login() {
    let { showAlert } = useContext(alertContext);
    let navigate = useNavigate();
    let validateLogin = () => {
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email) {
            document.getElementById("loginErrorEmail").innerText = "Required";
            return false;
        }
        else if (!email.match(validRegex)) {
            document.getElementById("loginErrorEmail").innerText = "Enter valid email";
            return false;
        }
        if (!password) {
            document.getElementById("loginErrorPassword").innerText = "Required";
            return false
        }
        else if (password.length > 25) {
            document.getElementById("loginErrorPassword").innerText = "Must be 25 characters or less";
            return false;
        }
        else if (password.length < 5) {
            document.getElementById("loginErrorPassword").innerText = "Must be 5 characters or more";
            return false;
        }
        return true;
    }

    let handleSubmit = async () => {
        let body = {
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        }
        document.getElementById("loginErrorEmail").innerText = null;
        document.getElementById("loginErrorPassword").innerText = null;
        let response = await fetch('http://localhost:5500/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        response = await response.json();
        if (response.success) {
            showAlert("Login Successfull", "success");
            localStorage.setItem("token", response.authToken);
            navigate("/home");
        }
        else {
            showAlert("invalid credentials", 'danger');
        }
    }
    return (
        <>
            <div className="row login-margin">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-div">
                        <h3 className='my-2'>Welcome Back</h3>
                        <form onSubmit={(e) => { e.preventDefault(); if (validateLogin()) { handleSubmit(e) } }}>
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder='Enter email' />
                                <div className="errorMessage" id='loginErrorEmail'></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" />
                                <div className="errorMessage" id='loginErrorPassword'></div>
                            </div>
                            <button type="submit" className="btn btn-purple btn-dark">Login</button>
                        </form>
                        <div id="emailHelp" className="form-text">Don't have an account.</div><span className='w-600'> <Link to="/signup" role='button'>Sign up</Link></span>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )
}
