import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router({ strict: true });

orderRouter.post("/", createOrder);

export default orderRouter;
