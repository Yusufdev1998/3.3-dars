import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./config/mongoConnect.js";
import countryRouter from "./routes/country/country.routes.js";
dotenv.config();

mongoConnect();

const app = express();

app.use("/countries", countryRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running...");
});
