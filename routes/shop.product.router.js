import express from "express";
import { shopsProductController } from "../controllers/shop.product.controller.js";

const shopProductRouter = express.Router({ strict: true });

shopProductRouter.get("/:shopId", shopsProductController.getShopProduct);

export default shopProductRouter;
