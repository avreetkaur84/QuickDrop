import React, {useEffect} from 'react';
import FeatureCard from './FeatureCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

import realTimeTracking from "../../assets/Features/realTimeTracking.jpg"
import multimode from "../../assets/Features/multimode.jpg"
import pricing from "../../assets/Features/pricing.jpg"
import flexibleSlot from "../../assets/Features/flexibleSlot.jpg"

// JSON Data (you can also fetch this from an API)
const featuresData = [
    {
      id: 1,
      title: 'Flexible Delivery Slots',
      description: 'Choose delivery time slots that suit your schedule for convenience.',
      image: flexibleSlot,
    },
    {
        id: 2,
        title: 'Real-Time Tracking',
        description: 'Monitor your parcel with live location updates from pickup to delivery.',
        image: realTimeTracking,
    },
    {
      id: 3,
      title: 'Multimode Delivery',
      description: 'Combining different delivery methods (bikes, vans, and more) for maximum efficiency.',
      image: multimode,
    },
    {
      id: 4,
      title: 'Variant Pricing Model',
      description: 'Pay based on delivery urgency and distance with customizable pricing options.',
      image: pricing,
    },
  ];

function Features() {
    useEffect(() => {
      AOS.init();
    }, [])
  
    return (
      <div className='py-16 pb-16 bg-gray-50'>
        <div className="">
          <h1 className='font-bold text-3xl text-center pb-20'>Features</h1>
        </div>
        <div className="grid grid-cols-4 gap-5 px-10" data-aos="fade-up">
          {featuresData.map((feature) => (
            <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
            />
          ))}
        </div>
      </div>
    )
  }

export default Features;