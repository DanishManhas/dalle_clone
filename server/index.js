import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import dalle from "./routes/dalleRoutes.js"


dotenv.config();

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalle)

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {}
};

startServer();
