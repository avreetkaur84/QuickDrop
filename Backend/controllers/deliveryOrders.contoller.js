import Delivery from '../models/Delivery';
import User from '../models/User';

const calculateRandomDistance = () => {
    const distances = [2, 5, 7, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]; // List of random distances in km
    const randomIndex = Math.floor(Math.random() * distances.length); // Get random index
    return distances[randomIndex]; // Return the randomly selected distance
};

export const createDeliveryOrder = async (req, res) => {
  try {
    // Extract fields from request body
    const { name, phone, pickupAddress, deliveryDate, startTime, endTime, deliveryType, orderItems } = req.body;

    // Find the user by phone number (assuming this is unique enough for user identification)
    let user = await User.findOne({ phone });

    // If user doesn't exist, create a new one
    if (!user) {
      user = new User({
        name,
        phone,
        address: pickupAddress, // Assuming pickup address is the user's address
        email: `${name}@dummy.com`, // Create a dummy email if no email is provided
      });
      await user.save();
    }

    // Create the delivery order using the existing or newly created user
    const newDeliveryOrder = new Delivery({
      user: user._id,  // Link delivery order to the user
      pickupAddress,
      deliveryAddress: orderItems[0].deliveryAddress,  // Assuming each order item has its own delivery address
      bookDetails: orderItems.map(item => item.bookTitle).join(', '), // Combine book titles as bookDetails
      flexibility: deliveryType,  // Map deliveryType to flexibility
      preferredDeliveryDate: new Date(deliveryDate),
      deliveryDistance: calculateRandomDistance(),  // Function to calculate delivery distance
      userProvidedTimeSlotStart: startTime,
      userProvidedTimeSlotEnd: endTime,
      generatedTimeSlots: generateMiniTimeSlots(startTime, endTime),  // Example function to generate mini time slots
    });

    // Save the delivery order
    await newDeliveryOrder.save();

    // Add this delivery to the user's delivery requests
    user.deliveryRequests.push(newDeliveryOrder._id);
    await user.save();

    // Send success response
    res.status(201).json({ message: 'Delivery order created successfully', deliveryOrder: newDeliveryOrder });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Error creating delivery order', error: error.message });
  }
};
