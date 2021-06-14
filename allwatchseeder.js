const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/user");
const allWatchProduct = require("./models/Search/WatchProduct");
const Order = require("./models/order");
const allwatchproducts = require("./data/Search/watchData");

const connectDb = require("./connectDb/db");
dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await allWatchProduct.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = allwatchproducts.map((product) => {
      return { ...product, User: adminUser };
    });
    await allWatchProduct.insertMany(sampleData);
    console.log("allwatchesdata imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  await Order.deleteMany();
  await allWatchProduct.deleteMany();
  await User.deleteMany();
  console.log(`${error}`);
  process.exit();
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
