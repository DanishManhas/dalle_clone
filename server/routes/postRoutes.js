import express from "express";

import * as dotenv from "dotenv";

import { v2 as cloudinary } from "cloudinary";

import React from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();
