"use strict";


import express from "express";
import routes from "./routes";
//import dotenv from "dotenv";


const PORT = 5000;
const HOST = "0.0.0.0";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running!!");
});

app.use("/v1", routes.api);



app.listen(PORT, HOST);

export default app;
