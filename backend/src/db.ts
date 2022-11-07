import { Sequelize } from "sequelize";
import db from "./config/configdb";

const sequelize = new Sequelize(db.host, {});

export default sequelize;
