import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
