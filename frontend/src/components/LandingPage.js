import React from 'react'
import Title from './Title'
import Features from './Features'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import CallToAction from './CallToAction'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="content">
        <Title />
        <Features />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <Footer />
    </div>
  )
}
