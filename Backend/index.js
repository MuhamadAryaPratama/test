import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

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
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(router);

app.listen(4000, '0.0.0.0', () => {
  console.log("Server berhasil di running di port 4000");
});
