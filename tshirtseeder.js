const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/user");
const tProduct = require("./models/tshirtProduct");
const Order = require("./models/order");
const tproducts = require("./data/tshirtData");

const connectDb = require("./connectDb/db");
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await tProduct.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = tproducts.map((product) => {
      return { ...product, User: adminUser };
    });
    await tProduct.insertMany(sampleData);
    console.log("tshirtdata imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  await Order.deleteMany();
  await tProduct.deleteMany();
  await User.deleteMany();
  console.log(`${error}`);
  process.exit();
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
