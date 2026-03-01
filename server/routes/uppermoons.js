import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import upperMoonData from "../data/uppermoons.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  res.status(200).json(upperMoonData);
});

router.get("/:slug", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/detail.html"));
});

export default router;
