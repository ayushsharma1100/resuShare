import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CallToAction() {
  let navigate = useNavigate();
  return (
    <section id="cta">

    <h3>"Take the Next Step: Share Your Resume and Ignite Your Career!"</h3>
    <button type="button" className="btn btn-dark btn-lg download-button mx-2" onClick={()=>{navigate("/login");}}>Login</button>
    <button type="button" className="btn btn-light btn-lg download-button mx-2" onClick={()=>{navigate("/signup")}}>SignUp</button>

  </section>
  )
}
