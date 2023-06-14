import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing">

    <div className="container">
      <h2>A Plan for EveryOne's need</h2>
      <p>Simple and affordable price plans for you.</p>

      <div className="row">
        <div className="col-lg-4 col-md-6 pricing-column">
          <div className="card">
            <div className="card-header">
              <h3>College Student</h3>
            </div>
            <div className="card-body">
              <h2>Free</h2>
              <p>1 Download Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid">
                <button type="button" className="btn btn-outline-dark btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 pricing-column">
          <div className="card">
            <div className="card-header">
              <h3>Fresher</h3>
            </div>
            <div className="card-body">
              <h2>119rs / mo</h2>
              <p>Unlimited Downloads</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid">
                <button type="button" className="btn btn-dark btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 pricing-column">
          <div className="card">
            <div className="card-header">
              <h3>Experienced</h3>
            </div>
            <div className="card-body">
              <h2>399rs / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Downloads</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid">
                <button type="button" className="btn btn-dark btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
