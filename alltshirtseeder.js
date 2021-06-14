const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/user");
const allTshirtProduct = require("./models/Search/TshirtProduct");
const Order = require("./models/order");
const alltshirtproducts = require("./data/Search/TshirtData");

const connectDb = require("./connectDb/db");
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await allTshirtProduct.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = alltshirtproducts.map((product) => {
      return { ...product, User: adminUser };
    });
    await allTshirtProduct.insertMany(sampleData);
    console.log("alltshirtsdata imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  await Order.deleteMany();
  await allTshirtProduct.deleteMany();
  await User.deleteMany();
  console.log(`${error}`);
  process.exit();
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
