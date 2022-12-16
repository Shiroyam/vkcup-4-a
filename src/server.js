import { Application } from "./appServer/Application.js";
import { router } from "./appServer/message-router.js";
import { parserJson } from "./appServer/parserJson.js";
import { parserUrl } from "./appServer/parserUrl.js";

const PORT = 3000;

const app = new Application();

app.use(parserJson);
app.use(parserUrl("http://localhost:3000"));

app.addRouter(router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
