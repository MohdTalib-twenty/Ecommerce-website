const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/user");
const wProduct = require("./models/watchProduct");
const Order = require("./models/order");
const wproducts = require("./data/watchData");

const connectDb = require("./connectDb/db");
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await wProduct.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = wproducts.map((product) => {
      return { ...product, User: adminUser };
    });
    await wProduct.insertMany(sampleData);
    console.log("watchdata imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  await Order.deleteMany();
  await wProduct.deleteMany();
  await User.deleteMany();
  console.log(`${error}`);
  process.exit();
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
