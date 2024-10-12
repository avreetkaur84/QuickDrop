import React from 'react'
import HeroSection from '../Componenets/Home/HeroSection'
import Features from '../Componenets/Home/Features'
import HowItWorks from '../Componenets/Home/HowItWorks'
import { Testimonials } from '../Componenets/Home/Testimonials'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
    </div>
  )
}

export default HomePage
