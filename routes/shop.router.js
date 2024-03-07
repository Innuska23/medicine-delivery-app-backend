import express from "express";
import { shopsController } from "../controllers/shop.controller.js";
const shopRouter = express.Router({ strict: true });

shopRouter.get("/", shopsController.getShops);

export default shopRouter;
