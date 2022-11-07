import { DataTypes } from "sequelize";
import db from "./db";

const Carro = db.define("Carro", {
  carId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anoFabricacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anoModelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipoCambio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Carro;
