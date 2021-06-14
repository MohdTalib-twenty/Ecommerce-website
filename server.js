const express = require("express");
const dotenv = require("dotenv");
const ConnectDB = require("./connectDb/db");
const cors = require("cors");
const fProductsRoute = require("./routes/featuredRoutes");
const tProductRoutes = require("./routes/tshirtRoutes");
const sProductRoutes = require("./routes/shoesRoutes");
const wProductRoutes = require("./routes/watchRoutes");
const allProductRoutes = require("./routes/allProductRoutes");
const allwatchesRoutes = require("./routes/allwatchRoutes");
const alltshirtsRoutes = require("./routes/allTshirtRoutes");
const allshoesRoutes = require("./routes/allShoesRoutes");
const UserRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
ConnectDB();
const app = express();

require("./models/user");
app.use(cors());
app.use(express.json());
app.use("/api", fProductsRoute);
app.use("/api", tProductRoutes);
app.use("/api", allProductRoutes);
app.use("/api", wProductRoutes);
app.use("/api", sProductRoutes);
app.use("/api", allwatchesRoutes);
app.use("/api", alltshirtsRoutes);
app.use("/api", allshoesRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `COnnection Successfull with Backend Port no ${process.env.PORT}`
  );
});
