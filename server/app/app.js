import express from "express";
import dbConnect from "../config/db.js";
import Router from "../routes/url.route.js";
import generateCode from "../utils/generateCode.js";

const app = express();

app.use(express.json());

app.use("api/url", Router)


await dbConnect();
 generateCode()


export default app;