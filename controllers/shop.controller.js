import Shop from "../models/shop.model.js";

const getShops = async (req, res) => {
  const shops = await Shop.find();

  if (!shops) {
    throw HttpError(404, "Shops not found");
  }

  return res.json(shops);
};

export { getShops };
