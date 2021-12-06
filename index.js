const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { APPCENTER } = require("ci-info");
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");
const ProductRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("sucesso"))
  .catch((error) => console.log(error));

app.get("/api/test", () => {
  console.log("test is successfull");
});

app.use(express.json());
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/products", ProductRoute);
app.use("/api/cart", CartRoute);
app.use("/api/orders", OrderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening at localhost:5000");
});
