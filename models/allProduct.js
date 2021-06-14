const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    Comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const allproductSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  review: [reviewSchema],
  rating: {
    type: String,
    required: true,
  },
  numReview: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  countInStock: {
    type: String,
    required: true,
  },
});

const allProduct = mongoose.model("allProduct", allproductSchema);
module.exports = allProduct;
