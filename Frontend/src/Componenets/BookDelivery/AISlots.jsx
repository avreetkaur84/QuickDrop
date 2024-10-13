import React, { useState } from "react";
import { AISlotUI } from "./AISlotUI";
import { useFormContext } from '../ContextApi/FormProvider';

// Mock data for available slots
const available = [
  {
    slotId: 1,
    startTime: "4:00 PM",
    endTime: "5:00 PM",
    flexibility: "High",
    trafficCondition: "Low",
  },
  {
    slotId: 2,
    startTime: "5:00 PM",
    endTime: "6:00 PM",
    flexibility: "Medium",
    trafficCondition: "Medium",
  },
  {
    slotId: 4,
    startTime: "7:00 PM",
    endTime: "8:00 PM",
    flexibility: "High",
    trafficCondition: "Medium",
  },
  {
    slotId: 5,
    startTime: "8:00 PM",
    endTime: "9:00 PM",
    flexibility: "Low",
    trafficCondition: "High",
  },
  {
    slotId: 6,
    startTime: "9:00 PM",
    endTime: "10:00 PM",
    flexibility: "Medium",
    trafficCondition: "Low",
  }
];

// Function to calculate price based on slot and distance
const calculatePrice = (slot, distance) => {
  let basePrice = 50; // Base price in currency units
  let distanceCharge = distance * 5; // Charge 5 units per kilometer

  // Pricing multiplier based on flexibility and traffic condition
  let flexibilityMultiplier = slot.flexibility === "High" ? 1 : slot.flexibility === "Medium" ? 1.2 : 1.5;
  let trafficMultiplier = slot.trafficCondition === "Low" ? 1 : slot.trafficCondition === "Medium" ? 1.2 : 1.5;

  // Calculate total price
  return basePrice + distanceCharge * flexibilityMultiplier * trafficMultiplier;
};

const AISlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [distance, setDistance] = useState(Math.floor(Math.random() * 20) + 1); // Random distance (1-20 km)
  const [price, setPrice] = useState(null);
  const { show } = useFormContext();

  const handleSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      const calculatedPrice = calculatePrice(selectedSlot, distance);
      setPrice(calculatedPrice);
      // alert(`Slot selected: ${selectedSlot.startTime} - ${selectedSlot.endTime}, Distance: ${distance} km, Price: ₹${calculatedPrice}`);
    }
  };

  return (
    <div className="py-10">
      {show==true && (
      <div className="py-10 px-8 rounded-2xl shadow-lg flex justify-center flex-col mx-5 bg-white">
        <div className="">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-rose-500">Choose Your Preferred Time Slot</h2>
            <p className="text-gray-600">Select a time slot recommended for optimal delivery</p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {available.map((slot, index) => (
              <div
                key={index}
                className={`py-4 px-2 border rounded-lg cursor-pointer text-center shadow-sm hover:bg-blue-100 ${
                  selectedSlot === slot ? "bg-blue-50 border-2 border-blue-600" : "border-gray-300"
                }`}
                onClick={() => handleSelect(slot)}
              >
                <p className="text-md font-semibold">
                  {slot.startTime} - {slot.endTime}
                </p>
                <div>
                  <p>Traffic: {slot.trafficCondition}</p>
                  <p>Flexibility: {slot.flexibility}</p>
                </div>
              </div>
            ))}
          </div>

          
          <div className="text-center mt-4">
            <p className="text-lg">Delivery Distance: {distance} km</p>
          </div>

          
          <div className="text-center mt-6">
            <button
              onClick={handleConfirm}
              disabled={!selectedSlot}
              className="bg-rose-500 text-white py-2 px-6 rounded-lg disabled:opacity-50"
            >
              Confirm Time Slot
            </button>
          </div>

          
          {price !== null && (
            <div className="text-center mt-6">
              <p className="text-xl font-bold">Total Delivery Price: ₹{price}</p>
            </div>
          )}
          </div>
      </div>
      )}

      {show==false && (
        <div className="">
          <AISlotUI/>
        </div>
      )}
    </div>
  );
};

export default AISlots;