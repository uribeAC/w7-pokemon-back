import express from "express";
import cors from "cors";
import checkHealthStatus from "./middlewares/checkHealthStatus.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";

const app = express();

app.use(cors({ origin: "https://pokemon-alex.netlify.app/" }));

app.get("/", checkHealthStatus);

app.use(handleEndpointNotFound);

export default app;
