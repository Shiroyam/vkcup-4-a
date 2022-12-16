import { readFile } from "fs/promises";

const db = JSON.parse(await readFile(new URL("../db.json", import.meta.url)));

export const getMail = (req, res) => {
  res.end(JSON.stringify(db));
};

export const getIncoming = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === undefined;
      })
    )
  );
};

export const getArchive = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Архив";
      })
    )
  );
};

export const getImportant = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Важное";
      })
    )
  );
};

export const getSpam = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Спам";
      })
    )
  );
};

export const getTrash = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Корзина";
      })
    )
  );
};

export const getSend = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Отправленные";
      })
    )
  );
};

export const getDraft = (req, res) => {
  return res.end(
    JSON.stringify(
      db.filter((element) => {
        return element.folder === "Черновики";
      })
    )
  );
};
