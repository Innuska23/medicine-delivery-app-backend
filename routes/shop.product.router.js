import express from "express";
import { getShopProduct } from "../controllers/shop.product.controller.js";

const shopProductRouter = express.Router({ strict: true });

shopProductRouter.get("/:shopId", getShopProduct);

export default shopProductRouter;
