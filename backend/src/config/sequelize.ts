import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  schema: process.env.DB_SCHEMA,
  dialect: "postgres",
  timezone: process.env.DB_TIMEZONE,
  typeValidation: true,
  dialectOptions: {
    prependSearchPath: true,
  },
});
