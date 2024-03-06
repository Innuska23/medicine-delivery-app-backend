import mongoose, { Schema } from "mongoose";

const shopProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    imgSrc: {
      type: String,
      required: [true, "imgSrc is required"],
    },
    shop: { type: Schema.Types.ObjectId, ref: "Shop" },
  },
  { versionKey: false, timestamps: true }
);

const Shop = mongoose.model("ShopProduct", shopProductSchema);

export default Shop;
