import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";

// Pulau Sumatera
import {
  createAcehMenu,
  getAcehMenu,
  deleteAcehMenu,
  editAcehMenu,
} from "../controllers/AcehController.js";
import {
  createSumateraUtaraMenu,
  getSumateraUtaraMenu,
  deleteSumateraUtaraMenu,
  editSumateraUtaraMenu,
} from "../controllers/SumateraUtaraController.js";
import {
  createSumateraSelatanMenu,
  getSumateraSelatanMenu,
  deleteSumateraSelatanMenu,
  editSumateraSelatanMenu,
} from "../controllers/SumateraSelatanController.js";
import {
  createSumateraBaratMenu,
  getSumateraBaratMenu,
  deleteSumateraBaratMenu,
  editSumateraBaratMenu,
} from "../controllers/SumateraBaratController.js";
import {
  createBengkuluMenu,
  getBengkuluMenu,
  deleteBengkuluMenu,
  editBengkuluMenu,
} from "../controllers/BengkuluController.js";
import {
  createRiauMenu,
  getRiauMenu,
  deleteRiauMenu,
  editRiauMenu,
} from "../controllers/RiauController.js";
import {
  createKepulauanRiauMenu,
  getKepulauanRiauMenu,
  deleteKepulauanRiauMenu,
  editKepulauanRiauMenu,
} from "../controllers/KepulauanRiauController.js";
import {
  createJambiMenu,
  getJambiMenu,
  deleteJambiMenu,
  editJambiMenu,
} from "../controllers/JambiController.js";
import {
  createLampungMenu,
  getLampungMenu,
  deleteLampungMenu,
  editLampungMenu,
} from "../controllers/LampungController.js";
import {
  createBangkaBelitungMenu,
  getBangkaBelitungMenu,
  deleteBangkaBelitungMenu,
  editBangkaBelitungMenu,
} from "../controllers/BangkaBelitungController.js";

// Pulau Jawa
import {
  createBantenMenu,
  getBantenMenu,
  deleteBantenMenu,
  editBantenMenu,
} from "../controllers/BantenController.js";
import {
  createJakartaMenu,
  getJakartaMenu,
  deleteJakartaMenu,
  editJakartaMenu,
} from "../controllers/JakartaController.js";
import {
  createJawaBaratMenu,
  getJawaBaratMenu,
  deleteJawaBaratMenu,
  editJawaBaratMenu,
} from "../controllers/JawaBaratController.js";
import {
  createJawaTengahMenu,
  getJawaTengahMenu,
  deleteJawaTengahMenu,
  editJawaTengahMenu,
} from "../controllers/JawaTengahController.js";
import {
  createJawaTimurMenu,
  getJawaTimurMenu,
  deleteJawaTimurMenu,
  editJawaTimurMenu,
} from "../controllers/JawaTimurController.js";
import {
  createYogyakartaMenu,
  getYogyakartaMenu,
  deleteYogyakartaMenu,
  editYogyakartaMenu,
} from "../controllers/YogyakartaController.js";

// Pulau Sulawesi
import {
  createSulawesiUtaraMenu,
  getSulawesiUtaraMenu,
  deleteSulawesiUtaraMenu,
  editSulawesiUtaraMenu,
} from "../controllers/SulawesiUtaraController.js";
import {
  createSulawesiSelatanMenu,
  getSulawesiSelatanMenu,
  deleteSulawesiSelatanMenu,
  editSulawesiSelatanMenu,
} from "../controllers/SulawesiSelatanController.js";
import {
  createSulawesiBaratMenu,
  getSulawesiBaratMenu,
  deleteSulawesiBaratMenu,
  editSulawesiBaratMenu,
} from "../controllers/SulawesiBaratController.js";
import {
  createSulawesiTengahMenu,
  getSulawesiTengahMenu,
  deleteSulawesiTengahMenu,
  editSulawesiTengahMenu,
} from "../controllers/SulawesiTengahController.js";
import {
  createSulawesiTenggaraMenu,
  getSulawesiTenggaraMenu,
  deleteSulawesiTenggaraMenu,
  editSulawesiTenggaraMenu,
} from "../controllers/SulawesiTenggaraController.js";
import {
  createGorontaloMenu,
  getGorontaloMenu,
  deleteGorontaloMenu,
  editGorontaloMenu,
} from "../controllers/GorontaloController.js";

// Pulau Bali
import {
  createBaliMenu,
  getBaliMenu,
  deleteBaliMenu,
  editBaliMenu,
} from "../controllers/BaliController.js";
import {
  createMalukuMenu,
  getMalukuMenu,
  deleteMalukuMenu,
  editMalukuMenu,
} from "../controllers/MalukuController.js";
import {
  createMalukuUtaraMenu,
  getMalukuUtaraMenu,
  deleteMalukuUtaraMenu,
  editMalukuUtaraMenu,
} from "../controllers/MalukuUtaraController.js";

// Pulau Kalimantan
import {
  createKalimantanBaratMenu,
  getKalimantanBaratMenu,
  deleteKalimantanBaratMenu,
  editKalimantanBaratMenu,
} from "../controllers/KalimantanBaratController.js";
import {
  createKalimantanUtaraMenu,
  getKalimantanUtaraMenu,
  deleteKalimantanUtaraMenu,
  editKalimantanUtaraMenu,
} from "../controllers/KalimantanUtaraController.js";
import {
  createKalimantanTimurMenu,
  getKalimantanTimurMenu,
  deleteKalimantanTimurMenu,
  editKalimantanTimurMenu,
} from "../controllers/KalimantanTimurController.js";
import {
  createKalimantanSelatanMenu,
  getKalimantanSelatanMenu,
  deleteKalimantanSelatanMenu,
  editKalimantanSelatanMenu,
} from "../controllers/KalimantanSelatanController.js";
import {
  createKalimantanTengahMenu,
  getKalimantanTengahMenu,
  deleteKalimantanTengahMenu,
  editKalimantanTengahMenu,
} from "../controllers/KalimantanTengahController.js";

import {
  createNusaTenggaraTimurMenu,
  getNusaTenggaraTimurMenu,
  deleteNusaTenggaraTimurMenu,
  editNusaTenggaraTimurMenu,
} from "../controllers/NusaTenggaraTimurController.js";
import {
  createNusaTenggaraBaratMenu,
  getNusaTenggaraBaratMenu,
  deleteNusaTenggaraBaratMenu,
  editNusaTenggaraBaratMenu,
} from "../controllers/NusaTenggaraBaratController.js";
import {
  createPapuaMenu,
  getPapuaMenu,
  deletePapuaMenu,
  editPapuaMenu,
} from "../controllers/PapuaController.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pulau Sumatera
router.post("/aceh", createAcehMenu);
router.get("/aceh", getAcehMenu);
router.delete("/aceh/:id", deleteAcehMenu);
router.put("/aceh/:id", editAcehMenu);

router.post("/sumaterautara", createSumateraUtaraMenu);
router.get("/sumaterautara", getSumateraUtaraMenu);
router.delete("/sumaterautara/:id", deleteSumateraUtaraMenu);
router.put("/sumaterautara/:id", editSumateraUtaraMenu);

router.post("/sumateraselatan", createSumateraSelatanMenu);
router.get("/sumateraselatan", getSumateraSelatanMenu);
router.delete("/sumateraselatan/:id", deleteSumateraSelatanMenu);
router.put("/sumateraselatan/:id", editSumateraSelatanMenu);

router.post("/sumaterabarat", createSumateraBaratMenu);
router.get("/sumaterabarat", getSumateraBaratMenu);
router.delete("/sumaterabarat/:id", deleteSumateraBaratMenu);
router.put("/sumaterabarat/:id", editSumateraBaratMenu);

router.post("/bengkulu", createBengkuluMenu);
router.get("/bengkulu", getBengkuluMenu);
router.delete("/bengkulu/:id", deleteBengkuluMenu);
router.put("/bengkulu/:id", editBengkuluMenu);

router.post("/riau", createRiauMenu);
router.get("/riau", getRiauMenu);
router.delete("/riau/:id", deleteRiauMenu);
router.put("/riau/:id", editRiauMenu);

router.post("/kepulauanriau", createKepulauanRiauMenu);
router.get("/kepulauanriau", getKepulauanRiauMenu);
router.delete("/kepulauanriau/:id", deleteKepulauanRiauMenu);
router.put("/kepulauanriau/:id", editKepulauanRiauMenu);

router.post("/jambi", createJambiMenu);
router.get("/jambi", getJambiMenu);
router.delete("/jambi/:id", deleteJambiMenu);
router.put("/jambi/:id", editJambiMenu);

router.post("/lampung", createLampungMenu);
router.get("/lampung", getLampungMenu);
router.delete("/lampung/:id", deleteLampungMenu);
router.put("/lampung/:id", editLampungMenu);

router.post("/bangkabelitung", createBangkaBelitungMenu);
router.get("/bangkabelitung", getBangkaBelitungMenu);
router.delete("/bangkabelitung/:id", deleteBangkaBelitungMenu);
router.put("/bangkabelitung/:id", editBangkaBelitungMenu);

// Pulau Jawa
router.post("/banten", createBantenMenu);
router.get("/banten", getBantenMenu);
router.delete("/banten/:id", deleteBantenMenu);
router.put("/banten/:id", editBantenMenu);

router.post("/jakarta", createJakartaMenu);
router.get("/jakarta", getJakartaMenu);
router.delete("/jakarta/:id", deleteJakartaMenu);
router.put("/jakarta/:id", editJakartaMenu);

router.post("/jawabarat", createJawaBaratMenu);
router.get("/jawabarat", getJawaBaratMenu);
router.delete("/jawabarat/:id", deleteJawaBaratMenu);
router.put("/jawabarat/:id", editJawaBaratMenu);

router.post("/jawatengah", createJawaTengahMenu);
router.get("/jawatengah", getJawaTengahMenu);
router.delete("/jawatengah/:id", deleteJawaTengahMenu);
router.put("/jawatengah/:id", editJawaTengahMenu);

router.post("/jawatimur", createJawaTimurMenu);
router.get("/jawatimur", getJawaTimurMenu);
router.delete("/jawatimur/:id", deleteJawaTimurMenu);
router.put("/jawatimur/:id", editJawaTimurMenu);

router.post("/yogyakarta", createYogyakartaMenu);
router.get("/yogyakarta", getYogyakartaMenu);
router.delete("/yogyakarta/:id", deleteYogyakartaMenu);
router.put("/yogyakarta/:id", editYogyakartaMenu);

// Pulau Sulawesi
router.post("/sulawesiutara", createSulawesiUtaraMenu);
router.get("/sulawesiutara", getSulawesiUtaraMenu);
router.delete("/sulawesiutara/:id", deleteSulawesiUtaraMenu);
router.put("/sulawesiutara/:id", editSulawesiUtaraMenu);

router.post("/sulawesiselatan", createSulawesiSelatanMenu);
router.get("/sulawesiselatan", getSulawesiSelatanMenu);
router.delete("/sulawesiselatan/:id", deleteSulawesiSelatanMenu);
router.put("/sulawesiselatan/:id", editSulawesiSelatanMenu);

router.post("/sulawesibarat", createSulawesiBaratMenu);
router.get("/sulawesibarat", getSulawesiBaratMenu);
router.delete("/sulawesibarat/:id", deleteSulawesiBaratMenu);
router.put("/sulawesibarat/:id", editSulawesiBaratMenu);

router.post("/sulawesitengah", createSulawesiTengahMenu);
router.get("/sulawesitengah", getSulawesiTengahMenu);
router.delete("/sulawesitengah/:id", deleteSulawesiTengahMenu);
router.put("/sulawesitengah/:id", editSulawesiTengahMenu);

router.post("/sulawesitenggara", createSulawesiTenggaraMenu);
router.get("/sulawesitenggara", getSulawesiTenggaraMenu);
router.delete("/sulawesitenggara/:id", deleteSulawesiTenggaraMenu);
router.put("/sulawesitenggara/:id", editSulawesiTenggaraMenu);

router.post("/gorontalo", createGorontaloMenu);
router.get("/gorontalo", getGorontaloMenu);
router.delete("/gorontalo/:id", deleteGorontaloMenu);
router.put("/gorontalo/:id", editGorontaloMenu);

// Pulau Bali
router.post("/bali", createBaliMenu);
router.get("/bali", getBaliMenu);
router.delete("/bali/:id", deleteBaliMenu);
router.put("/bali/:id", editBaliMenu);

router.post("/maluku", createMalukuMenu);
router.get("/maluku", getMalukuMenu);
router.delete("/maluku/:id", deleteMalukuMenu);
router.put("/maluku/:id", editMalukuMenu);

router.post("/malukuutara", createMalukuUtaraMenu);
router.get("/malukuutara", getMalukuUtaraMenu);
router.delete("/malukuutara/:id", deleteMalukuUtaraMenu);
router.put("/malukuutara/:id", editMalukuUtaraMenu);

// Pulau Kalimantan
router.post("/kalimantanbarat", createKalimantanBaratMenu);
router.get("/kalimantanbarat", getKalimantanBaratMenu);
router.delete("/kalimantanbarat/:id", deleteKalimantanBaratMenu);
router.put("/kalimantanbarat/:id", editKalimantanBaratMenu);

router.post("/kalimantanutara", createKalimantanUtaraMenu);
router.get("/kalimantanutara", getKalimantanUtaraMenu);
router.delete("/kalimantanutara/:id", deleteKalimantanUtaraMenu);
router.put("/kalimantanutara/:id", editKalimantanUtaraMenu);

router.post("/kalimantantimur", createKalimantanTimurMenu);
router.get("/kalimantantimur", getKalimantanTimurMenu);
router.delete("/kalimantantimur/:id", deleteKalimantanTimurMenu);
router.put("/kalimantantimur/:id", editKalimantanTimurMenu);

router.post("/kalimantanselatan", createKalimantanSelatanMenu);
router.get("/kalimantanselatan", getKalimantanSelatanMenu);
router.delete("/kalimantanselatan/:id", deleteKalimantanSelatanMenu);
router.put("/kalimantanselatan/:id", editKalimantanSelatanMenu);

router.post("/kalimantantengah", createKalimantanTengahMenu);
router.get("/kalimantantengah", getKalimantanTengahMenu);
router.delete("/kalimantantengah/:id", deleteKalimantanTengahMenu);
router.put("/kalimantantengah/:id", editKalimantanTengahMenu);

router.post("/nusatenggaratimur", createNusaTenggaraTimurMenu);
router.get("/nusatenggaratimur", getNusaTenggaraTimurMenu);
router.delete("/nusatenggaratimur/:id", deleteNusaTenggaraTimurMenu);
router.put("/nusatenggaratimur/:id", editNusaTenggaraTimurMenu);

router.post("/nusatenggarabarat", createNusaTenggaraBaratMenu);
router.get("/nusatenggarabarat", getNusaTenggaraBaratMenu);
router.delete("/nusatenggarabarat/:id", deleteNusaTenggaraBaratMenu);
router.put("/nusatenggarabarat/:id", editNusaTenggaraBaratMenu);

router.post("/papua", createPapuaMenu);
router.get("/papua", getPapuaMenu);
router.delete("/papua/:id", deletePapuaMenu);
router.put("/papua/:id", editPapuaMenu);

// User routes
router.get("/dashboard", getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

// Serve login and register HTML pages
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/register.html"));
});

export default router;
