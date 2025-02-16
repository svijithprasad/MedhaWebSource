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
    const { name, phone, collegeName, course, hodName, hodPhone, transactionId, events, eventDetails, totalAmount, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate Razorpay signature
    if (!verifyRazorpaySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
      return res.status(400).json({ message: "Payment verification failed!" });
    }

    const existingUser = await UserSchema.findOne({ transactionId });
    if (existingUser) {
      return res.status(400).json({ message: "Transaction ID already exists!" });
    }

    const newUser = new UserSchema({
      name,
      phone,
      collegeName,
      course,
      hodName,
      hodPhone,
      transactionId,
      events,
      eventDetails,
      totalAmount,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default registerUserToDB;
