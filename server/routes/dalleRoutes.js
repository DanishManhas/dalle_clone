import express from "express";

import * as dotenv from "dotenv";

import { OpenAI } from "openai";

import React from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

const configuration = {
  apiKey: process.env.OPEN_AI_API_KEY,
};

const openai = new OpenAI(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E");
});

router.route("/").post(async (req, res) => {
  try {
    const prompt = req.body.prompt;
    console.log("Here's what we recieve in the request", prompt);

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
      model: "dall-e-2",
    });
    console.log(" The response received is ", aiResponse);
    const image = aiResponse.data[0].b64_json;
    console.log(" The generated image is probably at ", image);
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log("error from dalle api", error);
    res.status(500).send(error.response.data.error.message);
  }
});

export default router;
