import express from 'express';
import { config } from "dotenv";
import "dotenv/config";

//middlewares
import corsMiddleware from "./middlewares/corsMiddleware.js";
import helmetMiddleware from "./middlewares/helmetMiddleware.js";
import staticMiddleware from "./middlewares/staticMiddleware.js";
import jsonMiddleware from "./middlewares/jsonMiddleware.js";

// Importiere die Routen
import mainRoute from "./routes/mainRoutes.js";
import webhookRoute from "./routes/webhookRoutes.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(staticMiddleware);
app.use(helmetMiddleware);
app.use(corsMiddleware);

// Raw Route für webhook
app.use("/webhook", webhookRoute);

// Middleware
app.use(jsonMiddleware);

// Routen werden hier definiert
app.use("/", mainRoute);

app.listen(PORT, ((error) => {
  if (!error) {
    console.log(
      `Server is successfully running, and app is listening on port ${PORT}`,
    );
  } else {
    console.error("Error occurred, server can't start", error);
  }
}));
