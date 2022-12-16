import http from "http";
import { readFile } from "fs/promises";

const db = JSON.parse(await readFile(new URL("./db.json", import.meta.url)));

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  if (req.url === "/mail") {
    return res.end(JSON.stringify(db));
  }

  if (req.url === "/") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === undefined;
        })
      )
    );
  }

  if (req.url === "/archive") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Архив";
        })
      )
    );
  }

  if (req.url === "/important") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Важное";
        })
      )
    );
  }

  if (req.url === "/spam") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Спам";
        })
      )
    );
  }

  if (req.url === "/trash") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Корзина";
        })
      )
    );
  }

  if (req.url === "/send") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Отправленные";
        })
      )
    );
  }

  if (req.url === "/draft") {
    return res.end(
      JSON.stringify(
        db.filter((element) => {
          return element.folder === "Черновики";
        })
      )
    );
  }
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
