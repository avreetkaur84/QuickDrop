import React from 'react'
import Lottie from 'lottie-react';

import delivery from "../../assets/HeroSection/HeroSection.json"
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='flex p-24'>
      <div className="w-1/2 pt-6 px-4">
        <h1 className='text-4xl font-bold pb-8'>
          <span className='text-rose-600'>Smart</span> and <span className='text-rose-600'>Flexible</span> Delivery for Modern Lifestyles
        </h1>
        <h2 className='text-stone-500 text-md font-semibold text-justify pb-8 pr-5'>
          Optimized delivery solutions tailored to your availability, preferences, and location. 
          Our AI-powered service ensures fast, reliable, and cost-effective parcel delivery.
        </h2>
        <div className="bg-rose-500 py-2 text-center rounded-3xl font-bold px-2 w-40 text-white">
          <Link to="/bookDelivery">
            <button>Book Delivery</button>
          </Link>
        </div>
        <div className="flex justify-start gap-4 mt-8">
          <div className="bg-blue-100 text-blue-600 text-center py-4 px-4 w-44 rounded-lg shadow-md">
            <p className="text-md font-bold">Available in 10+ Cities</p>
          </div>
          <div className="bg-rose-100 text-rose-600 text-center py-4 px-4 w-44 rounded-lg shadow-md">
            <p className="text-md font-bold">Serving 1000+ Happy Customers</p>
        </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <Lottie animationData={delivery} className='h-full w-full z-10'/>
      </div>
    </div>
  )
}

export default HeroSection;