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
router.post("/.netlify/functions/server/aceh", createAcehMenu);
router.get("/.netlify/functions/server/aceh", getAcehMenu);
router.delete("/.netlify/functions/server/aceh/:id", deleteAcehMenu);
router.put("/.netlify/functions/server/aceh/:id", editAcehMenu);

router.post("/.netlify/functions/server/sumaterautara", createSumateraUtaraMenu);
router.get("/.netlify/functions/server/sumaterautara", getSumateraUtaraMenu);
router.delete("/.netlify/functions/server/sumaterautara/:id", deleteSumateraUtaraMenu);
router.put("/.netlify/functions/server/sumaterautara/:id", editSumateraUtaraMenu);

router.post("/.netlify/functions/server/sumateraselatan", createSumateraSelatanMenu);
router.get("/.netlify/functions/server/sumateraselatan", getSumateraSelatanMenu);
router.delete("/.netlify/functions/server/sumateraselatan/:id", deleteSumateraSelatanMenu);
router.put("/.netlify/functions/server/sumateraselatan/:id", editSumateraSelatanMenu);

router.post("/.netlify/functions/server/sumaterabarat", createSumateraBaratMenu);
router.get("/.netlify/functions/server/sumaterabarat", getSumateraBaratMenu);
router.delete("/.netlify/functions/server/sumaterabarat/:id", deleteSumateraBaratMenu);
router.put("/.netlify/functions/server/sumaterabarat/:id", editSumateraBaratMenu);

router.post("/.netlify/functions/server/bengkulu", createBengkuluMenu);
router.get("/.netlify/functions/server/bengkulu", getBengkuluMenu);
router.delete("/.netlify/functions/server/bengkulu/:id", deleteBengkuluMenu);
router.put("/.netlify/functions/server/bengkulu/:id", editBengkuluMenu);

router.post("/.netlify/functions/server/riau", createRiauMenu);
router.get("/.netlify/functions/server/riau", getRiauMenu);
router.delete("/.netlify/functions/server/riau/:id", deleteRiauMenu);
router.put("/.netlify/functions/server/riau/:id", editRiauMenu);

router.post("/.netlify/functions/server/kepulauanriau", createKepulauanRiauMenu);
router.get("/.netlify/functions/server/kepulauanriau", getKepulauanRiauMenu);
router.delete("/.netlify/functions/server/kepulauanriau/:id", deleteKepulauanRiauMenu);
router.put("/.netlify/functions/server/kepulauanriau/:id", editKepulauanRiauMenu);

router.post("/.netlify/functions/server/jambi", createJambiMenu);
router.get("/.netlify/functions/server/jambi", getJambiMenu);
router.delete("/.netlify/functions/server/jambi/:id", deleteJambiMenu);
router.put("/.netlify/functions/server/jambi/:id", editJambiMenu);

router.post("/.netlify/functions/server/lampung", createLampungMenu);
router.get("/.netlify/functions/server/lampung", getLampungMenu);
router.delete("/.netlify/functions/server/lampung/:id", deleteLampungMenu);
router.put("/.netlify/functions/server/lampung/:id", editLampungMenu);

router.post("/.netlify/functions/server/bangkabelitung", createBangkaBelitungMenu);
router.get("/.netlify/functions/server/bangkabelitung", getBangkaBelitungMenu);
router.delete("/.netlify/functions/server/bangkabelitung/:id", deleteBangkaBelitungMenu);
router.put("/.netlify/functions/server/bangkabelitung/:id", editBangkaBelitungMenu);

// Pulau Jawa
router.post("/.netlify/functions/server/banten", createBantenMenu);
router.get("/.netlify/functions/server/banten", getBantenMenu);
router.delete("/.netlify/functions/server/banten/:id", deleteBantenMenu);
router.put("/.netlify/functions/server/banten/:id", editBantenMenu);

router.post("/.netlify/functions/server/jakarta", createJakartaMenu);
router.get("/.netlify/functions/server/jakarta", getJakartaMenu);
router.delete("/.netlify/functions/server/jakarta/:id", deleteJakartaMenu);
router.put("/.netlify/functions/server/jakarta/:id", editJakartaMenu);

router.post("/.netlify/functions/server/jawabarat", createJawaBaratMenu);
router.get("/.netlify/functions/server/jawabarat", getJawaBaratMenu);
router.delete("/.netlify/functions/server/jawabarat/:id", deleteJawaBaratMenu);
router.put("/.netlify/functions/server/jawabarat/:id", editJawaBaratMenu);

router.post("/.netlify/functions/server/jawatengah", createJawaTengahMenu);
router.get("/.netlify/functions/server/jawatengah", getJawaTengahMenu);
router.delete("/.netlify/functions/server/jawatengah/:id", deleteJawaTengahMenu);
router.put("/.netlify/functions/server/jawatengah/:id", editJawaTengahMenu);

router.post("/.netlify/functions/server/jawatimur", createJawaTimurMenu);
router.get("/.netlify/functions/server/jawatimur", getJawaTimurMenu);
router.delete("/.netlify/functions/server/jawatimur/:id", deleteJawaTimurMenu);
router.put("/.netlify/functions/server/jawatimur/:id", editJawaTimurMenu);

router.post("/.netlify/functions/server/yogyakarta", createYogyakartaMenu);
router.get("/.netlify/functions/server/yogyakarta", getYogyakartaMenu);
router.delete("/.netlify/functions/server/yogyakarta/:id", deleteYogyakartaMenu);
router.put("/.netlify/functions/server/yogyakarta/:id", editYogyakartaMenu);

// Pulau Sulawesi
router.post("/.netlify/functions/server/sulawesiutara", createSulawesiUtaraMenu);
router.get("/.netlify/functions/server/sulawesiutara", getSulawesiUtaraMenu);
router.delete("/.netlify/functions/server/sulawesiutara/:id", deleteSulawesiUtaraMenu);
router.put("/.netlify/functions/server/sulawesiutara/:id", editSulawesiUtaraMenu);

router.post("/.netlify/functions/server/sulawesiselatan", createSulawesiSelatanMenu);
router.get("/.netlify/functions/server/sulawesiselatan", getSulawesiSelatanMenu);
router.delete("/.netlify/functions/server/sulawesiselatan/:id", deleteSulawesiSelatanMenu);
router.put("/.netlify/functions/server/sulawesiselatan/:id", editSulawesiSelatanMenu);

router.post("/.netlify/functions/server/sulawesibarat", createSulawesiBaratMenu);
router.get("/.netlify/functions/server/sulawesibarat", getSulawesiBaratMenu);
router.delete("/.netlify/functions/server/sulawesibarat/:id", deleteSulawesiBaratMenu);
router.put("/.netlify/functions/server/sulawesibarat/:id", editSulawesiBaratMenu);

router.post("/.netlify/functions/server/sulawesitengah", createSulawesiTengahMenu);
router.get("/.netlify/functions/server/sulawesitengah", getSulawesiTengahMenu);
router.delete("/.netlify/functions/server/sulawesitengah/:id", deleteSulawesiTengahMenu);
router.put("/.netlify/functions/server/sulawesitengah/:id", editSulawesiTengahMenu);

router.post("/.netlify/functions/server/sulawesitenggara", createSulawesiTenggaraMenu);
router.get("/.netlify/functions/server/sulawesitenggara", getSulawesiTenggaraMenu);
router.delete("/.netlify/functions/server/sulawesitenggara/:id", deleteSulawesiTenggaraMenu);
router.put("/.netlify/functions/server/sulawesitenggara/:id", editSulawesiTenggaraMenu);

router.post("/.netlify/functions/server/gorontalo", createGorontaloMenu);
router.get("/.netlify/functions/server/gorontalo", getGorontaloMenu);
router.delete("/.netlify/functions/server/gorontalo/:id", deleteGorontaloMenu);
router.put("/.netlify/functions/server/gorontalo/:id", editGorontaloMenu);

// Pulau Bali
router.post("/.netlify/functions/server/bali", createBaliMenu);
router.get("/.netlify/functions/server/bali", getBaliMenu);
router.delete("/.netlify/functions/server/bali/:id", deleteBaliMenu);
router.put("/.netlify/functions/server/bali/:id", editBaliMenu);

router.post("/.netlify/functions/server/maluku", createMalukuMenu);
router.get("/.netlify/functions/server/maluku", getMalukuMenu);
router.delete("/.netlify/functions/server/maluku/:id", deleteMalukuMenu);
router.put("/.netlify/functions/server/maluku/:id", editMalukuMenu);

router.post("/.netlify/functions/server/malukuutara", createMalukuUtaraMenu);
router.get("/.netlify/functions/server/malukuutara", getMalukuUtaraMenu);
router.delete("/.netlify/functions/server/malukuutara/:id", deleteMalukuUtaraMenu);
router.put("/.netlify/functions/server/malukuutara/:id", editMalukuUtaraMenu);

// Pulau Kalimantan
router.post("/.netlify/functions/server/kalimantanbarat", createKalimantanBaratMenu);
router.get("/.netlify/functions/server/kalimantanbarat", getKalimantanBaratMenu);
router.delete("/.netlify/functions/server/kalimantanbarat/:id", deleteKalimantanBaratMenu);
router.put("/.netlify/functions/server/kalimantanbarat/:id", editKalimantanBaratMenu);

router.post("/.netlify/functions/server/kalimantanutara", createKalimantanUtaraMenu);
router.get("/.netlify/functions/server/kalimantanutara", getKalimantanUtaraMenu);
router.delete("/.netlify/functions/server/kalimantanutara/:id", deleteKalimantanUtaraMenu);
router.put("/.netlify/functions/server/kalimantanutara/:id", editKalimantanUtaraMenu);

router.post("/.netlify/functions/server/kalimantantimur", createKalimantanTimurMenu);
router.get("/.netlify/functions/server/kalimantantimur", getKalimantanTimurMenu);
router.delete("/.netlify/functions/server/kalimantantimur/:id", deleteKalimantanTimurMenu);
router.put("/.netlify/functions/server/kalimantantimur/:id", editKalimantanTimurMenu);

router.post("/.netlify/functions/server/kalimantanselatan", createKalimantanSelatanMenu);
router.get("/.netlify/functions/server/kalimantanselatan", getKalimantanSelatanMenu);
router.delete("/.netlify/functions/server/kalimantanselatan/:id", deleteKalimantanSelatanMenu);
router.put("/.netlify/functions/server/kalimantanselatan/:id", editKalimantanSelatanMenu);

router.post("/.netlify/functions/server/kalimantantengah", createKalimantanTengahMenu);
router.get("/.netlify/functions/server/kalimantantengah", getKalimantanTengahMenu);
router.delete("/.netlify/functions/server/kalimantantengah/:id", deleteKalimantanTengahMenu);
router.put("/.netlify/functions/server/kalimantantengah/:id", editKalimantanTengahMenu);

router.post("/.netlify/functions/server/nusatenggaratimur", createNusaTenggaraTimurMenu);
router.get("/.netlify/functions/server/nusatenggaratimur", getNusaTenggaraTimurMenu);
router.delete("/.netlify/functions/server/nusatenggaratimur/:id", deleteNusaTenggaraTimurMenu);
router.put("/.netlify/functions/server/nusatenggaratimur/:id", editNusaTenggaraTimurMenu);

router.post("/.netlify/functions/server/nusatenggarabarat", createNusaTenggaraBaratMenu);
router.get("/.netlify/functions/server/nusatenggarabarat", getNusaTenggaraBaratMenu);
router.delete("/.netlify/functions/server/nusatenggarabarat/:id", deleteNusaTenggaraBaratMenu);
router.put("/.netlify/functions/server/nusatenggarabarat/:id", editNusaTenggaraBaratMenu);

router.post("/.netlify/functions/server/papua", createPapuaMenu);
router.get("/.netlify/functions/server/papua", getPapuaMenu);
router.delete("/.netlify/functions/server/papua/:id", deletePapuaMenu);
router.put("/.netlify/functions/server/papua/:id", editPapuaMenu);

// User routes
router.get("/.netlify/functions/server/dashboard", getUsers);
router.post("/.netlify/functions/server/users", Register);
router.post("/.netlify/functions/server/login", Login);
router.delete("/.netlify/functions/server/logout", Logout);

// Serve login and register HTML pages
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/register.html"));
});

export default router;
