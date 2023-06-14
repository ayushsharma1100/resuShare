import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import ResumeContext from '../contexts/ResumeContext';
import AlertContext from '../contexts/AlertContext';
const MAX_FILE_SIZE = 307200

export default function AddResume() {
    let { addResume } = useContext(ResumeContext);
    let { showAlert } = useContext(AlertContext);
    let navigate = useNavigate();
    let { fetchUser } = useContext(ResumeContext);
    let res = {};
    let token = localStorage.getItem("token");
    const formik = useFormik({
        initialValues: {
            resumeTitle: '',
            description: '',
            tag: 'General',
            resume: '',
        },
        validationSchema: Yup.object({
            resumeTitle: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required').min(3, 'Must be 3 characters or more'),
            description: Yup.string().max(300, 'Must be 300 characters or less')
                .min(5, 'Must be 5 characters or more').required('Required'),
            tag: Yup.string().max(15, 'Must be 15 characters or less')
                .min(3, 'Must be 3 characters or more')
                .required('required'),
            resume: Yup.mixed().required('required')
                .test("is-valid-type", "Not a valid resume type, upload pdf", value => { return value.name.split(".").slice(-1)[0] === "pdf" ? true : false })
                .test("is-valid-size", "Max allowed size is 300Kb", value => value && value.size <= MAX_FILE_SIZE)
        }),
        onSubmit: async (values) => {
            let formData = new FormData();
            formData.append('title', values.resumeTitle);
            formData.append('description', values.description);
            formData.append('tag', values.tag);
            formData.append('resume', values.resume);
            let response = await addResume(formData, token);
            console.log(response);
            formik.resetForm();
            showAlert("Resume shared successfully!", "success");
            navigate("/home");
        },
    });
    useEffect(() => {
        (async () => {
            if (token) { res = await fetchUser(token); }
            if (!res.success) {
                showAlert("Please Login!", "info");
                navigate("/login");
            }
            // eslint-disable-next-line
        })();
    }, [])
    return (
        <>
            {token && <div className="container">
                <h3>Share Resume</h3>
                <div className='signup-form'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row shareResume">
                            <div className="col-md-5 mx-2">
                                <div className="mb-3">
                                    <label htmlFor="resumeTitle" className='signup form-label'>Title</label>
                                    <input
                                        id="resumeTitle"
                                        className='signup form-control'
                                        name="resumeTitle"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.resumeTitle}
                                        placeholder='Enter resumeTitle'
                                    />
                                    {formik.touched.resumeTitle && formik.errors.resumeTitle ? <div className='errorMessage'>{formik.errors.resumeTitle}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className='signup form-label'>Description</label>
                                    <textarea id='description' name='description' className='signup form-control' onChange={formik.handleChange}
                                        value={formik.values.description}
                                        placeholder='Describe you experience with this resume' rows={4} />
                                    {formik.touched.description && formik.errors.description ? <div className='errorMessage'>{formik.errors.description}</div> : null}
                                </div>
                            </div>
                            <div className="col-md-5 mx-2">
                                <div className="mb-3">
                                    <label htmlFor="tag" className='signup form-label'>Tag</label>
                                    <input
                                        id="tag"
                                        className='signup form-control'
                                        name="tag"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.tag}
                                        placeholder='tag'
                                    />
                                    {formik.touched.tag && formik.errors.tag ? <div className='errorMessage'>{formik.errors.tag}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="resume" className='signup form-label'>Resume</label>
                                    <input
                                        id="resume"
                                        className='signup form-control'
                                        name="resume"
                                        type="file"
                                        onChange={(e) => { formik.setFieldValue("resume", e.target.files[0]); }}
                                    />
                                    {formik.touched.resume && formik.errors.resume ? <div className='errorMessage'>{formik.errors.resume}</div> : null}
                                </div>
                                <div className='d-flex'>
                                    <button type="submit" className='btn btn-purple btn-primary my-2 d-inline'>Share Resume</button>
                                    <button type='button' className='btn btn-purple btn-primary my-2 mx-2 d-inline' onClick={(e) => {
                                        formik.resetForm();
                                    }}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>}
        </>
    );
}
