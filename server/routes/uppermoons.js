import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import upperMoonData from "../data/uppermoons.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET /uppermoons  — return all Upper Moons as JSON
router.get("/", (req, res) => {
  res.status(200).json(upperMoonData);
});

// GET /uppermoons/:slug/json  — return a single Upper Moon as JSON
router.get("/:slug/json", (req, res) => {
  const moon = upperMoonData.find((m) => m.slug === req.params.slug);
  if (!moon) return res.status(404).json({ error: "Upper Moon not found" });
  res.status(200).json(moon);
});

// GET /uppermoons/:slug  — serve the detail page HTML
router.get("/:slug", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/detail.html"));
});

export default router;
