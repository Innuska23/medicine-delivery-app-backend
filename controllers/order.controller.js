import OrderSchema from "../models/order.model.js";

const createOrder = async (req, res) => {
  const { address, email, name, phone, products } = req.body;

  const totalPrice = products?.reduce(
    (curr, item) => (curr += item.price * item.quantity),
    0
  );

  const orderProducts = products.map(({ _id, quantity }) => ({
    shopProduct: _id,
    quantity,
  }));

  const newProduct = await OrderSchema.create({
    address,
    email,
    name,
    phone,
    products: orderProducts,
    totalPrice,
  });

  if (!newProduct) {
    throw HttpError(404, "Shop products not found");
  }

  return res.json(newProduct);
};

export { createOrder };
