import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { sequelize } from "./config/sequelize";

const port = process.env.APP_PORT;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    app.listen(Number(port), (err) => {
      if (err) {
        console.log(`Server connection error:`, err);
      } else {
        console.log(`Server started at port ${port}`);
      }
    });
  })
  .catch((err) => {
    console.error("Sequelize Connection Error:", err);
  });
