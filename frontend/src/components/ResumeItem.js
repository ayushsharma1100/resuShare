import React from 'react'

export default function ResumeItem(props) {
    let buffer = new Uint8Array(props.buffer)
    let pdfBlob = new Blob([buffer], { type: 'application/pdf' });
    let pdfUrl = URL.createObjectURL(pdfBlob);


    return (
        <div className="card my-3 shadow pad-main">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

                <div className="card resumePreview m-auto">
                    <div className="card-body">
                        <iframe src={pdfUrl} className='w-100' title={props.id} style={{ filter: "blur(5px)", pointerEvents: "none", height: "250px" }}></iframe>
                    </div>
                    <div className="card-footer text-center">
                        <a href={pdfUrl} target='_blank' rel="noreferrer">Resume.pdf</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
