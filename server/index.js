const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

const product = require("./routes/product");

const db = process.env.MONGODB_URI;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Could not Connect to mongoDB", err);
  });

app.use(cors());
app.use(express.json());

// provide security
app.use(helmet());

app.use("/api/product", product);

const defaultPort = 3003;
const port = process.env.PORT || defaultPort;

const server = app.listen(port, () =>
  console.log(`Listening on port ${port} ...`)
);

module.exports = server;
