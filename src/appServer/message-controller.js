import { readFile } from "fs/promises";

const db = JSON.parse(await readFile(new URL("../db.json", import.meta.url)));

export const getMail = (req, res) => {
  res.end(JSON.stringify(db));
};

export const getIncoming = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === undefined;
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getArchive = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Архив";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getImportant = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Важное";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getSpam = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Спам";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getTrash = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Корзина";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getSend = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Отправленные";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};

export const getDraft = (req, res) => {
  const resultDb = db.filter((element) => {
    return element.folder === "Черновики";
  });

  if ("id" in req.params) {
    return res.end(JSON.stringify(resultDb[req.params.id]));
  } else {
    return res.end(JSON.stringify(resultDb));
  }
};
