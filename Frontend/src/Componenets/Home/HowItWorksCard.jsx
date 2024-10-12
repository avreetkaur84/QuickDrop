import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import image from "../../assets/navbar/logo.png"

const content = [
  {
    title: "Select Delivery Time Slot",
    description:
      "Enter your preferred delivery date and available time slot. Users can input their convenient time range (e.g., 4 PM to 8 PM on October 15th). AI ensures flexibility by adjusting slots based on delivery personnel availability.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Choose Your Preferred Slot",
    description:
      "Select your primary and backup time slots. The user selects their preferred slot and an alternate one in case of unforeseen circumstances. A summary of the order and delivery window is provided.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Receive Delivery Notification",
    description:
      "On the day of delivery, receive a notification. The user gets notified when the delivery is dispatched, along with tracking information.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Track Your Delivery in Real-Time",
    description:
      "Track the delivery in real-time. Use the tracking feature to view the live location of the delivery and expected arrival time. In case of any issues, the user can communicate directly with the delivery person.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Delivery Confirmation",
    description:
      "Once your delivery arrives, you’ll receive confirmation. After the delivery is completed successfully, the user will receive a final notification of delivery.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Feedback & History",
    description:
      "Review your delivery history and give feedback. Users can view past deliveries and leave feedback to help improve the service.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img 
            src={image} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
        />
      </div>
    ),
  },
];
export function HowItWorksCard() {
  return (
    (<div className="">
      <StickyScroll content={content} />
    </div>)
  );
}