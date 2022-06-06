require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

// require mongoose
require("./src/config/mongoose");

// require authorization

// require routes
const { authRoutes, cleanerRoutes, historyRoutes } = require("./src/routes");

// middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PC Cleaner",
  });
});

app.use("/auth", authRoutes);
app.use("/cleaner", cleanerRoutes);
app.use("/history", historyRoutes);

app.listen(PORT, () => {
  console.log(`server is running at : http://localhost:${PORT}`);
});

module.exports = app;
