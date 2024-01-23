const express = require("express");
const { PORT } = require("./config");
const { connectDataBase } = require("./config/database");
const cors = require("cors");

const productRoutes = require("./router/products")

let app = express();

const startServer = () => {
  try {
    connectDataBase();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors("*"));

    app.use("/api",productRoutes);

    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`server is running on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();