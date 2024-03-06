import express from "express";
import { getShops } from "../controllers/shop.controller.js";
const shopRouter = express.Router({ strict: true });

shopRouter.get("/", getShops);

export default shopRouter;
