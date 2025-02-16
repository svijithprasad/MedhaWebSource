import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
import registerUserToDB from "./controllers/userController.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT;


const mongoUrl = process.env.MONGO_URI;

mongoose
  .connect(mongoUrl, {
    // useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Allow frontend requests

// app.post("/order", async (req, res) => {
//   try {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });

//     const options = req.body;
//     const order = await razorpay.orders.create(options);

//     if (!order) {
//       console.log("Order id undefined")

//       return res.status(500).send("Error");
//     }
//     console.log("Order generated and sent")
//     res.json(order);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error");
//     console.log("ERROR IN ORDER API")
//   }
// });

app.post("/order", async (req, res) => {
  const totalAvailableTechnicalEvents = 7;
  try {
    const { events, culturalEvents, eventDetails } = req.body;

    // Securely calculate total amount on backend
    const calculateTotalAmount = () => {
      let technicalParticipants = 0;
      let culturalParticipants = 0;

      // Count technical event participants
      events.forEach((event) => {
        const participants = eventDetails[event] || {};
        technicalParticipants += Object.values(participants).filter(
          (p) => p.trim() !== ""
        ).length;
      });

      // Count cultural event participants
      culturalEvents.forEach((event) => {
        const participants = eventDetails[event] || {};
        culturalParticipants += Object.values(participants).filter(
          (p) => p.trim() !== ""
        ).length;
      });

      let calculatedAmount = technicalParticipants * 150 + culturalParticipants * 100;

      // Apply cap if all technical events are selected
      if (events.length === totalAvailableTechnicalEvents) {
        calculatedAmount = Math.min(calculatedAmount, 1500 + culturalParticipants * 100);
      }

      return calculatedAmount * 100; // Convert to paisa for Razorpay
    };

    const amount = calculateTotalAmount();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      console.log("Order creation failed");
      return res.status(500).send("Error");
    }

    console.log("Order generated:", order);

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      selectedEvents: [...events, ...culturalEvents], // Send back to frontend
    });
  } catch (err) {
    console.log("ERROR IN ORDER API:", err);
    res.status(500).send("Error");
  }
});


// app.post("/order/validate", async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
//   //order_id + "|" + razorpay_payment_id
//   sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//   const digest = sha.digest("hex");
//   if (digest !== razorpay_signature) {
//     return res.status(400).json({ msg: "Transaction is not legit!" });
//   }

//   res.json({
//     msg: "success",
//     orderId: razorpay_order_id,
//     paymentId: razorpay_payment_id,
//   });
// });

app.post("/register", registerUserToDB );

app.listen(5088, () => {
  console.log("Listening on port", PORT);
});