import express from "express";
import dotenv from "dotenv";
import db from "../../Backend/config/Database.js";
import router from "../../Backend/routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    await db.authenticate();
    console.log("Database Connected...");
    await db.sync();
  } catch (error) {
    console.log(error);
  }
})();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend")));
app.use("/.netlify/functions/server", router);

export const handler = serverless(app);
