import React from 'react'
import img1 from '../images/image-1.jpg'
import img2 from '../images/image-2.jpg'

export default function testimonials() {
    return (
        <section id="testimonials">
            <div id="testimonial-carousal" className="carousel slide">
                <div className="carousel-inner padding">
                    <div className="carousel-item active">
                        <h2>Thanks to this platform, I learned the resume secrets that employers love. It made all the difference in my job search!</h2>
                        <img className="testimonial-img" src={img1} alt="user-profile" />
                        <em>ResumePro23</em>
                    </div>
                    <div className="carousel-item">
                        <h2 className="testimonial-text">This platform helped me create a standout resume that landed me my dream job. Highly recommended!</h2>
                        <img className="testimonial-img" src={img2} alt="user-profile" />
                        <em>JobSeeker123</em>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousal" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousal" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}
