import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_HOST, {});

export default sequelize;
