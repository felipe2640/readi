import * as cors from "cors";
import * as express from "express";
import { check, validationResult } from "express-validator";

import Car from "./Car";
import Consultar from "./consulta";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Readi Test");
});

app.post(
  "/consulta",
  check("Marca", "Marca deve ser informado").notEmpty(),
  check("Modelo", "Modelo deve ser informado").notEmpty(),
  check("Cor", "A cor deve ser informado").notEmpty(),
  check("anoFabricacao", "O ano de fabricação deve ser informado")
    .notEmpty()
    .isInt(),
  check("anoModelo", "O ano do modelo deve ser informado").notEmpty().isInt(),
  check(
    "tipoCambio",
    "O número de parcelas deve ser um número inteiro"
  ).notEmpty(),

  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erro: erros.array() });
    }

    try {
      const valores = await Consultar(
        req.body.Marca.toLowerCase(),
        req.body.Modelo.toLowerCase(),
        req.body.Cor.toLowerCase(),
        req.body.anoFabricacao,
        req.body.anoModelo,
        req.body.tipoCambio.toLowerCase()
      );
      return res.status(201).json(valores);
    } catch (erro) {
      return res.status(405).json({ erro: erro.message });
    }
  }
);

app.get("/Cars", async (req, res) => {
  const Cars = await Car.findAll();
  return res.status(200).json(Cars);
});

export default app;
