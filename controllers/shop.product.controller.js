import mongoose from "mongoose";
import ShopProduct from "../models/shop.product.model.js";
import controlWrapper from "../decorators/controlWraper.js";

const getShopProduct = async (req, res) => {
  const shopId = req.params.shopId;

  if (!shopId) {
    throw HttpError(400, "ShopId not provide");
  }

  const shops = await ShopProduct.find({ shop: shopId });

  if (!shops) {
    throw HttpError(404, "Shop products not found");
  }

  return res.json(shops);
};

export const shopsProductController = {
  getShopProduct: controlWrapper(getShopProduct),
};
