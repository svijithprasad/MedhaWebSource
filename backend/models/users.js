import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    unique: true, // Ensures transaction ID is unique
  },
  events: {
    type: [String], // Array of event names
    required: true,
  },
  eventDetails: {
    type: Map,
    of: Object, // Stores additional event details as key-value pairs
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt & updatedAt timestamps

export const UserSchema = mongoose.model("User", RegistrationSchema);
