import express from "express";
import { getCountries } from "./country.controller.js";

const countryRouter = express.Router();

countryRouter.get("/", getCountries);

export default countryRouter;
