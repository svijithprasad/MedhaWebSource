import { UserSchema } from "../models/users.js";


// Function to register user in DB after successful payment
const registerUserToDB = async (req, res) => {
  try {
    const { name, phone, collegeName, course, transactionId, events, eventDetails, totalAmount } = req.body;

    // Check if transactionId already exists (to avoid duplicate entries)
    const existingUser = await UserSchema.findOne({ transactionId });
    if (existingUser) {
      return res.status(400).json({ message: "Transaction ID already exists!" });
    }

    // Create a new user document
    const newUser = new UserSchema({
      name,
      phone,
      collegeName,
      course,
      semester,
      transactionId,
      events,
      eventDetails,
      totalAmount,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default registerUserToDB;
