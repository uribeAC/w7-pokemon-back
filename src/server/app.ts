import express from "express";
import checkHealthStatus from "./middlewares/checkHealthStatus.js";

const app = express();

app.get("/", checkHealthStatus);

export default app;
