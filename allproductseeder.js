const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/user");
const allProduct = require("./models/allProduct");
const Order = require("./models/order");
const allproducts = require("./data/allData");

const connectDb = require("./connectDb/db");
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await allProduct.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = allproducts.map((product) => {
      return { ...product, User: adminUser };
    });
    await allProduct.insertMany(sampleData);
    console.log("allproductsdata imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  await Order.deleteMany();
  await allProduct.deleteMany();
  await User.deleteMany();
  console.log(`${error}`);
  process.exit();
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
