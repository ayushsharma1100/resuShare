import React from 'react'
import resumeTitle from '../images/resumeTitle.png'

export default function Title() {
    return (
        <section id='title'>
            <div className="container-fluid padding-title">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h1>Share Your Resume, Grow and Shine.</h1>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="title-image" src={resumeTitle} alt="resume-mockup" />
                    </div>
                </div>
            </div>
        </section>
    )
}
