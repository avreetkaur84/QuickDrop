import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    deliveryRequests: [{ type: Schema.Types.ObjectId, ref: 'Delivery' }]
});

export default mongoose.model('User', userSchema);
