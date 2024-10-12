import mongoose from 'mongoose';
const { Schema } = mongoose;

const deliverySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  pickupAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  bookDetails: { type: String, required: true },
  flexibility: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  preferredDeliveryDate: { type: Date, required: true },
  deliverySuccessRate: { type: Number },
  deliveryDistance: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'delivered'], default: 'pending' },

  // User-provided time slot range
  userProvidedTimeSlotStart: { type: String, required: true }, // e.g., "14:00" for 2 PM
  userProvidedTimeSlotEnd: { type: String, required: true },   // e.g., "16:00" for 4 PM

  // Generated mini time slots
  generatedTimeSlots: [{ type: String }],  // Mini slots created by AI
  selectedTimeSlot: { type: String }         // Time slot selected by the user
});

export default mongoose.model('Delivery', deliverySchema);