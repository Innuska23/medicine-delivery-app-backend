import ShopProduct from "../models/shop.product.model.js";

const getShopProduct = async (req, res) => {
  const shops = await ShopProduct.find();

  if (!shops) {
    throw HttpError(404, "Shop products not found");
  }

  return res.json(shops);
};

export { getShopProduct };
