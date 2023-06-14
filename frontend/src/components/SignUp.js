import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    let navigate = useNavigate();
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 20) {
            errors.name = 'Must be 20 characters or less';
        }
        else if (values.name.length < 3) {
            errors.name = 'Must be 3 characters or more';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 25) {
            errors.password = 'Must be 25 characters or less';
        }
        else if (values.password.length < 5) {
            errors.password = 'Must be 5 characters or more';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        }
        else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password did not match';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
        },
        validate,
        onSubmit: async (values) => {
            let response = await fetch('http://localhost:5500/api/auth/createuser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            response = await response.json();
            console.log(response);
            if (response.success) {
                localStorage.setItem("token", response.authToken);
                navigate("/home");
            }
            else {
                alert("Invalid Credentials")
            }
        },
    });

    return (
        <div className="row signup-margin">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className='signup-form'>
                    <h3>Welcome aboard!</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className='signup form-label'>Name</label>
                            <input
                                id="name"
                                className='signup form-control'
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                placeholder='Enter full name'
                            />
                            {formik.touched.name && formik.errors.name ? <div className='errorMessage'>{formik.errors.name}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className='signup form-label'>Email Address</label>
                            <input
                                id="email"
                                className='signup form-control'
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='Enter email'
                            />
                            {formik.touched.email && formik.errors.email ? <div className='errorMessage'>{formik.errors.email}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='signup form-label'>Password</label>
                            <input
                                id="password"
                                className='signup form-control'
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder='Enter Password'
                            />
                            {formik.touched.password && formik.errors.password ? <div className='errorMessage'>{formik.errors.password}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className='signup form-label'>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                className='signup form-control'
                                name="confirmPassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                                placeholder='Confirm password'
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='errorMessage'>{formik.errors.confirmPassword}</div> : null}
                        </div>
                        <button type="submit" className='btn btn-purple btn-primary signup my-2'>Submit</button>
                    </form>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}
