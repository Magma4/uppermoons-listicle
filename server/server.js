import express from "express";
import "./config/dotenv.js";
import path from "path";
import { fileURLToPath } from "url";
import upperMoonsRouter from "./routes/uppermoons.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the public directory at the web root
app.use(express.static("./public"));
app.use("/uppermoons", upperMoonsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "public/404.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
