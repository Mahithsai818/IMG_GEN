import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Check Razorpay keys at startup


// Middlewares
app.use(cors());
app.use(express.json());

// Debug logging for incoming requests
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url, "BODY:", req.body);
  next();
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);

// Expose Razorpay Key to frontend securely
app.get("/api/get-razorpay-key", (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID });
});

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Start server after MongoDB connection
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
