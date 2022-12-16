import {
  getArchive,
  getDraft,
  getImportant,
  getIncoming,
  getMail,
  getSend,
  getSpam,
  getTrash,
} from "./message-controller.js";
import { Router } from "./Router.js";

export const router = new Router();

router.get("/", getIncoming);

router.get("/mail", getMail);

router.get("/archive", getArchive);

router.get("/send", getSend);

router.get("/draft", getDraft);

router.get("/important", getImportant);

router.get("/spam", getSpam);

router.get("/trash", getTrash);
