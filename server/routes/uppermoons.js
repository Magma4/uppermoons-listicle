import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import UpperMoonsController from "../controllers/uppermoons.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", UpperMoonsController.getUpperMoons);

router.get("/:slug/json", UpperMoonsController.getUpperMoonBySlug);


router.get("/:slug", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/detail.html"));
});

export default router;
