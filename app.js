import express from "express";
import cors from "cors";
import "dotenv/config";

import shopRouter from "./routes/shop.router.js";
import shopProductRouter from "./routes/shop.product.router.js";
import orderRouter from "./routes/order.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRouter);
app.use("/api/shops-product", shopProductRouter);
app.use("/api/order", orderRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: `${message}` });
});

export default app;
