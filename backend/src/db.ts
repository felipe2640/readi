import { Sequelize } from "sequelize";
import db from "./config/configdb";

const sequelize = new Sequelize(
  process.env.DB_HOST ? process.env.DB_HOST : db.host,
  {}
);

export default sequelize;
