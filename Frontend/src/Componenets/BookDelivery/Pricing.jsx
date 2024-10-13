import React, { useState } from "react";

// Sample data for the available slots (imported from previous code or can be shared)
const availableSlots = [
  // same slot data as before...
];

const calculatePrice = (slot, distance) => {
  let basePrice = 50; // Base delivery fee

  if (slot.startTime === "6:00 PM" || slot.startTime === "7:00 PM") {
    basePrice += 20; // Peak hours
  } else if (slot.startTime === "9:00 PM") {
    basePrice += 10; // Late hours
  }

  if (distance <= 5) {
    basePrice += 30; // Short distance
  } else if (distance > 5 && distance <= 10) {
    basePrice += 50; // Medium distance
  } else {
    basePrice += 80; // Long distance
  }

  return basePrice;
};

const Pricing = ({ selectedSlot }) => {
  const [distance, setDistance] = useState(""); // Distance input by user
  const [price, setPrice] = useState(null); // Calculated price

  const handlePriceCalculation = () => {
    const finalPrice = calculatePrice(selectedSlot, parseFloat(distance));
    setPrice(finalPrice);
  };

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Calculate Delivery Price</h2>
        <p className="text-gray-600">Enter your distance and get the price based on the time slot.</p>
      </div>

      {/* Input for Distance */}
      <div className="text-center mb-4">
        <label className="block mb-2 font-semibold" htmlFor="distance">
          Enter Distance (in km):
        </label>
        <input
          type="number"
          id="distance"
          className="px-4 py-2 border rounded-lg w-full max-w-xs"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Enter distance in km"
        />
      </div>

      {/* Button to Calculate Price */}
      <div className="text-center">
        <button
          onClick={handlePriceCalculation}
          disabled={!selectedSlot || !distance}
          className="bg-green-600 text-white py-2 px-6 rounded-lg disabled:opacity-50"
        >
          Calculate Price
        </button>
      </div>

      {/* Show Calculated Price */}
      {price !== null && (
        <div className="text-center mt-6">
          <p className="text-xl font-bold text-gray-800">
            Total Price: ₹{price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Pricing;