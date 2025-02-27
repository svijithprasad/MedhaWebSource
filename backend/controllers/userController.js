import crypto from "crypto";
import { UserSchema } from "../models/users.js";

// Function to verify Razorpay signature
const verifyRazorpaySignature = (order_id, payment_id, signature) => {
  const secret = process.env.RAZORPAY_SECRET;
  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  return generated_signature === signature;
};

// Function to register user to DB after payment validation
const registerUserToDB = async (req, res) => {
  try {
    const { name, phone, collegeName, course, hodName, hodPhone, events, eventDetails, totalAmount } = req.body;

    // Save user with a temporary pending transaction ID
    const newUser = new UserSchema({
      name,
      phone,
      collegeName,
      course,
      hodName,
      hodPhone,
      transactionId: `PENDING_${Date.now()}`, // Mark as pending
      events,
      eventDetails,
      totalAmount,
    });

    const savedRecord = await newUser.save();

    res.status(201).json(savedRecord); // Send back to frontend
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export default registerUserToDB;
