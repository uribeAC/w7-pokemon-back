import express from "express";
import cors from "cors";
import morgan from "morgan";
import checkHealthStatus from "./middlewares/checkHealthStatus.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import pokemonsRouter from "../pokemon/router/pokemonsRouter.js";

const app = express();

app.use(
  cors({
    origin: [/^http:\/\/localhost:\d+/, /pokemon-alex\.netlify\.app/],
    credentials: true,
  }),
);

app.use(morgan("dev"));

app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/pokemon", pokemonsRouter);

app.use(handleEndpointNotFound);

export default app;
