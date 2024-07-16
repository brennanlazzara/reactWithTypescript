import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Initialize Anthropic client with API key
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Chatbot Endpoint
app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Ensure the first message has a "user" role
    if (messages.length === 0 || messages[0].role !== "user") {
      throw new Error("First message must have a 'user' role");
    }

    // Call Anthropic API
    const completion = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      max_tokens: 1000,
      messages: messages,
    });

    // Send response back to client
    res.json({ response: completion.content[0].text });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(400)
      .json({ error: error.message || "An error occurred while processing your request." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
